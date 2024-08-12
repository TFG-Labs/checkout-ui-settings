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
