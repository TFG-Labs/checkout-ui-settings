import { MixedProducts, TVorRICAMsg } from '../partials';
import MapContainer from '../partials/Collect/MapContainer';
import ShippingTabs from '../partials/ShippingTabs';
import { FURNITURE_CAT, TIMEOUT_500 } from '../utils/const';
import { addBorderTop, getSpecialCategories } from '../utils/functions';

const ViewController = (() => {
  const state = {
    showFurnitureForm: false,
    showTVIDForm: false,
    showRICAForm: false,
    showTVorRICAMsg: false,
    showMixedProductsMsg: false,
    runningObserver: false,
  };


  const setUpTabs = () => {
    if ($('#shipping-tabs--tabs').length) return
    $("#shipping-data").find(".box-step").prepend(ShippingTabs())

    $('#shipping-tab-deliver').off('click')
    $('#shipping-tab-deliver').on('click', () => {
      $('#shipping-tab-deliver').addClass('active')
      $('#shipping-tab-collect').removeClass('active')
      $(".pickup-map-container").css("display", "none")
      $("#bash--delivery-container").css("display", "flex")
    })

    $('#shipping-tab-collect').off('click')
    $('#shipping-tab-collect').on('click', () => {
      $('#shipping-tab-collect').addClass('active')
      $('#shipping-tab-deliver').removeClass('active')
      $("#bash--delivery-container").css("display", "none")
      $(".pickup-map-container").css("display", "flex")
      if (!$('#pickup-map-container').length) {
        // if ($('.vtex-omnishipping-1-x-ask').length) {
        // $('.vtex-omnishipping-1-x-ask').empty();
        $("#shipping-data").find(".box-step").append(MapContainer())
      }
    })


  }

  const checkCartCategories = () => {
    if (window.vtexjs.checkout.orderForm) {
      const { items } = window.vtexjs.checkout.orderForm;
      const { hasFurniture, hasTVs, hasSimCards, categories } = getSpecialCategories(items);
      state.showTVIDForm = hasTVs;
      state.showRICAForm = hasSimCards;
      state.showTVorRICAMsg = state.showTVIDForm || state.showRICAForm;
      /**
        Conditions to show mixed products alert:
        - more than one item
        - after filter categories, this array includes at least one furniture id
        - there are only one category OR not all the categories in the array are furniture
      */
      state.showMixedProductsMsg = items.length > 1 && hasFurniture && !categories.every((c) => c === FURNITURE_CAT);
    }
  };

  const showCustomSections = () => {
    const tvOrRICAMsgStepExists = $('#tfg-custom-tvrica-msg').length > 0;
    const mixedProductsMsgExits = $('#tfg-custom-mixed-msg').length > 0;

    let addBorder = false;

    if (state.showTVorRICAMsg || state.showMixedProductsMsg) {
      if ($('.vtex-omnishipping-1-x-deliveryChannelsWrapper.custom-disabled').length < 1) {
        $('#shipping-option-delivery').trigger('click');
        $('.vtex-omnishipping-1-x-deliveryChannelsWrapper').addClass('custom-disabled');
      }

      if (state.showTVorRICAMsg && !tvOrRICAMsgStepExists) {
        $('.vtex-omnishipping-1-x-addressFormPart1').prepend(TVorRICAMsg());
        addBorder = true;
      }

      if (state.showMixedProductsMsg && !mixedProductsMsgExits) {
        $('.vtex-omnishipping-1-x-addressFormPart1').prepend(MixedProducts());
        addBorder = true;
      }
    }

    if (addBorder) addBorderTop('.tfg-custom-step');
  };

  const runCustomization = () => {
    /* Hiding subheader when there is furniture in cart */
    setTimeout(() => {
      // TODO enable tabs
      // setUpTabs()

      checkCartCategories();

      if (state.showFurnitureForm) {
        $('div.subheader').css('display', 'none');
      } else {
        $('div.subheader').css('display', 'block');
      }
    }, TIMEOUT_500);
  };

  const setView = (view) => {
    document.body.setAttribute('data-delivery-view', view);
  };

  // EVENTS SUBSCRIPTION
  $(document).ready(() => {
    runCustomization();
  });

  $(window).on('hashchange orderFormUpdated.vtex', () => {
    runCustomization();
  });

  $(document).on('click', '#shipping-data .btn-link.vtex-omnishipping-1-x-btnDelivery', () => {
    runCustomization();
  });

  return {
    state,
    setView,
    showCustomSections,
    init: () => { },
  };
})();

export default ViewController;
