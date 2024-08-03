import FormField from './Elements/FormField';
import { AddressSectionHeading, ContactCard, SubmitButton } from './FormComponents';
import { getBestRecipient } from './utils';

const AddAddressAutoCompleteForm = (address) => {
  const fields = [
    {
      name: 'number',
      required: true,
      label: 'Street number',
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
      name: 'receiverName',
      label: 'Recipient’s name',
      required: true,
      value: getBestRecipient({ type: 'delivery' }),
    },
    {
      name: 'complement', // TODO: ask john what is this?
      required: false,
      type: 'hidden',
      helperText: 'We send shipping updates to this number.',
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

  // TODO: VALIDATE DATA RETURNED FROM  GOOGLE - IS IT SUFFICIENT
  // TODO: IF YES - MOVE TO THIS FORM
  // TODO: Rename  ID FORM
  // TODO: Add on SUBMIT
  // TODO: LEGIT WHERE ARE WE STORING THIS INFO FOR  ON SUBMIT
  // TODO: ASK JOHN WHAT IS COMPLEMENT
  // TODO: How to deal with seperate street number  field
  return /* html */ `
    ${AddressSectionHeading('Delivery Details')}
    ${ContactCard(address)}
    <form id="bash--address-form" method="post">
      ${fields.map((field) => FormField(field)).join('')}
      ${SubmitButton()}
    </form>
  `;
};

export default AddAddressAutoCompleteForm;
