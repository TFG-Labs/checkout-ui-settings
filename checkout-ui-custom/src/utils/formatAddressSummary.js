
/*
James Smith, 0211234567 
Bash.com, 1 Energy Lane, The Apex, 6th Floor
Cape Town, WC, 7441
  */

import { AD_TYPE, DELIVER_APP, PICKUP_APP } from "./const";
import { getOrderFormCustomData } from "./services";

const formatDeliverySummary = () => {

  if (document.getElementById('summary-delivery-recipient') !== null) return;

  const {
    shippingData: { selectedAddresses },
  } = window.vtexjs.checkout.orderForm;

  const { receiverName } = selectedAddresses[0];

  const deliveryParent = 'div.shp-summary-group-address.vtex-omnishipping-1-x-SummaryItemAddress'

  const deliverContext = getOrderFormCustomData(DELIVER_APP)
  const { receiverPhone, businessName } = JSON.parse(deliverContext.fields.jsonString)
  const nameAndNumber = [];
  if (receiverName) nameAndNumber.push(receiverName)
  if (receiverPhone) nameAndNumber.push(formatPhoneNumber(prependZero(receiverPhone)))

  $(deliveryParent).prepend(`
    <div id="summary-delivery-recipient">
      ${[nameAndNumber.join(' - '), businessName].join('<br />')}
    <div>
  `)

}

const formatCollectionSummary = () => {
  if (document.getElementById('summary-collection-recipient') !== null) return;

  const collectParent = 'div.shp-summary-group-title.vtex-omnishipping-1-x-SummaryItemAddress';

  const {
    shippingData: { selectedAddresses },
  } = window.vtexjs.checkout.orderForm;

  const { receiverName } = selectedAddresses[0];
  const deliverContext = getOrderFormCustomData(PICKUP_APP)
  const { phone } = deliverContext.fields

  let nameAndNumber = [];
  if (receiverName) nameAndNumber.push(receiverName)
  if (phone) nameAndNumber.push(formatPhoneNumber(prependZero(phone)))

  $(collectParent).prepend(`<div id="summary-collection-recipient">${nameAndNumber.join(' - ')}<div>`)
}

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
    formatDeliverySummary()
  }
};

export default formatAddressSummary  