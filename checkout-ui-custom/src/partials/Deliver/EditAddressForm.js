import { isValidNumber } from 'libphonenumber-js';
import { formatPhoneNumber } from '../../utils/phoneFields';
import { addOrUpdateAddress, getAddressByName } from '../../utils/services';
import setAddress from '../../utils/setAddress';
import { CouldNotSaveAddressError, ShowDeliveryError } from './DeliveryError';
import FormField from './Elements/FormField';
import { AddressSectionHeading, ContactCard, SubmitButton } from './FormComponents';
import { postAddressSaveScroll } from './utils';

export const EDIT_FORM_RECEIVER_PHONE_ID = 'bash--input-edit-adress-form-receiverPhone';

// TEMPORARILY REMOVED  - CAUSING ISSUE WITH MISSING ADDRESSES
// const DeleteButton = () => /* html */ `
//   <button
//     class="btn btn-small"
//     id="btn-delete-address"
//     type="submit">
//     Delete
//   </button>
// `;

const ButtonContainer = () => /* html */ `
  <div
    id="address-button-container"
  >
    ${SubmitButton('Save', 'btn-save-address')}
  </div>
`;

const EditAddressForm = (data) => {
  const fields = [
    {
      name: 'addressId',
      type: 'hidden',
      value: data.id,
      required: false,
    },
    {
      name: 'addressName',
      type: 'hidden',
      value: data.addressName,
      required: false,
      maxLength: 50,
    },
    {
      name: 'receiverName',
      label: "Recipient's name and surname",
      required: true,
      value: data?.receiverName ?? '',
    },
    {
      name: 'receiverPhone',
      label: 'Recipient’s mobile number',
      required: true,
      type: 'tel',
      value: data?.receiverPhone ?? '',
      helperText: 'We send shipping updates to this number.',
      minlength: 9,
      error: 'Please enter a valid phone number',
      containerClasses: 'custom-field-complement', // for sa flag
      idOverride: EDIT_FORM_RECEIVER_PHONE_ID,
    },
  ];

  return /* html */ `
    ${AddressSectionHeading('Address Details', 'select-address')}
    ${ContactCard(data)}
    <form id="bash--edit-address-form" method="post">
      ${fields.map((field) => FormField(field)).join('')}
      ${ButtonContainer()}
    </form>
  `;
};

export const submitEditAddressForm = async (event) => {
  event.preventDefault();

  // PULL ALL FORM FIELDS
  const form = document.getElementById('bash--edit-address-form');
  const formData = new FormData(form);

  const addressId = formData.get('addressId');
  const addressName = formData.get('addressName');
  const receiverName = formData.get('receiverName');
  let receiverPhone = formData.get('receiverPhone');
  receiverPhone = formatPhoneNumber(receiverPhone, 'ZA').trim();

  // VALIDATE FIELDS
  const invalidFields = [];
  if (!receiverName) invalidFields.push('receiverName');
  if (!receiverPhone || !isValidNumber(receiverPhone, 'ZA')) {
    invalidFields.push('receiverPhone');
    $(`#${EDIT_FORM_RECEIVER_PHONE_ID}`).addClass('invalid');
  }

  // APPLY VALIDATION UI
  if (invalidFields.length > 0) {
    console.error({ invalidFields });
    $('#bash--edit-address-form').addClass('show-form-errors');
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
  getAddressByName(addressName).then(async (address) => {
    const payload = {
      ...address,
      addressId,
      addressName,
      receiverName,
      receiverPhone,
      geoCoordinates: address?.geoCoordinate || [], // for shippingData
    };

    // Apply the selected address to customers orderForm.
    const setAddressResponse = await setAddress(payload);
    const { success } = setAddressResponse;
    if (!success) {
      ShowDeliveryError(CouldNotSaveAddressError());
      console.error('Set address error', { setAddressResponse });
      return;
    }
    postAddressSaveScroll();
    addOrUpdateAddress(payload);

    window.postMessage({ action: 'setDeliveryView', view: 'select-address' });
  });
};

export default EditAddressForm;
