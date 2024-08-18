import { isValidNumber } from 'libphonenumber-js';
import { ADD_ADDRESS_CAPTURE_METHOD, ADD_ADDRESS_METHOD } from '../../utils/addressAnalytics';
import { formatPhoneNumber } from '../../utils/phoneFields';
import { addOrUpdateAddress } from '../../utils/services';
import setAddress from '../../utils/setAddress';
import { CouldNotSaveAddressError, ShowDeliveryError } from './DeliveryError';
import FormField from './Elements/FormField';
import { AddressSectionHeading, SubmitButton } from './FormComponents';
import { getBestRecipient, postAddressSaveScroll, provinceShortCode } from './utils';

export const ADD_ADDRESS_FORM_MANUAL_RECIEVER_PHONE_ID = 'bash--input-add-address-manual-form-receiverPhone';

/**
 *
 * @param {Object} config - form configuration.
 * @param {Object} [config.address] - address object to initialize form with, optional, but must be present if type = add-address-autocomplete-manual
 * @param {string} config.type - type of address form to render "MANUAL" | "AUTOCOMPLETE_MANUAL"
 */
const populateFields = (config) => {
  const { type, address } = config;
  const lng = type === 'AUTOCOMPLETE_MANUAL' && address?.lng ? address.lng : '';
  const lat = type === 'AUTOCOMPLETE_MANUAL' && address?.lat ? address.lat : '';
  const street = type === 'AUTOCOMPLETE_MANUAL' ? `${address?.streetNumber ?? ''} ${address?.route ?? ''}`.trim() : '';
  const neighborhood = type === 'AUTOCOMPLETE_MANUAL' && address?.neighborhood ? address?.neighborhood : '';
  const city = type === 'AUTOCOMPLETE_MANUAL' && address?.city ? address.city : '';
  const postalCode = type === 'AUTOCOMPLETE_MANUAL' && address?.postalCode ? address.postalCode : '';
  const state = type === 'AUTOCOMPLETE_MANUAL' && address?.state ? provinceShortCode(address.state) : '';

  const fields = [
    // HIDDEN FIELDS
    {
      name: 'formType',
      type: 'hidden',
      value: config.type,
      required: false,
    },
    {
      name: 'addressId',
      type: 'hidden',
      value: '',
      required: false,
    },
    {
      name: 'addressName',
      type: 'hidden',
      value: '',
      required: false,
      maxLength: 50,
    },
    {
      name: 'lat',
      required: false,
      type: 'hidden',
      value: lat,
    },
    {
      name: 'lng',
      required: false,
      type: 'hidden',
      value: lng,
    },
    {
      type: 'hidden',
      required: true,
      name: 'country',
      value: 'ZAF',
    },
    // VISIBLE FIELDS
    {
      name: 'addressType',
      label: 'Address type',
      required: true,
      type: 'radio',
      options: [
        { value: 'residential', label: 'Residential', checked: true },
        { value: 'business', label: 'Business' },
      ],
    },
    {
      name: 'businessName',
      label: 'Business name',
      required: false,
      value: '',
      maxLength: 100,
    },
    {
      name: 'companyBuilding',
      label: 'Building/Complex and number',
      required: false,
      value: '',
      maxLength: 100,
    },
    {
      name: 'street',
      label: 'Street address',
      required: true,
      value: street,
    },
    {
      name: 'neighborhood',
      label: 'Suburb',
      value: neighborhood,
      maxLength: 750,
      required: true,
    },
    {
      name: 'city',
      label: 'City',
      required: true,
      value: city,
      maxLength: 750,
    },
    {
      name: 'postalCode',
      label: 'Postal code',
      value: postalCode,
      type: 'tel',
      minlength: 4,
      maxLength: 4,
      required: true,
    },
    {
      type: 'note',
      required: false,
      name: 'suburb-postal-reminder',
      value: 'Make sure to specify the correct Suburb and Postal code so we can easily find your address.',
    },
    {
      name: 'state',
      label: 'Province',
      type: 'dropdown',
      required: true,
      options: [
        { value: '', label: 'Select' },
        { value: 'EC', label: 'Eastern Cape' },
        { value: 'FS', label: 'Free State' },
        { value: 'GP', label: 'Gauteng' },
        { value: 'KZN', label: 'KwaZulu-Natal' },
        { value: 'LP', label: 'Limpopo' },
        { value: 'MP', label: 'Mpumalanga' },
        { value: 'NC', label: 'Northern Cape' },
        { value: 'NW', label: 'North West' },
        { value: 'WC', label: 'Western Cape' },
      ].map((option) => ({ ...option, selected: option.value === state })),
    },
    {
      name: 'receiverName',
      label: "Recipient's name",
      required: true,
      value: getBestRecipient({ type: 'delivery' }),
    },
    {
      name: 'receiverPhone',
      label: "Recipient's mobile number",
      required: true,
      type: 'tel',
      helperText: 'We send shipping updates to this number.',
      minlength: 9,
      error: 'Please enter a valid phone number',
      containerClasses: 'custom-field-complement',
      idOverride: ADD_ADDRESS_FORM_MANUAL_RECIEVER_PHONE_ID,
    },
  ];

  return fields;
};

