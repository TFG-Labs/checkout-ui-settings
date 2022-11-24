import { CollectRecipientPhoneField, InputError } from '../partials';
import { AD_TYPE, observerConfig, RECIPIENT_NAME, STEPS, TIMEOUT_750 } from '../utils/const';
import { clearObserver, deliveryPhoneNumber, isValidNumberBash } from '../utils/functions';
import { preparePhoneField } from '../utils/phoneFields';

const CollectController = (() => {
  const state = {
    validForm: false,
    transalated: false,
    runningObserver: false,
  };

  const setTranslations = () => {
    if (state.transalated) return;

    $('p.vtex-omnishipping-1-x-shippingSectionTitle').text('Collect options');
    $('#change-pickup-button').text('Available pickup points');
    $('h2.vtex-omnishipping-1-x-geolocationTitle.ask-for-geolocation-title').text('Find nearby Click & Collect points');
    $('h3.vtex-omnishipping-1-x-subtitle.ask-for-geolocation-subtitle').text(
      "Search for addresses that you frequently use and we'll locate stores nearby."
    );

    if ($('label.shp-pickup-receiver__label').text() !== RECIPIENT_NAME) {
      $('label.shp-pickup-receiver__label').text(RECIPIENT_NAME);
    }

    state.transalated = true;
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
          isValid = isValidNumberBash($(`#${field}`).val());
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
      let collectPhone = $('#custom-pickup-complement').val().replace(/\s/g, '');

      if (collectPhone.length === 9 && collectPhone[0] !== '0') {
        collectPhone = `0${collectPhone}`;
      }

      localStorage.setItem('saving-shipping-collect', true);
      $('#btn-go-to-payment').trigger('click');

      setTimeout(() => {
        window.vtexjs.checkout
          .getOrderForm()
          .then((orderForm) => {
            const { address } = orderForm.shippingData;
            address.complement = collectPhone;

            return window.vtexjs.checkout.calculateShipping(address);
          })
          .done(() => {
            localStorage.removeItem('saving-shipping-collect');
          });
      }, TIMEOUT_750);
    }
  };

  const addRecipientPhoneField = () => {
    if ($('input#custom-pickup-complement').length > 0) return;

    /* Use orderForm value if exists */
    const phoneNumber = deliveryPhoneNumber();

    $('.shp-pickup-receiver').append(CollectRecipientPhoneField(phoneNumber));

    preparePhoneField('input#custom-pickup-complement');
  };

  //! TODO: al merger a develop podemos refactorizar esta función llevándola a utils
  const addCustomBtnPayment = () => {
    if ($('#custom-go-to-payment').length > 0) return;

    const nativePaymentBtn = $('#btn-go-to-payment');
    const customPaymentBtn = nativePaymentBtn.clone(false);

    $(nativePaymentBtn).hide();
    $(customPaymentBtn).data('bind', '');
    $(customPaymentBtn).removeAttr('id').attr('id', 'custom-go-to-payment');
    $(customPaymentBtn).removeAttr('data-bind');
    $(customPaymentBtn).css('display', 'block');

    $('p.btn-go-to-payment-wrapper').append(customPaymentBtn);

    $(customPaymentBtn).on('click', saveCollectFields);
  };

  const runCustomization = () => {
    const shippingLoaded = $('div#postalCode-finished-loading').length > 0;

    if (window.location.hash === STEPS.SHIPPING) {
      if (shippingLoaded) {
        const inCollect = $('#shipping-option-pickup-in-point').hasClass('shp-method-option-active');
        const pickupSelected = $('.ask-for-geolocation').length === 0;

        if (inCollect) {
          if (pickupSelected) {
            $('.shp-pickup-receiver__btn').trigger('click');
            $('.shp-pickup-receiver').addClass('show');
            addRecipientPhoneField();
            addCustomBtnPayment();
          } else {
            $('.shp-pickup-receiver').removeClass('show');
          }

          if (!state.transalated) setTranslations();
        }

        /* If it has been redirected because of missing values, the click is forced to show the errors */
        if (localStorage.getItem('shipping-incomplete-values')) {
          $('#custom-go-to-payment').trigger('click');
          localStorage.removeItem('shipping-incomplete-values');
        }
      }
    }

    if (window.location.hash === STEPS.PAYMENT) {
      setTimeout(() => {
        const address = window.vtexjs.checkout.orderForm?.shippingData?.address;
        const savingCollect = localStorage.getItem('saving-shipping-collect');

        if (!savingCollect) {
          /* Redirect to shipping if required fields are empty */
          if (address && address.addressType === AD_TYPE.PICKUP && (!address.receiverName || !address.complement)) {
            window.location.hash = STEPS.SHIPPING;
            localStorage.setItem('shipping-incomplete-values', true);
          }
        }
      }, 1000);
    }

    // eslint-disable-next-line no-use-before-define
    runCollectObserver();
  };

  /* We need this observer to detect the change in the deliver and collect buttons */
  const runCollectObserver = () => {
    if ($('.shipping-container .box-step').length < 1 || state.runningObserver) return;

    console.info('=== start COLLECT observer ===');

    const shippingContainer = document.querySelector('.shipping-container .box-step');
    const observer = new MutationObserver(() => {
      console.info('=== COLLECT observer CREATE ===');

      state.runningObserver = true;
      runCustomization();
    });

    observer.observe(shippingContainer, observerConfig);
    clearObserver(observer, 'collect');
  };

  // EVENTS SUBSCRIPTION
  $(document).ready(() => {
    runCustomization();
  });

  $(window).on('hashchange orderFormUpdated.vtex', () => {
    runCustomization();
  });

  const publicInit = () => {};

  return {
    init: publicInit,
    state,
  };
})();

export default CollectController;
