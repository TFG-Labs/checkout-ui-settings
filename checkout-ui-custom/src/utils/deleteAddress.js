import AddressListing from '../partials/Deliver/AddressListing';
import { showAlertBox } from '../partials/Deliver/utils';
import {
  getAddressByName,
  getAddresses,
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

    const addressId = address.addressId ?? address.id ?? '';

    await removeAddressFromMasterData(addressId).catch((error) => {
      console.error('Error deleting address from MasterData:', error);
    });

    // Fetch updated list of addresses
    const { data: updatedAddresses } = await getAddresses();
    // Switch to the select-address view
    window.postMessage({ action: 'setDeliveryView', view: 'select-address' });

    // Update the UI with the new list of addresses
    const addressesHtml = updatedAddresses.map((addr) => AddressListing(addr)).join('');
    if (document.getElementById('bash-address-list')) {
      document.getElementById('bash-address-list').innerHTML = addressesHtml;
    }

    showAlertBox('Address deleted successfully.');
  } catch (error) {
    showAlertBox('Error deleting address.');
    console.error('Error deleting address:', error);
  }
};

export default handleDeleteAddress;
