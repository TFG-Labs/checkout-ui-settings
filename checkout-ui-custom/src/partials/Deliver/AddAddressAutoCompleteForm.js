import FormField from './Elements/FormField';
import { AddressSectionHeading, ContactCard, SubmitButton } from './FormComponents';

const AddAddressAutoCompleteForm = (address) => {
  const fields = [
    // TODO: fix where back button tackes you for add address
    // TODO: what to do with addressId and addressName
    // TODO: // Street Number TrueOnly on search @Grouped by journey  // street_number - part street in master data
    // TODO: Do we tranform province ?
    {
      name: 'streetNumber',
      required: true,
      label: 'Street number',
      value: '',
    },
    // TODO:  Address type True Yes - all cases selection between: - Residential- Business NA
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
    // TODO Business name False Yes - all cases Required field when Business address type is selected @Grouped by journey // not from google autocomplete
    {
      name: 'businessName',
      label: 'Business name',
      required: false,
      value: '',
      maxLength: 100,
    },
    // TODO  Building/ Complex False Yes - all cases @Grouped by journey
    {
      name: 'companyBuilding',
      label: 'Building/Complex and number',
      required: false,
      value: '',
      maxLength: 100,
    },
    {
      // TODO Recipient Name True Yes - all cases	@Grouped by journey  // not from google autocomplete
      name: 'receiverName',
      label: 'Recipient’s name',
      required: true,
      value: '',
    },
    {
      name: 'complement', // TODO: ask john what is this?
      required: false,
      type: 'hidden',
      helperText: 'We send shipping updates to this number.',
      value: '',
    },
    // TODO Recipient Cellphone Number True Yes - all cases Frontend Backend: We should be storing these numbers in the E.164 format // not from google autocomplete
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
    // HIDDEN FIELDS
    // TODO: Street address True Only in manual @Grouped by journey // route - part street in master data
    {
      name: 'route',
      required: true,
      value: '',
      type: 'hidden',
    },
    {
      name: 'neighborhood',
      required: true,
      value: '',
      type: 'hidden',
    },
    {
      name: 'state',
      required: true,
      type: 'hidden',
      value: '',
    },
    {
      type: 'hidden',
      required: true,
      name: 'country',
      value: 'ZAF',
    },
    {
      name: 'postalCode',
      required: true,
      value: '',
      type: 'hidden',
    },
  ];

  // TODO: VALIDATE DATA RETURNED FROM  GOOGLE - IS IT SUFFICIENT
  // TODO: IF YES - MOVE TO THIS FORM
  // TODO: Rename  ID FORM
  // TODO: Add on SUBMIT
  // TODO: LEGIT WHERE ARE WE STORING THIS INFO FOR  ON SUBMIT
  // TODO: ASK JOHN WHAT IS COMPLEMENT
  // TODO: How to deal with seperate street number  field
  // TODO: Why does the street number have no validation
  return /* html */ `
    ${AddressSectionHeading('Delivery Details')}
    ${ContactCard(address)}
    ${JSON.stringify(address)}
    <form id="bash--address-form" method="post">
      ${fields.map((field) => FormField(field)).join('')}
      ${SubmitButton()}
    </form>
  `;
};

export default AddAddressAutoCompleteForm;
