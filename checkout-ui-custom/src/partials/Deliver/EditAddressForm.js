import { isValidNumber } from 'libphonenumber-js';
import { formatPhoneNumber } from '../../utils/phoneFields';
import FormField from './Elements/FormField';

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

const ContactCard = (data) => {
  const { number, companyBuilding, street, city, postalCode } = data;

  const addressLine = [companyBuilding, `${number ? `${number} ` : ''}${street}`, city, postalCode]
    .filter((item) => item !== undefined && item !== null && item !== '')
    .join(', ')
    .trim();

  return /* html */ `
    <div style="border: 0.5px solid #0404041A; border-radius: 8px; padding: 16px; display: flex; align-items: center;">
      <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 18.2496H22.5M14.25 18.2496V12.2496H9.75V18.2496M3.75 8.9393V18.2496M20.25 18.2496V8.9393M2.25 10.4393L11.4694 1.21899C11.539 1.14926 11.6217 1.09394 11.7128 1.05619C11.8038 1.01845 11.9014 0.999023 12 0.999023C12.0986 0.999023 12.1962 1.01845 12.2872 1.05619C12.3783 1.09394 12.461 1.14926 12.5306 1.21899L21.75 10.4393" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <p style="margin-left: 16px; line-height: 1; font-size: 14px; margin-bottom:0;">${addressLine}</p>
  </div>
  `;
};

const EditAddressForm = (data) => {
  // VALIDATE DATA AND DEAL WITH ERRORS
  // TODO HOW DO WE DETERMINE WHICH FORM TO SHOW
  const fields = [
    {
      name: 'addressId',
      type: 'hidden',
      value: data.id,
      required: false,
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
  console.log('---- SUBMIT EDIT ADDRESS-----');
  console.log('event', event);

  const form = document.getElementById('bash--edit-address-form');
  const formData = new FormData(form);
  const addressId = formData.get('addressId');
  const receiverName = formData.get('receiverName');
  const receiverPhone = formData.get('receiverPhone');

  const data = { addressId, receiverName, receiverPhone };
  data.receiverPhone = formatPhoneNumber(data.receiverPhone, 'ZA').trim();

  // VALIDATE FIELDS
  const invalidFields = [];
  if (!receiverName) invalidFields.push('receiverName');
  if (!receiverPhone || !isValidNumber(formatPhoneNumber(receiverPhone, 'ZA'), 'ZA')) {
    invalidFields.push('receiverPhone');
  }

  console.log('invalidFields', invalidFields);

  // if (
  //   requiredFields.includes('receiverPhone') &&
  //   !invalidFields.includes('receiverPhone') &&
  //   !isValidNumber(formatPhoneNumber(address.x, 'ZA'), 'ZA')
  // ) {
  //   invalidFields.push('receiverPhone');
  //   $('#bash--input-receiverPhone').addClass('invalid');
  //   $('#bash--label-receiverPhone').focus();
  // }

  // IF FALSE APPLY VALIDATIONDS

  // OTHERWISE API CALL AND SUBMIT
};

export default EditAddressForm;
