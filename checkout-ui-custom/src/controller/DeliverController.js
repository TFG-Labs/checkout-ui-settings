// @ts-nocheck
/* eslint-disable func-names */
import AddAddressAutoCompleteForm, {
  ADD_ADDRESS_AUTOCOMPLETE_FORM_RECEIVER_PHONE_ID,
  submitAddAddressAutoCompleteForm,
} from '../partials/Deliver/AddAddressAutoCompleteForm';
import AddAddressManualForm, {
  ADD_ADDRESS_FORM_MANUAL_RECIEVER_PHONE_ID,
  submitAddAddressManualForm,
} from '../partials/Deliver/AddAddressManualForm';
import DeliverContainer from '../partials/Deliver/DeliverContainer';
import { CouldNotSelectAddressError, ShowDeliveryError } from '../partials/Deliver/DeliveryError';

import EditAddressForm, {
  EDIT_FORM_RECEIVER_PHONE_ID,
  submitEditAddressForm,
} from '../partials/Deliver/EditAddressForm';
import ExtraFieldsContainer from '../partials/Deliver/ExtraFieldsContainer';
import {
  clearRicaFields,
  customShippingDataIsValid,
  parseAttribute,
  populateAddresses,
  populateDeliveryError,
  populateRicaFields,
  populateTVFields,
  setCartClasses,
  updateDeliveryFeeDisplay,
} from '../partials/Deliver/utils';
import {
  ADD_ADDRESS_CAPTURE_METHOD,
  ADD_ADDRESS_METHOD,
  ADD_ADDRESS_STAGE,
  EVENT_NAME,
  PARAMETER,
  trackAddressEvent,
} from '../utils/addressAnalytics';
import { AD_TYPE, DATA_VIEW, STEPS } from '../utils/const';
import handleDeleteAddress from '../utils/deleteAddress';
import { formatAddressSummary } from '../utils/formatAddressSummary';
import {
  clearHTML,
  clearLoaders,
  getSpecialCategories,
  hideBusinessName,
  scrollToInvalidField,
  showBusinessName,
} from '../utils/functions';
import { preparePhoneField } from '../utils/phoneFields';
import sendEvent from '../utils/sendEvent';
import { clearAddresses, getAddressByName, removeFromCart } from '../utils/services';
import setAddress from '../utils/setAddress';
import submitDeliveryForm from '../utils/submitDeliveryForm';

