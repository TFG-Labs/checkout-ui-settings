import { isValidNumber } from 'libphonenumber-js';
import { formatPhoneNumber } from '../../utils/phoneFields';
import { addOrUpdateAddress } from '../../utils/services';
import setAddress from '../../utils/setAddress';
import FormField from './Elements/FormField';
import { AddressSectionHeading, ContactCard, SubmitButton } from './FormComponents';
import { provinceShortCode } from './utils';

export const ADD_ADDRESS_AUTOCOMPLETE_FORM_RECEIVER_PHONE_ID = 'bash--input-add-adress-autocomplete-form-receiverPhone';

const AddAddressAutoCompleteForm = (address) => {
  const fields = [
    {
      name: 'streetNumber',
      required: true,
      label: 'Street number',
      value: address?.streetNumber || '',
    },
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
      name: 'receiverName',
      label: 'Recipient’s name',
      required: true,
      value: '',
    },
    {
      name: 'receiverPhone',
      label: 'Recipient’s mobile number',
      required: true,
      type: 'tel',
      helperText: 'We send shipping updates to this number.',
      minlength: 9,
      error: 'Please enter a valid phone number',
      containerClasses: 'custom-field-complement', // for sa flag
      idOverride: ADD_ADDRESS_AUTOCOMPLETE_FORM_RECEIVER_PHONE_ID,
    },
    // HIDDEN FIELDS
    {
      name: 'route',
      required: true,
      value: address.route,
      type: 'hidden',
    },
    {
      name: 'neighborhood',
      required: true,
      value: address.neighborhood,
      type: 'hidden',
    },
    {
      name: 'city',
      required: true,
      value: address.city,
      type: 'hidden',
    },
    {
      name: 'postalCode',
      required: true,
      value: address.postalCode,
      type: 'hidden',
    },
    {
      name: 'state',
      required: true,
      type: 'hidden',
      value: provinceShortCode(address.state),
    },
    {
      name: 'country',
      type: 'hidden',
      required: true,
      value: 'ZAF',
    },

    {
      name: 'lat',
      required: false,
      type: 'hidden',
      value: address?.lat || '',
    },
    {
      name: 'lng',
      required: false,
      type: 'hidden',
      value: address?.lng || '',
    },
  ];

  const street = `${address?.streetNumber ?? ''} ${address?.route ?? ''}`.trim();

  return /* html */ `
    ${AddressSectionHeading('Delivery Details', 'address-search')}
    ${ContactCard({ ...address, street })}
    <form id="bash--add-address-autocomplete-form" method="post">
      ${fields.map((field) => FormField(field)).join('')}
      ${SubmitButton('Save address', 'btn-save-address')}
    </form>
  `;
};

export const submitAddAddressAutoCompleteForm = async (event) => {
  event.preventDefault();

  // PULL ALL FORM FIELDS
  const form = document.getElementById('bash--add-address-autocomplete-form');
  const formData = new FormData(form);

  // visible fields
  const streetNumber = formData.get('streetNumber')?.trim();
  const addressType = formData.get('addressType')?.trim();
  const businessName = formData.get('businessName')?.trim();
  const companyBuilding = formData.get('companyBuilding')?.trim();
  const receiverName = formData.get('receiverName')?.trim();
  let receiverPhone = formData.get('receiverPhone')?.trim();
  receiverPhone = formatPhoneNumber(receiverPhone, 'ZA').trim();

  // hidden fields
  const route = formData.get('route')?.trim();
  const neighborhood = formData.get('neighborhood')?.trim();
  const city = formData.get('city')?.trim();
  const state = formData.get('state')?.trim();
  const country = formData.get('country')?.trim();
  const postalCode = formData.get('postalCode')?.trim();
  const lat = formData.get('lat')?.trim();
  const lng = formData.get('lng')?.trim();

  // VALIDATE FIELDS
  // we only validate visible fields - hidden fields had been validated
  // prior otherwise the user would not be able to get to this form

  const invalidFields = [];
  if (!streetNumber) invalidFields.push('streetNumber');
  if (addressType === 'business' && !businessName) invalidFields.push('businessName');
  if (!receiverName) invalidFields.push('receiverName');
  if (!receiverPhone || !isValidNumber(receiverPhone, 'ZA')) {
    invalidFields.push('receiverPhone');
    $(`#${ADD_ADDRESS_AUTOCOMPLETE_FORM_RECEIVER_PHONE_ID}`).addClass('invalid');
  }

  // APPLY VALIDATION UI
  if (invalidFields.length > 0) {
    console.error({ invalidFields });
    $('#bash--add-address-autocomplete-form').addClass('show-form-errors');
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

  // POST ADDRESS UPDATE AND CHANGE VIEW
  const geoCoords = [parseFloat(lng) || '', parseFloat(lat) || ''];

  const payload = {
    isDisposable: false,
    addressType,
    receiverName,
    receiverPhone: formatPhoneNumber(receiverPhone, 'ZA').trim(),
    postalCode,
    city,
    state,
    country,
    businessName,
    street: `${streetNumber ?? ''} ${route ?? ''}`.trim(),
    neighborhood,
    companyBuilding,
    geoCoordinates: geoCoords, // for shippingData
    geoCoordinate: geoCoords, // for MasterData
  };

  // Apply the selected address to customers orderForm.
  const setAddressResponse = await setAddress(payload);
  const { success } = setAddressResponse;
  if (!success) {
    console.error('Set address error', { setAddressResponse });
    return;
  }
  addOrUpdateAddress(payload);

  window.postMessage({ action: 'setDeliveryView', view: 'select-address' });
};

export default AddAddressAutoCompleteForm;
