// @ts-nocheck
/* eslint-disable func-names */
import DeliverContainer from '../partials/Deliver/DeliverContainer';
import EditAddressForm, { submitEditAddressForm } from '../partials/Deliver/EditAddressForm';
import ExtraFieldsContainer from '../partials/Deliver/ExtraFieldsContainer';
import {
  clearRicaFields,
  customShippingDataIsValid,
  parseAttribute,
  populateAddressForm,
  populateDeliveryError,
  populateRicaFields,
  populateTVFields,
  setCartClasses,
  updateDeliveryFeeDisplay,
} from '../partials/Deliver/utils';
import { AD_TYPE, STEPS } from '../utils/const';
import formatAddressSummary from '../utils/formatAddressSummary';
import {
  clearLoaders,
  getSpecialCategories,
  hideBusinessName,
  scrollToInvalidField,
  showBusinessName,
} from '../utils/functions';
import { preparePhoneField } from '../utils/phoneFields';
import sendEvent from '../utils/sendEvent';
import { clearAddresses, getAddress, getAddressByName, removeFromCart } from '../utils/services';
import setAddress from '../utils/setAddress';
import submitAddressForm from '../utils/submitAddressForm';
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
    const fields = 'id,receiverPhone,receiverName,number,companyBuilding,street,city,postalCode,state';
    const data = await getAddress(addressName, `?_fields=${fields}`);
    document.querySelector('#edit-adress-section').innerHTML = EditAddressForm(data);
    preparePhoneField('#bash--input-receiverPhone');
  };

  const clearEditAddress = () => {
    document.querySelector('#edit-adress-section').innerHTML = '';
  };

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
    window.postMessage({ action: 'setDeliveryView', view: viewTarget, content });
  });

  // Clear form on adding new address
  $(document).on('click', '#no-address-search-results', () => {
    document.getElementById('bash--address-form').reset();
    document.getElementById('bash--input-street').focus();
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

    getAddressByName(address.addressName)
      .then((addressByName) => {
        setAddress(addressByName || address, { validateExtraFields: false });
        $('input[type="radio"][name="selected-address"]:checked').attr('checked', false);
        $(this).attr('checked', true);
      })
      .catch((e) => {
        console.error('Could not get address - address selection', e?.message);
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
  $(document).on('submit', '#bash--address-form', submitAddressForm);
  $(document).on('submit', '#bash--delivery-form', submitDeliveryForm);
  $(document).on('submit', '#bash--edit-address-form', submitEditAddressForm);

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

  // Form validation
  window.addEventListener('message', (event) => {
    const { data } = event;
    if (!data || !data.action) return;

    switch (data.action) {
      case 'setDeliveryView':
        document.querySelector('.bash--delivery-container')?.setAttribute('data-view', data.view);
        clearEditAddress();
        if (data.view === 'address-form') {
          preparePhoneField('#bash--input-receiverPhone');
          if (data.content) {
            try {
              const address = JSON.parse(decodeURIComponent($(`#${data.content}`).data('address')));
              populateAddressForm(address);
            } catch (e) {
              console.warn('Could not parse address Json', data.content);
            }
          }
        }
        if (data.view === 'edit-address') {
          RenderEditAddress(data.content);
        }
        break;
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
