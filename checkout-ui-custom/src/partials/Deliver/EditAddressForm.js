import { isValidNumber } from 'libphonenumber-js';
import { ADD_ADDRESS_METHOD } from '../../utils/addressAnalytics';
import { formatPhoneNumber } from '../../utils/phoneFields';
import { addOrUpdateAddress, getAddressByName } from '../../utils/services';
import setAddress from '../../utils/setAddress';
import { CouldNotSaveAddressError, ShowDeliveryError } from './DeliveryError';
import FormField from './Elements/FormField';
import { AddressSectionHeading, ContactCard, SubmitButton } from './FormComponents';
import { postAddressSaveScroll } from './utils';

export const EDIT_FORM_RECEIVER_PHONE_ID = 'bash--input-edit-adress-form-receiverPhone';

const DeleteButton = () => /* html */ `
  <button
    class="btn btn-small"
    id="btn-delete-address"
  >
    Delete
  </button>
`;

const ButtonContainer = () => /* html */ `
  <div
    id="address-button-container"
  >
    ${DeleteButton()}
    ${SubmitButton('Save', 'btn-save-address')}
  </div>
`;

const DisposableAddressDisclaimer = () => /* html */ `
  <div style="display: flex; align-items: center; justify-content: center;  margin-top: 24px;">
    <svg style="min-width: 24px;" width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.4844 10.0001V10C18.4844 8.32195 17.9868 6.68158 17.0545 5.28633C16.1222 3.89109 14.7972 2.80362 13.2468 2.16146C11.6965 1.5193 9.99059 1.35128 8.34478 1.67865C6.69898 2.00602 5.18721 2.81408 4.00065 4.00064C2.81408 5.1872 2.00603 6.69897 1.67865 8.34478C1.35128 9.99059 1.5193 11.6965 2.16146 13.2468C2.80363 14.7971 3.89109 16.1222 5.28634 17.0545C6.68159 17.9868 8.32195 18.4844 10 18.4844H10.0001C12.2495 18.4819 14.406 17.5872 15.9966 15.9966C17.5872 14.406 18.4819 12.2495 18.4844 10.0001ZM11.2656 14.5C11.2656 14.6368 11.2113 14.7679 11.1146 14.8646C11.0179 14.9613 10.8868 15.0156 10.75 15.0156C10.4143 15.0156 10.0924 14.8823 9.85507 14.6449C9.61772 14.4076 9.48438 14.0857 9.48438 13.75V10C9.48438 9.93784 9.45969 9.87823 9.41573 9.83427C9.37178 9.79032 9.31216 9.76562 9.25 9.76562C9.11325 9.76562 8.9821 9.7113 8.8854 9.6146C8.7887 9.5179 8.73438 9.38675 8.73438 9.25C8.73438 9.11325 8.7887 8.9821 8.8854 8.8854C8.9821 8.7887 9.11325 8.73438 9.25 8.73438C9.58567 8.73438 9.90759 8.86772 10.1449 9.10507C10.3823 9.34242 10.5156 9.66434 10.5156 10V13.75C10.5156 13.8122 10.5403 13.8718 10.5843 13.9157C10.6282 13.9597 10.6878 13.9844 10.75 13.9844C10.8868 13.9844 11.0179 14.0387 11.1146 14.1354C11.2113 14.2321 11.2656 14.3632 11.2656 14.5ZM10.1198 6.61553C9.97335 6.71339 9.80115 6.76562 9.625 6.76562C9.3888 6.76562 9.16226 6.67179 8.99524 6.50477C8.82821 6.33774 8.73438 6.11121 8.73438 5.875C8.73438 5.69885 8.78661 5.52666 8.88448 5.3802C8.98234 5.23373 9.12144 5.11958 9.28418 5.05217C9.44692 4.98476 9.62599 4.96712 9.79876 5.00149C9.97152 5.03585 10.1302 5.12068 10.2548 5.24523C10.3793 5.36979 10.4642 5.52848 10.4985 5.70125C10.5329 5.87401 10.5152 6.05309 10.4478 6.21583C10.3804 6.37857 10.2663 6.51766 10.1198 6.61553ZM19.5156 10.0001C19.5156 11.882 18.9575 13.7218 17.912 15.2866C16.8664 16.8514 15.3802 18.0711 13.6415 18.7913C11.9027 19.5115 9.98945 19.6999 8.1436 19.3328C6.29775 18.9656 4.60223 18.0593 3.27144 16.7286C1.94066 15.3978 1.03438 13.7023 0.667219 11.8564C0.300057 10.0106 0.488498 8.09728 1.20871 6.35853C1.92893 4.61978 3.14857 3.13364 4.71341 2.08805C6.27823 1.04246 8.11797 0.48438 9.99998 0.484375C12.5228 0.487345 14.9414 1.49084 16.7253 3.27473C18.5092 5.05862 19.5127 7.47725 19.5156 10.0001Z" stroke="#040404" stroke-opacity="0.75" stroke-width="0.09375"/>
    </svg>
    <p style="margin-left: 8px; margin-bottom: 0;">
      Changing the recipient information will only reflect on this order and will not affect your address book.
    </p>
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
       ${DisposableAddressDisclaimer()}
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
      isDisposable: true,
    };

    // Apply the selected address to customers orderForm.
    const config = {
      track: true,
      add_address_method: ADD_ADDRESS_METHOD.EDIT_ADDRESS,
      add_address_capture_method: address?.captureMethod ? address.captureMethod.toLowerCase() : null,
    };
    const setAddressResponse = await setAddress(payload, config);
    const { success } = setAddressResponse;
    if (!success) {
      ShowDeliveryError(CouldNotSaveAddressError());
      console.error('Set address error', { setAddressResponse });
      return;
    }
    postAddressSaveScroll();

    // persist address to local storage + master data
    addOrUpdateAddress(payload, false);

    window.postMessage({ action: 'setDeliveryView', view: 'select-address' });
  });
};

export default EditAddressForm;
