import { isValidNumber } from 'libphonenumber-js';
import { formatPhoneNumber } from '../../utils/phoneFields';
import { addOrUpdateAddress } from '../../utils/services';
import setAddress from '../../utils/setAddress';
import FormField from './Elements/FormField';
import { getBestRecipient } from './utils';

export const ADD_ADDRESS_FORM_MANUAL_RECIEVER_PHONE_ID = 'bash--input-add-address-manual-form-receiverPhone';

const Heading = () => /* html */ `
    <div class="bash--heading">
      <h3>Add a new delivery address</h3>
      <a href="#" class="back-button--select" data-view="select-address">&lt; Back</a>
    </div>
`;

const SaveButton = () => /* html */ `
  <button
    class="submit btn-go-to-payment btn btn-large btn-success"
    id="btn-save-address"
    type="submit">
    Save Address
  </button>
`;

const AddAddressManualForm = () => {
  const fields = [
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
      value: '',
    },
    {
      name: 'lng',
      required: false,
      type: 'hidden',
      value: '',
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
      name: 'street',
      label: 'Street address',
      required: true,
      value: '',
    },
    {
      name: 'neighborhood',
      label: 'Suburb',
      value: '',
      maxLength: 750,
      required: true,
    },
    {
      name: 'city',
      label: 'City',
      required: true,
      value: '',
      maxLength: 750,
    },
    {
      name: 'postalCode',
      label: 'Postal code',
      value: '',
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
      ],
    },
    {
      type: 'hidden',
      required: true,
      name: 'country',
      value: 'ZAF',
    },
    {
      name: 'receiverName',
      label: `Recipient's name`,
      required: true,
      value: getBestRecipient({ type: 'delivery' }),
    },
    {
      name: 'complement',
      required: false,
      type: 'hidden',
      value: '',
    },
    {
      name: 'receiverPhone',
      label: `Recipient's mobile number`,
      required: true,
      type: 'tel',
      helperText: 'We send shipping updates to this number.',
      minlength: 9,
      error: 'Please enter a valid phone number',
      containerClasses: 'custom-field-complement',
      idOverride: ADD_ADDRESS_FORM_MANUAL_RECIEVER_PHONE_ID,
    },
  ];

  return /* html */ `
    ${Heading()}
    <form id="bash--add-address-manual-form" method="post">
      ${fields.map((field) => FormField(field)).join('')}
      ${SaveButton()}
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

  let receiverPhone = payload.receiverPhone;
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

  // POST ADDRESS UPDATE AND CHANGE VIEW
  try {
    // Apply the new address to customers orderForm.
    const setAddressResponse = await setAddress(payload, { validateExtraFields: false });
    if (!setAddressResponse.success) {
      console.error('Set address error', { setAddressResponse });
      throw new Error('Failed to set address');
    }
    await addOrUpdateAddress(payload);

    window.postMessage({ action: 'setDeliveryView', view: 'select-address' });
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
