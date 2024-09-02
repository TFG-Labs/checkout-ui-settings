import { requiredTVFields, validAddressTypes } from '../partials/Deliver/constants';
import {
  addressIsValid,
  populateDeliveryError,
  populateExtraFields,
  populateRicaFields,
  setDeliveryLoading,
} from '../partials/Deliver/utils';
import { ADD_ADDRESS_STAGE, EVENT_NAME, PARAMETER, trackAddressEvent } from './addressAnalytics';
import { AD_TYPE, DELIVER_APP } from './const';
import { clearLoaders, getSpecialCategories } from './functions';
import sendEvent from './sendEvent';
import { sendOrderFormCustomData, updateAddressListing } from './services';

const updateDeliveryData = ({ businessName, receiverPhone }) =>
  sendOrderFormCustomData(DELIVER_APP, {
    jsonString: JSON.stringify({
      businessName: businessName || '',
      receiverPhone: receiverPhone || '',
    }),
  });

/**
 * @param {Object} config
 * @param {ADD_ADDRESS_METHOD[keyof typeof ADD_ADDRESS_METHOD]} config.add_address_method -The initial view to add the address. Use one of the values from `ADD_ADDRESS_METHOD` (e.g., `ADD_ADDRESS_METHOD.SEARCH_FOR_AN_ADDRESS`).
 * @param {ADD_ADDRESS_CAPTURE_METHOD[keyof typeof ADD_ADDRESS_CAPTURE_METHOD]} config.add_address_capture_method The method used to capture the address. Use one of the values from `ADD_ADDRESS_CAPTURE_METHOD` (e.g., `ADD_ADDRESS_CAPTURE_METHOD.AUTO_COMPLETE_GOOGLE`).
 * @param {boolean} config.track - Whether to track the address event or not.
 * @returns
 */

const setAddress = (address, config) => {
  const { items } = window.vtexjs.checkout.orderForm;
  const { hasTVs, hasSimCards } = getSpecialCategories(items);

  if (hasTVs) populateExtraFields(address, requiredTVFields, 'tv_');
  if (hasSimCards) populateRicaFields();

  const { isValid, invalidFields } = addressIsValid(address);

  if (!isValid) {
    console.error({ invalidFields });
    return { success: false, error: 'Invalid address details.' };
  }

  // Fix bad addressType.
  if (address.addressType === AD_TYPE.BUSINESS) address.addressType = AD_TYPE.COMMERCIAL;
  if (!validAddressTypes.includes(address.addressType)) address.addressType = AD_TYPE.DELIVERY;

  if (address.number) {
    address.street = `${address.number} ${address.street}`;
    address.number = '';
  }

  // Country must always be 'ZAF'
  address.country = 'ZAF';

  const shippingData = window?.vtexjs?.checkout?.orderForm?.shippingData;

  shippingData.address = address;
  shippingData.selectedAddresses = [address];

  // Stop using "complement" field
  if (address.complement) {
    address.receiverPhone = address.complement;
    shippingData.address.complement = '';
    address.complement = '';
  }

  if (address.companyBuilding && !shippingData.address.street.includes(`, ${address.companyBuilding}`)) {
    shippingData.address.street = `${address.street}, ${address.companyBuilding}`;
  }
  shippingData.selectedAddresses[0] = shippingData.address;

  // Start Shimmering
  setDeliveryLoading();
  return window.vtexjs.checkout
    .sendAttachment('shippingData', shippingData)
    .then((orderForm) => {
      const { messages } = orderForm;
      const errors = messages.filter((msg) => msg.status === 'error');

      if (errors.length > 0) {
        populateDeliveryError(errors);
        return { success: false, errors };
      }

      if (address.addressName) updateAddressListing(address);

      try {
        updateDeliveryData({ businessName: address.businessName, receiverPhone: address.receiverPhone });
      } catch (e) {
        sendEvent({
          eventCategory: 'Checkout_SystemError',
          action: 'OrderFormFailed',
          label: 'Could not update businessName and/or receiverPhone ',
          description: 'Could not update businessName and/or receiverPhone.',
        });
      }
      if (config.track) {
        trackAddressEvent({
          event: EVENT_NAME.ADDRESS_SAVED,
          [PARAMETER.ADD_ADDRESS_STAGE]: ADD_ADDRESS_STAGE.CHECKOUT,
          [PARAMETER.ADD_ADDRESS_METHOD]: config.add_address_method,
          [PARAMETER.ADD_ADDRESS_CAPTURE_METHOD]: config.add_address_capture_method,
        });
      }

      return { success: true };
    })
    .done(() => {
      clearLoaders();
    })
    .fail((error) => {
      // TODO simulate error
      if (config.track) {
        trackAddressEvent({
          event: EVENT_NAME.ADD_ADDRESS_ERROR,
          [PARAMETER.ADD_ADDRESS_STAGE]: ADD_ADDRESS_STAGE.CHECKOUT,
          [PARAMETER.ADD_ADDRESS_METHOD]: config.add_address_method,
          [PARAMETER.ADD_ADDRESS_CAPTURE_METHOD]: config.add_address_capture_method,
        });
      }

      console.error('Error setting address:', error);
      clearLoaders();
      return { success: false, error };
    });
};

export default setAddress;
