import { showAlertBox } from '../partials/Deliver/utils';
import {
  getAddressByName,
  removeAddressFromDB,
  removeAddressFromMasterData,
  removeAddressFromOrderForm,
} from './services';

// Handle address deletion
const handleDeleteAddress = async (addressName) => {
  try {
    const address = await getAddressByName(addressName);
    // Remove address from all relevant sources
    const results = await Promise.allSettled([
      removeAddressFromDB(address),
      removeAddressFromOrderForm(addressName),
      removeAddressFromMasterData(address.id),
    ]);

    const hasErrors = results.some((result) => result.status === 'rejected');
    if (hasErrors) {
      const errors = results.filter((result) => result.status === 'rejected').map((result) => result.reason);
      console.error('Errors during deletion:', errors);
      showAlertBox('Error deleting address.');
      return;
    }

    // Switch to the select-address view
    window.postMessage({ action: 'setDeliveryView', view: 'select-address' });

    showAlertBox('Address deleted successfully.');
  } catch (error) {
    showAlertBox('Error deleting address.');
    console.error('Error deleting address:', error);
  }
};

export default handleDeleteAddress;
