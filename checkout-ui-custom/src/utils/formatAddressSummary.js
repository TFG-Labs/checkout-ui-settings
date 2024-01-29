// @ts-nocheck

// import DeliverySummaryCollectButton from '../partials/Deliver/DeliverySummaryCollectButton';
import PuntCollect from '../partials/Deliver/PuntCollect';
import { AD_TYPE, DELIVER_APP, PICKUP_APP } from './const';
import { formatPhoneNumber, prependZero } from './phoneFields';
import { getOrderFormCustomData } from './services';

const formatDeliverySummary = () => {
  if (document.getElementById('summary-delivery-recipient') !== null) return;

  // Add Collect tab
  // if (!document.getElementById('injected-collect-button')) {
  //   $('.shipping-summary-placeholder').prepend(DeliverySummaryCollectButton());
  // }

  // Add Punt Collect text
  if (!document.getElementById('punt-collect')) {
    $('.delivery-active .shp-summary-group').append(PuntCollect());
  }

  const {
    shippingData: { selectedAddresses },
  } = window.vtexjs.checkout.orderForm;

  const { receiverName, neighborhood, street } = selectedAddresses[0];

  const deliveryParent = 'div.shp-summary-group-address.vtex-omnishipping-1-x-SummaryItemAddress';

  const deliverContext = getOrderFormCustomData(DELIVER_APP);
  let data = {};

  try {
    data = JSON.parse(deliverContext.jsonString);
  } catch (e) {
    console.error("Couldn't parse deliverContext", e?.message);
  }

  const { receiverPhone, businessName } = data;
  const nameAndNumber = [];
  if (receiverName) nameAndNumber.push(receiverName);
  if (receiverPhone) nameAndNumber.push(formatPhoneNumber(prependZero(receiverPhone)));

  $(deliveryParent).append(`
    <div id="summary-delivery-recipient">
      ${nameAndNumber.join(' - ')}
    <div>
  `);

  let streetAddress = street;
  if (businessName) streetAddress = `${businessName}, ${street}`;

  // Add business name, fix street to show NUmber as well
  $(deliveryParent).find('.street').html(streetAddress);

  // Add suburb
  if (neighborhood) $(deliveryParent).find('.city').prepend(`${neighborhood}, `);

  // missing comma before postal code ;(
  $(deliveryParent).find('.postalCode-delimiter').html(', ');
};

const formatCollectionSummary = () => {
  if (document.getElementById('summary-collection-recipient') !== null) return;

  const collectParent = 'div.shp-summary-group-title.vtex-omnishipping-1-x-SummaryItemAddress';

  const {
    shippingData: { selectedAddresses },
  } = window.vtexjs.checkout.orderForm;

  const { receiverName } = selectedAddresses[0];
  const collectContext = getOrderFormCustomData(PICKUP_APP);
  const phone = collectContext?.phone || null;

  const nameAndNumber = [];
  if (receiverName) nameAndNumber.push(receiverName);
  if (phone) nameAndNumber.push(formatPhoneNumber(prependZero(phone)));

  $(collectParent).append(`<div id="summary-collection-recipient">${nameAndNumber.join(' - ')}<div>`);
};

export const formatAddressSummary = () => {
  if (!window.vtexjs.checkout.orderForm.clientProfileData || !window.vtexjs.checkout.orderForm.shippingData) return;
  const {
    shippingData: { selectedAddresses, logisticsInfo },
  } = window.vtexjs.checkout.orderForm;

  if (!selectedAddresses?.[0] || !logisticsInfo[0]) return;

  const { addressType } = selectedAddresses[0];

  if (addressType === AD_TYPE.PICKUP) {
    formatCollectionSummary();
  } else {
    formatDeliverySummary();
  }
};

export default formatAddressSummary;
