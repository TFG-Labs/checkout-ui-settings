// @ts-nocheck

import { showAlertBox } from '../partials/Deliver/utils';

// TODO: what do we do with this extra fields
const submitAddressForm = async (event) => {
  // Scroll up //TODO: this is very useful: we might need ot for address saved
  setTimeout(() => {
    if ($('.bash--extra-fields').length > 0) {
      document.querySelector('.bash--extra-fields').scrollIntoView({ behavior: 'smooth' });
    } else {
      document.getElementById('bash-delivery-options').scrollIntoView({ behavior: 'smooth' });
    }
  }, 500);
  showAlertBox();
};

export default submitAddressForm;

// TODO how to use isDisposable
// TODO take care of complement
// take care of lat, lng field

// TODO: const geoCoords = [parseFloat(address.lng) || '', parseFloat(address.lat) || ''];
// TODO:  address.geoCoordinate = geoCoords; // for MasterData
// TOOD: address.geoCoordinates = geoCoords; // for shippingData

// const address = {
//   isDisposable: false,
//   reference: null,
//   geoCoordinates: [],
//   country: 'ZAF',
//   ...storedAddress,
//   number: '', // stop using number field (combined with street).
//   complement: '', // stop using complement field (ifo receiverPhone).
// };
