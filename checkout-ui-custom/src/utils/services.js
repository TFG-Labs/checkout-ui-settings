/* eslint-disable no-new-wrappers */
import AddressListing from '../partials/Deliver/AddressListing';
import CheckoutDB from './checkoutDB';
import { BASE_URL_API } from './const';
import { catchError, clearLoaders, getHeadersByConfig } from './functions';
import usePhoneNumberFormatting from './phoneNumberFormat';

const { formatPhoneNumber } = usePhoneNumberFormatting();

// API Functions
// GET addresses

const DB = new CheckoutDB();

/**
 *
 * @param {string | null | number[] | string []} coOrds
 * @return {number[] | null}
 */
const cleanGeoCoordinates = (coOrds) => {
  if (Array.isArray(coOrds)) {
    return coOrds;
  }
  if (typeof coOrds === 'string') {
    let coordinates = null;
    try {
      coordinates = JSON.parse(coOrds);
    } catch {
      coordinates = [];
    }
    return coordinates;
  }
  return null;
};

export const getAddresses = async () => {
  // Try to get addresses from users local store.
  const addresses = await DB.getAddresses();
  if (addresses.length > 0) return { data: addresses };

  // Fallback to get addresses from API.
  let email = window.vtexjs?.checkout?.orderForm?.clientProfileData?.email;

  // If the email is not available in the orderForm addresses can't be retrieved.
  // Try to get it from the orderForm API.
  if (!email) {
    const orderForm = await window.vtexjs.checkout.getOrderForm();
    email = orderForm?.clientProfileData?.email;
  }

  // Can't get email from orderForm, return empty array.
  if (!email) return { data: [] };

  const fields = [
    'id',
    'addressType',
    'addressQuery',
    'addressName',
    'reference',
    'number',
    'geolocation',
    'receiverName',
    'receiverPhone',
    'complement', // todo stop populating complement, in favour of companyBuilding
    'street',
    'businessName',
    'companyBuilding',
    'neighborhood',
    'city',
    'postalCode',
    'state',
    'country',
    'tvID',
    'geoCoordinate',
    'captureMethod',
  ].join(',');

  const headers = getHeadersByConfig({ cookie: true, cache: true, json: false });
  const cacheBust = Date.now();

  const addressesFromAPI = await fetch(
    `${BASE_URL_API}masterdata/addresses?t=${cacheBust}&_fields=${fields}&_where=${encodeURIComponent(
      `userIdQuery=${email}`
    )}`,
    { headers, credentials: 'include' }
  );

  const addressesData = await addressesFromAPI.json();

  if (!addressesData?.data) throw new Error('No data returned from API');

  const apiAddresses = addressesData.data.map((address) => ({
    ...address,
    geoCoordinate: cleanGeoCoordinates(address.geoCoordinate), // for masterData
    geoCoordinates: cleanGeoCoordinates(address.geoCoordinate), // for shippingData
  }));

  // Try to store addresses locally
  // for faster retrieval.
  try {
    await DB.loadAddresses(apiAddresses);
  } catch (e) {
    console.error('Could Not Store Addresses Locally', e);
  }

  return { data: apiAddresses };
};

// GET Address by ID / Name?
const getAddress = async (addressName, fields) => {
  let data = {};
  const headers = getHeadersByConfig({ cookie: true, cache: true, json: false });
  const options = {
    headers,
    credentials: 'include',
  };

  const response = await fetch(
    `${BASE_URL_API}masterdata/addresses/${fields}&_where=addressName=${addressName}&timestamp=${Date.now()}`,
    { headers, credentials: 'include' }
  )
    .then((res) => res.json())
    .catch((error) => catchError(`GET_ADDRESS_ERROR: ${error?.message}`));

  if (response && !response.error && response.data && response.data.length > 0) {
    [data] = response.data;
  }

  return data;
};

// PATCH address
/**
 *
 * @param {Object} address
 */
export const upsertAddress = async (address) => {
  let path;
  const { email } = window.vtexjs.checkout.orderForm.clientProfileData;

  if (!address) return Promise.reject(new Error('No address provided.'));

  // Address already exists (?) - ID keeps channging?
  const existingAddress = address.addressName ? await getAddress(address.addressName, '?_fields=id') : {};

  if (existingAddress?.id) {
    path = `${BASE_URL_API}masterdata/address/${existingAddress.id}`;
  } else {
    path = `${BASE_URL_API}masterdata/addresses`;
  }

  const newAddress = {
    userId: email,
    ...address,
  };

  if (!existingAddress.id) {
    newAddress.addressName = address.addressId || `address-${Date.now()}`;
  }

  const headers = getHeadersByConfig({ cookie: true, cache: true, json: true });

  const options = {
    method: 'PATCH',
    headers,
    body: JSON.stringify(newAddress),
    credentials: 'include',
  };

  await fetch(path, options)
    .then((res) => {
      if (res.status !== 204) {
        return res.json();
      }
      return res;
    })
    .then((result) => {
      console.log('Address saved to master data:', result);

      return result;
    })
    .catch((error) => {
      catchError(`SAVE_ADDRESS_ERROR: ${error?.message}`);
    });
};

export const updateAddressListing = (address) => {
  let $currentListing = $(`#address-${address.addressName}`);

  if (!$currentListing.length) {
    $('#bash-address-list').append(AddressListing(address));
  } else {
    $currentListing.after(AddressListing(address));
    $currentListing.remove();
    $currentListing = null;
  }

  $('input[type="radio"][name="selected-address"]:checked').attr('checked', false);
  $(`input[type="radio"][name="selected-address"][value="${address.addressName}"]`).attr('checked', true);
};

