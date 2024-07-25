import FormField from './Elements/FormField';

/**
 * Form Exclusively for Address Edits
 */

const DeleteButton = () => `
    <a
      id="btn-delete-address"
      href="#"
    >
      Delete address
    </a>
  `;

const SaveButton = () => `
    <button
      class="submit btn-go-to-payment btn btn-large btn-success"
      id="btn-save-address"
      type="submit">
      Delete address
    </button>
`;
const EditAddressForm = () => {
  // TODO: SK - FETCH THE ADDRESS
  // TODO: SK - POPULATE SUMMARY BLOCK
  // TODO: SK - POPULATE FORM - RECIPIENT NAME, PHONE
  // FORMAT  + VALIDATE PHONE NUMBER
  // VALIDATE DATA AND DEAL WITH ERRORS
  // TODO HOW DO WE DETERMINE WHICH FORM TO SHOW
  const fields = [
    {
      name: 'addressId',
      type: 'hidden',
      value: '',
      required: false,
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
    },
  ];

  const formFields = fields.map((field) => FormField(field)).join('');

  return `
    <form id="bash--edit-address-form" method="post" style="border: 1px solid black;">
      <p>Edit Address Shaheenss</p>
      ${formFields}

      ${DeleteButton()}
      ${SaveButton()}
    </form>
  `;
};

export default EditAddressForm;
