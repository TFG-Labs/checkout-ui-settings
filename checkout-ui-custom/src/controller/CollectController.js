import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import { STEPS, COUNTRIES, COUNTRIES_AVAILABLES, AD_TYPE } from '../utils/const';
import { PickupComplementField, InputError } from '../templates';

const CartController = (() => {
  const state = {
    inCollect: false,
    pickupSelected: false,
    validForm: false,
    intTelInput: {}
  };

  const changeTranslations = () => {
    $('p.vtex-omnishipping-1-x-shippingSectionTitle').text('Collect options');
    $('#change-pickup-button').text('Available pickup points');
    $('h2.vtex-omnishipping-1-x-geolocationTitle.ask-for-geolocation-title').text('Find nearby Click & Collect points');
    $('h3.vtex-omnishipping-1-x-subtitle.ask-for-geolocation-subtitle')
      .text('Search for addresses that you frequently use and we\'ll locate stores nearby.');

    if (state.pickupSelected) {
      $('label.shp-pickup-receiver__label').text('Recipient\'s name');
    }
  };

  const bindingEvents = () => {
    // eslint-disable-next-line func-names
    $(document).on('keyup', 'div.shipping-container #custom-pickup-complement', function () {
      /* Forzamos el cambio del valor de placeholder para que no marque undefined */
      if (!$(this).val()) {
        $(this).attr('placeholder', '');
      }
    });
  };

  const checkFields = (fields) => {
    fields.forEach((field) => {
      let isValid = true;
      let parent;

      switch (field) {
        case 'pickup-receiver':
          isValid = !($(`#${field}`).length > 0 && !$(`#${field}`).attr('disabled') && !$(`#${field}`).val());
          parent = '.shp-pickup-receiver';
          break;
        case 'custom-pickup-complement':
          if (!state.intTelInput) return;
          if (typeof state.intTelInput.isValidNumber !== 'function') return;

          isValid = state.intTelInput.isValidNumber();
          parent = '#box-pickup-complement';
          break;
        default:
          break;
      }

      if (!isValid) {
        $(parent).addClass('error');
        $(parent).append(InputError());
        $(`${parent} span.error`).show();
        state.validForm = false;
      } else {
        $(parent).removeClass('error');
      }
    });
  };

  const checkForm = () => {
    // Reset state & clear errors
    $('span.help.error').remove();
    state.validForm = true;

    checkFields(['pickup-receiver', 'custom-pickup-complement']);
  };

  const saveCollectFields = () => {
    checkForm();

    if (state.validForm) {
      window.vtexjs.checkout.getOrderForm()
        .then((orderForm) => {
          const { address } = orderForm.shippingData;
          address.receiverName = $('#pickup-receiver').val();
          address.complement = $('#custom-pickup-complement').val();

          return window.vtexjs.checkout.calculateShipping(address);
        }).done(() => {
          window.location.hash = STEPS.PAYMENT;
        });
    }
  };

  //! TODO: al merger a develop podemos refactorizar esta función llevándola a utils
  const setInputPhone = () => {
    const phoneInput = document.querySelector('input#custom-pickup-complement');

    const customPlaceholder = (_, selectedCountryData) => {
      $('.iti--allow-dropdown').attr('data-content', COUNTRIES[selectedCountryData.iso2].phonePlaceholder);
    };

    if (phoneInput) {
      const iti = intlTelInput(phoneInput, {
        initialCountry: COUNTRIES.za.code,
        onlyCountries: COUNTRIES_AVAILABLES,
        customPlaceholder
      });
      state.intTelInput = iti;
      phoneInput.setAttribute('placeholder', '');
    }
  };

  const addCustomPhoneInput = () => {
    if ($('input#custom-pickup-complement').length === 0) {
      $('.btn-go-to-payment-wrapper').before(PickupComplementField);
      setInputPhone();

      /* Set orderForm value if exists */
      const address = window.vtexjs.checkout.orderForm?.shippingData?.address;

      if (address && address.complement) {
        $('input#custom-pickup-complement').val(address.complement).attr('value', address.complement);
      }
    }
  };

  //! TODO: al merger a develop podemos refactorizar esta función llevándola a utils
  const addCustomBtnPayment = () => {
    if ($('#custom-go-to-payment').length <= 0) {
      const nativePaymentBtn = $('#btn-go-to-payment');
      const customPaymentBtn = nativePaymentBtn.clone(false);

      $(nativePaymentBtn).hide();
      $(customPaymentBtn).data('bind', '');
      $(customPaymentBtn).removeAttr('id').attr('id', 'custom-go-to-payment');
      $(customPaymentBtn).removeAttr('data-bind');
      $(customPaymentBtn).css('display', 'block');

      $('p.btn-go-to-payment-wrapper').append(customPaymentBtn);

      $(customPaymentBtn).on('click', saveCollectFields);
    }
  };

  const runCustomization = () => {
    const shippingLoaded = ($('div#postalCode-finished-loading').length > 0);

    if (window.location.hash === STEPS.SHIPPING && shippingLoaded) {
      state.inCollect = $('#shipping-option-pickup-in-point').hasClass('shp-method-option-active');
      state.pickupSelected = $('div.ask-for-geolocation').length === 0;

      if (state.inCollect) {
        if (state.pickupSelected) {
          $('button.shp-pickup-receiver__btn').trigger('click');
          $('div.shp-pickup-receiver').addClass('show');

          addCustomPhoneInput();
          addCustomBtnPayment();
        } else {
          $('div.shp-pickup-receiver').removeClass('show');
        }

        changeTranslations();
        bindingEvents();
      }

      /* If it has been redirected because of missing values, the click is forced to show the errors */
      if (localStorage.getItem('shipping-incomplete-values')) {
        $('#custom-go-to-payment').trigger('click');
        localStorage.removeItem('shipping-incomplete-values');
      }
    } else {
      /* Remove box-pickup-complement so that the input does not appear in the other steps of the checkout process  */
      $('#box-pickup-complement').remove();

      if (window.location.hash === STEPS.PAYMENT) {
        const address = window.vtexjs.checkout.orderForm?.shippingData?.address;

        /* Redirect to shipping if required fields are empty */
        if (address && address.addressType === AD_TYPE.PICKUP && (!address.receiverName || !address.complement)) {
          window.location.hash = STEPS.SHIPPING;
          localStorage.setItem('shipping-incomplete-values', true);
        }
      }
    }
  };

  // EVENTS SUBSCRIPTION
  $(document).ready(() => {
    runCustomization();
  });

  $(window).on('hashchange orderFormUpdated.vtex', () => {
    runCustomization();
  });

  const publicInit = () => { };

  return {
    init: publicInit,
    state
  };
})();

export default CartController;