/**
 *
 * @param {Object} address
 * @param {boolean} persistMasterData - boolean value to determine if an address should persist to master data
 * @returns
 */
export const addOrUpdateAddress = async (address, persistMasterData) => {
  if (!address.addressName) {
    const streetStr = address.street
      .replace(/[^a-zA-Z0-9]/g, ' ')
      .trim()
      .replace(/\s/g, '-')
      .toLowerCase();
    address.addressName = `${Date.now()}-${streetStr}`.substring(0, 50);
  }

  if (!address.addressId) address.addressId = address.addressName;

  // Add or update at local store. Update UI.
  DB.addOrUpdateAddress(address).then(() => updateAddressListing(address));

  // Add or update at the API.
  if (persistMasterData) upsertAddress(address);
};

export const getAddressByName = async (addressName) => DB.getAddress(addressName);

export const clearAddresses = async () => DB.clearData();

/**
 * OrderForm CustomData
 * @param {Object} data - custom data.
 * @param {string} appId - unique app id.
 * @param {boolean} furniture - boolean value for sending furniture.
 * @param {boolean} rica - boolean value for sending rica fields.
 */
export const sendOrderFormCustomData = async (appId, data, rica = false) => {
  const { orderFormId } = window.vtexjs.checkout.orderForm;

  if (data.phone) {
    data.phone = formatPhoneNumber(data.phone, 'ZA').trim();
  }

  const path = `/api/checkout/pub/orderForm/${orderFormId}/customData/${appId}`;
  const body = JSON.stringify({
    ...data,
    ...(rica && { sameAddress: new Boolean(data.sameAddress) }),
  });

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  };
  return fetch(path, options);
};

export const getOrderFormCustomData = (appId) => {
  const customData = window?.vtexjs?.checkout?.orderForm?.customData;
  let fields = {};

  if (customData?.customApps.length > 0) {
    const customApp = customData.customApps.find((i) => i.id === appId);
    fields = customApp?.fields;
  }

  return fields;
};

export const removeFromCart = (index) =>
  window.vtexjs.checkout
    .updateItems([
      {
        index: `${index}`,
        quantity: 0,
      },
    ])
    .done(() => {
      clearLoaders();
    });

export const removeAddressFromDB = async (address) => {
  if (!address.addressName) {
    return;
  }

  if (!address.addressId) address.addressId = address.addressName;

  try {
    await DB.deleteAddress(address.addressId);
    updateAddressListing(address);
  } catch (error) {
    console.error('Error deleting address:', error);
  }
};

export const removeAddressFromOrderForm = async (addressId) =>
  vtexjs.checkout
    .getOrderForm()
    .then((orderForm) => {
      const { shippingData } = orderForm;
      const filterAddresses = (addresses) => addresses.filter((address) => address.addressId !== addressId);

      shippingData.availableAddresses = filterAddresses(shippingData.availableAddresses || []);
      shippingData.selectedAddresses = filterAddresses(shippingData.selectedAddresses || []);
      shippingData.logisticsInfo = filterAddresses(shippingData.selectedAddresses || []);

      // Send the updated shippingData back to VTEX
      return vtexjs.checkout.sendAttachment('shippingData', shippingData);
    })
    .done((orderForm) => {
      console.log(orderForm.shippingData);
    })
    .fail((error) => {
      console.error('Error removing address from order form:', error);
    });

// Remove address from MasterData
export const removeAddressFromMasterData = async (addressId) => {
  if (!addressId) {
    return Promise.reject(new Error('No address ID provided'));
  }

  const path = `${BASE_URL_API}masterdata/address/${addressId}`;
  const headers = getHeadersByConfig({ cookie: true, cache: true, json: false });
  const options = {
    method: 'delete',
    headers,
    credentials: 'include',
  };

  try {
    const response = await fetch(path, options);
    if (response.ok) {
      console.log(`Address with ID ${addressId} successfully deleted from MasterData`);
      return response.json();
    }
    const errorData = await response.json();
    console.warn('Error deleting address from MasterData', errorData);
    throw new Error('Error deleting address from MasterData');
  } catch (error) {
    console.warn('Error in removeAddressFromMasterData:', error);
    throw new Error(`Error deleting address from MasterData: ${error.message}`);
  }
};

export const deleteAddressFromMasterdata = async (addressId) => {
  const path = `${BASE_URL_API}masterdata/address/${addressId}`;
  const headers = getHeadersByConfig({ cookie: true, cache: true, json: true });

  const options = {
    method: 'DELETE',
    headers,
    credentials: 'include',
  };

  return fetch(path, options)
    .then((res) => res.json())
    .catch((error) => catchError(`DELETE_ADDRESS_ERROR: ${error?.message}`));
};

export const deleteAddressFromOrderForm = async (addressId) => {
  const { orderFormId } = window.vtexjs.checkout.orderForm;

  const path = `/api/checkout/pub/orderForm/${orderFormId}/customData/${addressId}`;
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(path, options)
    .then((res) => res.json())
    .catch((error) => catchError(`DELETE_ORDERFORM_ADDRESS_ERROR: ${error?.message}`));
};

export const deleteAddress = async (addressId) => {
  // Delete from Masterdata
  await deleteAddressFromMasterdata(addressId);

  // Delete from OrderForm
  await deleteAddressFromOrderForm(addressId);

  // Remove from local store and update UI
  DB.deleteAddress(addressId).then(() => {
    $(`#address-${addressId}`).remove();
  });
};

export default getAddresses;
