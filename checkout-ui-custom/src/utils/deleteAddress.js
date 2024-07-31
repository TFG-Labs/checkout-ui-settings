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

    await removeAddressFromDB(address).catch((error) => {
      console.error('Error deleting address from DB:', error);
    });

    await removeAddressFromOrderForm(addressName).catch((error) => {
      console.error('Error deleting address from OrderForm:', error);
    });

    await removeAddressFromMasterData(address.id).catch((error) => {
      console.error('Error deleting address from MasterData:', error);
    });

    // Switch to the select-address view
    window.postMessage({ action: 'setDeliveryView', view: 'select-address' });

    showAlertBox('Address deleted successfully.');
  } catch (error) {
    showAlertBox('Error deleting address.');
    console.error('Error deleting address:', error);
  }
};

export default handleDeleteAddress;
