import { isValidNumber } from 'libphonenumber-js';
import { formatPhoneNumber } from '../../utils/phoneFields';
import { addOrUpdateAddress, getAddressByName } from '../../utils/services';
import setAddress from '../../utils/setAddress';
import ContactCard from './ContactCard';
import FormField from './Elements/FormField';

export const EDIT_FORM_RECEIVER_PHONE_ID = 'bash--input-edit-adress-form-receiverPhone';

const Heading = () => /* html */ `
    <div class="bash--heading">
      <h3>Address Details</h3>
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
      label: 'Recipient’s name',
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
    ${Heading()}
    ${ContactCard(data)}
    <form id="bash--edit-address-form" method="post">
      ${fields.map((field) => FormField(field)).join('')}
      ${SaveButton()}
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
    const setAddressResponse = await setAddress(payload, { validateExtraFields: false });
    const { success } = setAddressResponse;
    if (!success) {
      console.error('Set address error', { setAddressResponse });
      return;
    }
    addOrUpdateAddress(payload);

    window.postMessage({ action: 'setDeliveryView', view: 'select-address' });
  });
};

export default EditAddressForm;
