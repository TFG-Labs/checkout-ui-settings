import intlTelInput from 'intl-tel-input';
import {
  STEPS,
  TIMEOUT_500,
  TIMEOUT_750,
  RICA_APP,
  FURNITURE_FEES,
  COUNTRIES_AVAILABLES,
  COUNTRIES,
  AD_TYPE
} from '../utils/const';
import {
  getShippingData,
  addBorderTop,
  waitAndResetLocalStorage,
  checkoutGetCustomData,
  setMasterdataFields,
  setRicaFields
} from '../utils/functions';
import {
  FurnitureForm,
  TVorRICAMsg,
  TVIDForm,
  RICAForm,
  MixedProducts,
  AddressForm,
  SuburbField
} from '../templates';
import CartController from './CartController';
import 'intl-tel-input/build/css/intlTelInput.css';

const FURNITURE_FEE_LINK = `<a href="${FURNITURE_FEES}" class="furniture-fees-link"`
  + 'target="_blank">Furniture delivery costs</a>';

const ViewController = (() => {
  const state = {
    showFurnitureForm: false,
    showTVIDForm: false,
    showRICAForm: false,
    showTVorRICAMsg: false,
    showMixedProductsMsg: false,
    intTelInput: {},
    captureGoogleInputOnChange: false,
    captureAddressListOnChange: false
  };

  const checkCartCategories = () => {
    if (window.vtexjs.checkout.orderForm) {
      const { items } = window.vtexjs.checkout.orderForm;
      const { categories } = CartController.state;
      const { config } = CartController;

      state.showFurnitureForm = categories.includes(config.furnitureId);
      state.showTVIDForm = categories.includes(config.tvId);
      state.showRICAForm = categories.includes(config.simCardId);
      state.showTVorRICAMsg = state.showTVIDForm || state.showRICAForm;
      /**
        Conditions to show mixed products alert:
        - more than one item
        - after filter categories, this array includes at least one furniture id
        - there are only one category OR not all the categories in the array are furniture
      */
      state.showMixedProductsMsg = items.length > 1
        && categories.includes(config.furnitureId)
        && (categories.length === 1 || !categories.every((value) => value === config.furnitureId));
    }
  };

  const showCustomSections = () => {
    const { config } = CartController;

    const tvRICAStepExists = $('#tfg-custom-rica-msg').length > 0;
    const tvIDStepExists = $('#tfg-custom-tvid-step').length > 0;
    const furnitureStepExists = $('#tfg-custom-furniture-step').length > 0;
    const tvOrRICAMsgStepExists = $('#tfg-custom-tvrica-msg').length > 0;
    const mixedProductsMsgExits = $('#tfg-custom-mixed-msg').length > 0;

    if (state.showRICAForm && !tvRICAStepExists) {
      $('.vtex-omnishipping-1-x-deliveryGroup').prepend(RICAForm());
      $('#tfg-rica-same-address').trigger('change');
    }

    if (state.showTVIDForm && !tvIDStepExists) {
      $('.vtex-omnishipping-1-x-deliveryGroup').prepend(TVIDForm());
    }

    if (state.showFurnitureForm && !furnitureStepExists) {
      $('.vtex-omnishipping-1-x-deliveryGroup').prepend(FurnitureForm(config.furnitureForm));
      $('.vtex-omnishipping-1-x-deliveryGroup p.vtex-omnishipping-1-x-shippingSectionTitle').append(FURNITURE_FEE_LINK);
      $('div.subheader').css('display', 'none');
    }

    if (state.showTVorRICAMsg || state.showMixedProductsMsg) {
      $('#shipping-option-delivery').trigger('click');
      $('.vtex-omnishipping-1-x-deliveryChannelsWrapper').addClass('custom-disabled');

      if (state.showTVorRICAMsg && !tvOrRICAMsgStepExists) {
        $('.vtex-omnishipping-1-x-addressFormPart1').prepend(TVorRICAMsg(config.TVorRICAMsg));
      }

      if (state.showMixedProductsMsg && !mixedProductsMsgExits) {
        $('.vtex-omnishipping-1-x-addressFormPart1').prepend(MixedProducts(config.MixedProductsMsg));
      }
    }

    addBorderTop('.tfg-custom-step');
  };

  const shippingCustomDataCompleted = async () => {
    let validData = false;

    if (window.vtexjs.checkout.orderForm && window.vtexjs.checkout.orderForm.shippingData.address) {
      const { addressId } = window.vtexjs.checkout.orderForm.shippingData.address;
      const fields = '?_fields=companyBuilding,furnitureReady,buildingType,parkingDistance,'
        + 'deliveryFloor,liftOrStairs,hasSufficientSpace,assembleFurniture,tvID';

      const customShippingInfo = await getShippingData(addressId, fields);

      if (customShippingInfo) {
        let furnitureCompleted = false;
        let tvCompleted = false;

        if (
          state.showFurnitureForm
          && customShippingInfo.buildingType
          && customShippingInfo.deliveryFloor
          && customShippingInfo.parkingDistance
        ) {
          furnitureCompleted = true;
          validData = true;
        }

        if (state.showTVIDForm && customShippingInfo.tvID) {
          tvCompleted = true;
          validData = true;
        }

        if (state.showFurnitureForm && state.showTVIDForm && (!furnitureCompleted || !tvCompleted)) {
          validData = false;
        }
      }
    }

    return validData;
  };

  const ricaFieldsCompleted = () => {
    let validData = false;

    const ricaFields = checkoutGetCustomData(RICA_APP);

    if (
      ricaFields
      && ricaFields.idOrPassport
      && ricaFields.fullName
      && ricaFields.streetAddress
      && ricaFields.suburb
      && ricaFields.city
      && ricaFields.postalCode
      && ricaFields.province
    ) {
      validData = true;
    }

    return validData;
  };

  const isAddressFormCompleted = () => {
    const address = window.vtexjs.checkout?.orderForm?.shippingData?.address;
    return (address?.complement && address?.receiverName && address?.neighborhood);
  };

  const addAddressFormFields = () => {
    const setInputPhone = () => {
      const customPlaceholder = (_, selectedCountryData) => {
        $('.iti--allow-dropdown').attr('data-content', COUNTRIES[selectedCountryData.iso2].phonePlaceholder);
        return '';
      };

      const phoneInput = document.querySelector('.custom-field-complement input');
      if (phoneInput) {
        const iti = intlTelInput(phoneInput, {
          initialCountry: COUNTRIES.za.code,
          onlyCountries: COUNTRIES_AVAILABLES,
          customPlaceholder
        });

        state.intTelInput = iti;
      }
    };

    const saveCustomFieldAddress = () => {
      $('.tfg-custom-addressForm input').change((event) => {
        const field = event.target;
        const fieldName = field.getAttribute('field');
        const fields = JSON.parse(localStorage.getItem('custom-address-form-fields')) ?? {};

        fields[fieldName] = field.value;

        localStorage.setItem('custom-address-form-fields', JSON.stringify(fields));
      });
    };

    // Insert elements
    const isAddressFormFieldsAdded = !!$('.tfg-custom-addressForm').length;
    if (!isAddressFormFieldsAdded) {
      $('.vcustom--vtex-omnishipping-1-x-address form').prepend(AddressForm());
      $('.vcustom--vtex-omnishipping-1-x-address__state').prepend(SuburbField());
      setInputPhone();
      saveCustomFieldAddress();
    }
  };

  const setValueToReceiverAndComplement = () => {
    const fields = JSON.parse(localStorage.getItem('custom-address-form-fields')) ?? {};
    const { firstName, lastName, phone } = window.vtexjs.checkout.orderForm.clientProfileData;

    fields.receiverName = `${firstName} ${lastName}`;
    fields.complement = phone;

    $('#custom-field-receiverName').val(fields.receiverName).attr('value', fields.receiverName);
    $('#custom-field-complement').val(fields.complement).attr('value', fields.complement);
    $('#custom-field-complement').attr('placeholder', fields.complement || '');

    localStorage.setItem('custom-address-form-fields', JSON.stringify(fields));
  };

  const toggleGoogleInput = () => {
    if (!$('#v-custom-ship-street').val()) {
      $('.body-order-form #shipping-data .vcustom--vtex-omnishipping-1-x-address > div > form').toggleClass('google');
      const selector = `.custom-field-receiverName,
        .custom-field-complement, .custom-field-companyBuilding,
        .vcustom--vtex-omnishipping-1-x-address__state,
          .v-custom-ship-info, .btn-go-to-shipping-wrapper`;
      $(selector).hide();
      $('.v-custom-ship-street label').text('Add a new delivery address');
      $('#v-custom-ship-street').attr('placeholder', 'Search for address');

      $('#v-custom-ship-street').one('change', () => {
        $('.body-order-form #shipping-data .vcustom--vtex-omnishipping-1-x-address > div > form').toggleClass('google');
        $(selector).show();
        $('.v-custom-ship-street label').text('Street address');
        $('#v-custom-ship-street').attr(
          'placeholder',
          'Eg: 234 Brickfield Rd, Salt River, Cape Town, 7501, South Africa'
        );
        setValueToReceiverAndComplement();
      });
    }
  };

  const setDataInCustomFields = async () => {
    if (window.vtexjs.checkout.orderForm) {
      const { address } = window.vtexjs.checkout.orderForm.shippingData;
      const { showFurnitureForm, showRICAForm, showTVIDForm } = ViewController.state;

      if (showRICAForm) {
        setRicaFields();
      }

      if (address) {
        await setMasterdataFields(showFurnitureForm, showTVIDForm);
      }
    }
  };

  const runCustomization = () => {
    /* Hiding subheader when there is furniture in cart */
    setTimeout(() => {
      checkCartCategories();

      if (state.showFurnitureForm) {
        $('div.subheader').css('display', 'none');
      } else {
        $('div.subheader').css('display', 'block');
      }
    }, TIMEOUT_500);

    /* Adding custom sections */
    if (window.location.hash === STEPS.SHIPPING || window.location.hash === STEPS.PAYMENT) {
      setTimeout(() => {
        const address = window.vtexjs.checkout?.orderForm?.shippingData?.address;

        if (!address || (address && address.addressType === AD_TYPE.DELIVERY)) {
          if (window.location.hash === STEPS.SHIPPING) {
            addAddressFormFields();
            toggleGoogleInput();

            if (address) {
              setTimeout(() => {
                showCustomSections();
                setDataInCustomFields();
              }, TIMEOUT_500);
            }
          } else if (window.location.hash === STEPS.PAYMENT) {
            const isAddressCompleted = isAddressFormCompleted();

            if (!isAddressCompleted) {
              window.location.hash = STEPS.SHIPPING;
              setTimeout(() => {
                const addressEditSelector = $('.vtex-omnishipping-1-x-buttonEditAddress').length > 0
                  ? $('.vtex-omnishipping-1-x-buttonEditAddress')
                  : $('.vtex-omnishipping-1-x-linkEdit');
                addressEditSelector.trigger('click');
              }, TIMEOUT_750);
            }

            if (state.showFurnitureForm || state.showRICAForm || state.showTVIDForm) {
              let isDataCompleted = localStorage.getItem('shippingDataCompleted');

              if (!isDataCompleted) {
                setTimeout(async () => {
                  if (state.showRICAForm) {
                    isDataCompleted = ricaFieldsCompleted();
                  }

                  if (state.showFurnitureForm || state.showTVIDForm) {
                    isDataCompleted = await shippingCustomDataCompleted();
                  }

                  if (!isDataCompleted) {
                    window.location.hash = STEPS.SHIPPING;
                  }
                }, TIMEOUT_750);
              } else {
                waitAndResetLocalStorage();
              }
            }
          }
        }
      }, 1000);
    }
  };

  // EVENTS SUBSCRIPTION
  $(document).ready(() => {
    runCustomization();
  });

  $(window).on('hashchange orderFormUpdated.vtex', () => {
    runCustomization();
  });

  $(document).on('click', '.vtex-omnishipping-1-x-addressList #new-address-button', () => {
    /* Empty custom fields for new address & set default values */
    $('.tfg-custom-addressForm input').val('').attr('value', '');
    setValueToReceiverAndComplement();
  });

  $(document).on('click', '.vtex-omnishipping-1-x-addressList #edit-address-button', () => {
    setDataInCustomFields();
  });

  const publicInit = () => { };

  return {
    init: publicInit,
    state
  };
})();

export default ViewController;
