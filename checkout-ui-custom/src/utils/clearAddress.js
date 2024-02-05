/* eslint-disable implicit-arrow-linebreak */
// @ts-nocheck
const clearAddress = () =>
  window.vtexjs.checkout
    .getOrderForm()
    .then(() => {
      const emptyAddress = {
        addressType: 'residential',
        receiverName: '',
        addressId: '',
        postalCode: '0001',
        city: '',
        state: '',
        country: 'ZAF',
        street: '',
        number: '',
        neighborhood: '',
        complement: '',
        reference: '',
        geoCoordinates: [],
      };

      return window.vtexjs.checkout.sendAttachment('shippingData', { address: emptyAddress });
    })
    .done((orderForm) => {
      console.log('Address cleared:', orderForm.shippingData);
    })
    .fail((error) => {
      console.error('Error clearing the address:', error);
    });

export default clearAddress;