const DeliverController = (() => {
  const state = {
    view: 'list',
    hasFurn: false,
    hasTVs: false,
    hasSim: false,
    hasFurnMixed: false,
    hasFurnOnly: false,
  };

  const unblockShippingError = () => {
    if (window.location.hash === STEPS.SHIPPING) {
      if ($('.shipping-summary-info').length && $('.shipping-summary-info').text() === 'Waiting for more information') {
        window.location.hash = STEPS.PROFILE;
        sendEvent({
          action: 'stepRedirect',
          label: 'redirectShippingToProfile',
          description: 'User redirect to profile - "Waiting for more information" error.',
        });
      }
    }
  };

  const RenderEditAddress = async (addressName) => {
    const data = await getAddressByName(addressName);
    $('#edit-adress-section').html(EditAddressForm(data));
    preparePhoneField(`#${EDIT_FORM_RECEIVER_PHONE_ID}`);
  };

  const RenderAddAddressAutoComplete = async (address) => {
    $('#add-address-autocomplete-section').html(AddAddressAutoCompleteForm(address));
    preparePhoneField(`#${ADD_ADDRESS_AUTOCOMPLETE_FORM_RECEIVER_PHONE_ID}`);
  };

  const RenderAddAddressManual = async (type, address) => {
    const mountPoint = type === 'MANUAL' ? '#manual-address-section' : '#add-address-autocomplete-manual-section';

    $(mountPoint).html(AddAddressManualForm({ type, address }));
    preparePhoneField(`#${ADD_ADDRESS_FORM_MANUAL_RECIEVER_PHONE_ID}`);
  };

  const clearEditAddress = () => clearHTML('#edit-adress-section');

  const clearAddAddressAutoComplete = () => clearHTML('#add-address-autocomplete-section');

  const clearAddAddressAutoCompleteManual = () => clearHTML('#add-address-autocomplete-manual-section');

  const clearManualAddress = () => clearHTML('#manual-address-section');

  const setupDeliver = () => {
    unblockShippingError();
    if ($('#bash--delivery-container').length) return;

    if (window.vtexjs.checkout.orderForm) {
      const items = window.vtexjs.checkout.orderForm?.items;
      const { hasFurniture, hasTVs, hasSimCards, hasFurnitureMixed, hasFurnitureOnly } = getSpecialCategories(items);

      state.hasFurn = hasFurniture;
      state.hasTVs = hasTVs;
      state.hasSim = hasSimCards;
      state.hasFurnOnly = hasFurnitureOnly;
      state.hasFurnMixed = hasFurnitureMixed;
    }

    $('.shipping-data .box-step').append(
      DeliverContainer({
        hasFurnOnly: state.hasFurnOnly,
        hasFurnMixed: state.hasFurnMixed,
      })
    );

    populateAddresses();

    if (state.hasFurn) {
      $('#shipping-data:not(.has-furniture)').addClass('has-furniture');
    } else {
      $('#shipping-data.has-furniture').removeClass('has-furniture');
    }

    const showExtraFields = state.hasFurn || state.hasSim || state.hasTVs;

    if (showExtraFields) {
      $('#bash-delivery-options').before(
        ExtraFieldsContainer({
          hasSim: state.hasSim,
          hasTV: state.hasTVs,
        })
      );

      if (state.hasSim) populateRicaFields();
      if (state.hasTVs) populateTVFields();
    }

    const fieldsToValidate = 'select, input';
    // eslint-disable-next-line func-names
    $(fieldsToValidate).on('invalid', function () {
      const field = this;
      $(field)[0].setCustomValidity(' ');
      $(field).parents('form').addClass('show-form-errors');
      $(field).off('change keyUp');
      $(field).on('change keyUp', () => {
        $(field)[0].setCustomValidity('');
      });
    });
  };

  // EVENTS

  $(window).unload(async () => {
    clearAddresses();
  });

  $(document).ready(() => {
    clearAddresses();
    if (window.location.hash === STEPS.SHIPPING) {
      setupDeliver();
      $('.bash--delivery-container.hide').removeClass('hide');
      $('.bash--delivery-container').css('display', 'flex');
    } else if ($('.bash--delivery-container:not(.hide)').length) {
      $('.bash--delivery-container:not(.hide)').addClass('hide');
      $('.bash--delivery-container').css('display', 'none');
    }
  });

  $(window).on('hashchange', () => {
    console.info('hashchange TO SHIPPING');

    if (window.location.hash === STEPS.SHIPPING) {
      setTimeout(() => {
        console.info('SCROLL TO SHIPPING');
        document.getElementById('shipping-data').scrollIntoView({ behavior: 'smooth' });
      }, 500);
      setupDeliver();
      setCartClasses();
      $('.bash--delivery-container').css('display', 'flex');
      $('.bash--delivery-container.hide').removeClass('hide');
    } else if ($('.bash--delivery-container:not(.hide)').length) {
      $('.bash--delivery-container:not(.hide)').addClass('hide');
      $('.bash--delivery-container').css('display', 'none');
    }
  });

  // Define which tab is active ;/
  $(window).on('orderFormUpdated.vtex', () => {
    const items = window.vtexjs.checkout.orderForm?.items;
    const addressType = window.vtexjs.checkout.orderForm.shippingData?.address?.addressType;
    const { hasTVs, hasSimCards, hasFurnitureMixed } = getSpecialCategories(items);
    const { messages } = window.vtexjs.checkout.orderForm;

    if (window.location.hash === STEPS.SHIPPING) {
      const errors = messages.filter((msg) => msg.status === 'error');
      if (errors) populateDeliveryError(errors);
    }

    if (
      addressType === AD_TYPE.PICKUP || // sometimes addressType is undefined ;(
      $('#shipping-option-pickup-in-point').hasClass('shp-method-option-active')
    ) {
      // User has Collect enabled, but has Rica or TV products,
      // or Furniture + Non Furn.
      if (hasTVs || hasSimCards || hasFurnitureMixed) {
        if (window.location.hash !== STEPS.SHIPPING) window.location.hash = STEPS.SHIPPING;
        setTimeout(() => document.getElementById('shipping-option-delivery')?.click(), 2000);
        return;
      }
      $('#shipping-data:not(collection-active)').addClass('collection-active');
      $('.delivery-active').removeClass('delivery-active');
    } else {
      setupDeliver();
      $('#shipping-data:not(delivery-active)').addClass('delivery-active');
      $('.collection-active').removeClass('collection-active');
    }

    setCartClasses();
    updateDeliveryFeeDisplay();
    formatAddressSummary();

    if (window.location.hash === STEPS.PAYMENT && !customShippingDataIsValid()) {
      scrollToInvalidField();
      window.location.hash = STEPS.SHIPPING;
      sendEvent({
        action: 'stepRedirect',
        label: 'redirectPaymentToShipping',
        description: 'User redirect to shipping because Extra Fields are invalid.',
      });
    }
  });

  // Change view
  $(document).on('click', 'a[data-view]', function (e) {
    e.preventDefault();
    const viewTarget = $(this).data('view');
    const content = decodeURIComponent($(this).data('content'));
    $('#bash-delivery-error-container').html('');
    window.postMessage({
      action: 'setDeliveryView',
      view: viewTarget,
      content,
      captureMethod: $(this).data('capture-method') || null,
    });
  });

  // Select address
  $(document).on('change', 'input[type="radio"][name="selected-address"]', function () {
    const address = parseAttribute($(this).parents('.bash--address-listing').data('address'));

    if (document.forms['bash--delivery-form']) {
      document.forms['bash--delivery-form'].reset();
      // reset prepopulated lat and long
      $('#bash--input-lat').val('');
      $('#bash--input-lng').val('');
      document.forms['bash--delivery-form'].classList.remove('show-form-errors');
    }

    if (!address) return;

    let selectedAddress;
    getAddressByName(address.addressName)
      .then(async (addressByName) => {
        $('input[type="radio"][name="selected-address"]:checked').attr('checked', false);
        const addressParam = addressByName || address;
        selectedAddress = addressParam;
        const { success: didSetAddress } = await setAddress(addressParam, { track: false });
        if (!didSetAddress) {
          ShowDeliveryError(CouldNotSelectAddressError(addressParam));
          console.error('Select Address - Set Address Failure');
        }
      })
      .catch((e) => {
        console.error('Could not get address - address selection', e?.message);
        ShowDeliveryError(CouldNotSelectAddressError(selectedAddress));
        console.error('Select Address - Set Address Failure');
      });
  });

  // Rica - show/hide address fields
  $(document).on('change', '#bash--input-rica_sameAddress', function () {
    if (this.checked) {
      $('.rica-conditional-fields').slideUp(() => populateRicaFields());
    } else {
      clearRicaFields();
      $('.rica-conditional-fields').slideDown(() => $('#bash--input-rica_fullName').focus());
    }
  });

  // address type - change building/complex label to either business
  $(document).on('change', 'input[name="addressType"]', function () {
    if ($(this).is(':checked')) {
      if ($(this).val() === 'business') {
        showBusinessName({ focus: true });
      } else {
        hideBusinessName();
      }
    }
  });

  // switching to between shipping options
  // hide delivery container when switching to collect
  $(document).on('click', '#shipping-option-pickup-in-point, #shipping-option-delivery', function () {
    const clickedButton = $(this).attr('id');
    if (clickedButton === 'shipping-option-pickup-in-point') {
      $('#bash--delivery-container').hide();
    } else {
      $('#bash--delivery-container').show();
    }
  });

  // From delivery summary view, click into Collect form.
  $(document).on('click', ' #punt-collect', () => {
    document.getElementById('edit-shipping-data').click();
    setTimeout(() => document.getElementById('shipping-option-pickup-in-point').click(), 200);
  });

  // submit address form listeners
  $(document).on('submit', '#bash--add-address-manual-form', submitAddAddressManualForm);
  $(document).on('submit', '#bash--delivery-form', submitDeliveryForm);
  $(document).on('submit', '#bash--edit-address-form', submitEditAddressForm);
  $(document).on('submit', '#bash--add-address-autocomplete-form', submitAddAddressAutoCompleteForm);

  $(document).on('click', '.remove-cart-item', function (e) {
    e.preventDefault();
    removeFromCart($(this).data('index')).done(() => {
      clearLoaders();
    });
  });

  // Remove address error when user selects an address.
  $(document).on('click', '.bash--radio-option', () => {
    $('#bash-delivery-error-container').html('');
  });

  // Invalid fields - remove styling on click, keyup
  $(document).on('keyup click', '.invalid', function () {
    $(this).removeClass('invalid');
  });

  // event listener for delete address
  $(document).on('click', '#btn-delete-address', (e) => {
    e.preventDefault();
    const addressName = $('#bash--input-addressName').val();
    if (confirm('Please note: Deleting this address will not delete any pending orders to this address.')) {
      handleDeleteAddress(addressName);
    }
  });

  // Form validation
  window.addEventListener('message', (event) => {
    const { data } = event;
    if (!data || !data.action) return;

    switch (data.action) {
      case 'setDeliveryView': {
        document.querySelector('.bash--delivery-container')?.setAttribute('data-view', data.view);

        // Clear form fields
        clearEditAddress();
        clearAddAddressAutoComplete();
        clearManualAddress();
        clearAddAddressAutoCompleteManual();

        const trackAddressPayload = {
          event: EVENT_NAME.ADD_ADDRESS,
          [PARAMETER.ADD_ADDRESS_STAGE]: ADD_ADDRESS_STAGE.CHECKOUT,
        };

        // Render view and populate track event payload;
        if (data.view === DATA_VIEW.EDIT_ADDRESS) {
          RenderEditAddress(data.content);
          trackAddressPayload[PARAMETER.ADD_ADDRESS_METHOD] = ADD_ADDRESS_METHOD.EDIT_ADDRESS;
          trackAddressPayload[PARAMETER.ADD_ADDRESS_CAPTURE_METHOD] = data?.captureMethod
            ? data.captureMethod.toLowerCase()
            : null;
        }
        if (data.view === DATA_VIEW.ADD_ADDRESS_AUTOCOMPLETE) {
          RenderAddAddressAutoComplete(data.content);
          trackAddressPayload[PARAMETER.ADD_ADDRESS_METHOD] = ADD_ADDRESS_METHOD.SEARCH_FOR_AN_ADDRESS;
          trackAddressPayload[PARAMETER.ADD_ADDRESS_CAPTURE_METHOD] = ADD_ADDRESS_CAPTURE_METHOD.AUTO_COMPLETE_GOOGLE;
        }
        if (data.view === DATA_VIEW.ADD_ADDRESS_AUTOCOMPLETE_MANUAL) {
          RenderAddAddressManual('AUTOCOMPLETE_MANUAL', data.content);
          trackAddressPayload[PARAMETER.ADD_ADDRESS_METHOD] = ADD_ADDRESS_METHOD.SEARCH_FOR_AN_ADDRESS;
          trackAddressPayload[PARAMETER.ADD_ADDRESS_CAPTURE_METHOD] =
            ADD_ADDRESS_CAPTURE_METHOD.MANUAL_ATTEMPTED_AUTO_COMPLETE_GOOGLE;
        }
        if (data.view === DATA_VIEW.MANUAL_ADDRESS) {
          RenderAddAddressManual('MANUAL');
          trackAddressPayload[PARAMETER.ADD_ADDRESS_METHOD] = ADD_ADDRESS_METHOD.ADD_ADDRESS_MANUALLY;
          trackAddressPayload[PARAMETER.ADD_ADDRESS_CAPTURE_METHOD] = ADD_ADDRESS_CAPTURE_METHOD.MANUAL_ENTRY;
        }

        // track address event
        if (data.view !== DATA_VIEW.SELECT_ADDRESS && data.view !== DATA_VIEW.ADDRESS_SEARCH) {
          trackAddressEvent(trackAddressPayload);
        }
        break;
      }
      case 'FB_LOG':
        break;
      default:
        console.error('Unknown action', data.action);
    }
  });

  // Clear local checkout DB on ext.
  // window.addEventListener('beforeunload', clearAddresses);
  return {
    state,
    init: () => {},
  };
})();
export default DeliverController;