/**
 *
 * @param {Object} config - form configuration.
 * @param {Object} [config.address] - address object to initialize form with, optional, but must be present if type = add-address-autocomplete-manual
 * @param {string} config.type - type of address form to render "MANUAL" | "AUTOCOMPLETE_MANUAL"
 */
const AddAddressManualForm = (config) => {
  const fields = populateFields(config);

  return /* html */ `
    ${AddressSectionHeading('Add a new delivery address', 'select-address')}
    <form id="bash--add-address-manual-form" method="post">
      ${fields.map((field) => FormField(field)).join('')}
      ${SubmitButton('Save address', 'btn-save-address')}
    </form>
  `;
};

export const submitAddAddressManualForm = async (event) => {
  event.preventDefault();

  // PULL ALL FORM FIELDS
  const form = document.getElementById('bash--add-address-manual-form');
  const formData = new FormData(form);

  const payload = {};
  for (const [key, value] of formData.entries()) {
    payload[key] = value.trim();
  }

  let { receiverPhone } = payload;
  receiverPhone = formatPhoneNumber(receiverPhone, 'ZA').trim();

  // VALIDATE FIELDS
  const invalidFields = [];
  if (!payload.street) invalidFields.push('street');
  if (payload.addressType === 'business' && !payload.businessName) invalidFields.push('businessName');
  if (!payload.neighborhood) invalidFields.push('neighborhood');
  if (!payload.city) invalidFields.push('city');
  if (!payload.postalCode) invalidFields.push('postalCode');
  if (!payload.state) invalidFields.push('state');
  if (!payload.receiverName) invalidFields.push('receiverName');
  if (!receiverPhone || !isValidNumber(receiverPhone, 'ZA')) {
    invalidFields.push('receiverPhone');
    $(`#${ADD_ADDRESS_FORM_MANUAL_RECIEVER_PHONE_ID}`).addClass('invalid');
  }

  // APPLY VALIDATION UI
  if (invalidFields.length > 0) {
    console.error({ invalidFields });
    $('#bash--add-address-manual-form').addClass('show-form-errors');
    $(`#bash--input-${invalidFields[0]}`).focus();

    window.postMessage(
      {
        type: 'ADDRESS_VALIDATION_ERROR',
        message: 'Address validation error. See invalidFields.',
        invalidFields,
      },
      '*'
    );
    return;
  }

  // UPDATE PAYLOAD
  payload.receiverPhone = receiverPhone;
  payload.isDisposable = false;
  const geoCoords = [parseFloat(payload.lng) || '', parseFloat(payload.lat) || ''];
  payload.geoCoordinate = geoCoords; // for MasterData
  payload.geoCoordinates = geoCoords; // for shippingData

  // POST ADDRESS UPDATE AND CHANGE VIEW
  try {
    // Apply the new address to customers orderForm.
    const setAddressResponse = await setAddress(payload);
    if (!setAddressResponse.success) {
      ShowDeliveryError(CouldNotSaveAddressError());
      console.error('Set address error', { setAddressResponse });
      throw new Error('Failed to set address');
    }

    // save address to local storage + master data
    const config = {
      persistMasterData: true,
      add_address_method:
        payload.formType === 'AUTOCOMPLETE_MANUAL'
          ? ADD_ADDRESS_METHOD.SEARCH_FOR_AN_ADDRESS
          : ADD_ADDRESS_METHOD.ADD_ADDRESS_MANUALLY,
      add_addresss_capture_method:
        payload.formType === 'AUTOCOMPLETE_MANUAL'
          ? ADD_ADDRESS_CAPTURE_METHOD.MANUAL_ATTEMPTED_AUTO_COMPLETE_GOOGLE
          : ADD_ADDRESS_CAPTURE_METHOD.MANUAL_ENTRY,
    };
    await addOrUpdateAddress(payload, config);

    window.postMessage({ action: 'setDeliveryView', view: 'select-address' });
    postAddressSaveScroll();
  } catch (error) {
    console.error('Error adding new address', error);
    window.postMessage(
      {
        type: 'ADDRESS_VALIDATION_ERROR',
        message: 'Failed to add address. Please try again.',
        invalidFields: ['general'],
      },
      '*'
    );
  }
};

export default AddAddressManualForm;
