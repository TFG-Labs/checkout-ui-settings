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
  // TODO: Why does the street number have no validation
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

// Data Field	Required	Editable	Rules	Validation
// Recipient Name	True	Yes - all cases		@Grouped by journey  // not from google autocomplete

// Data Field	Required	Editable	Rules	Validation
// Recipient Cellphone Number	True	Yes - all cases		Frontend Backend: We should be storing these numbers in the E.164 format // not from google autocomplete

// Data Field	Required	Editable	Rules	Validation
// Street Number	True	Only on search		@Grouped by journey  // street_number - part street in master data

// Data Field	Required	Editable	Rules	Validation
// Street address	True	Only in manual		@Grouped by journey // route - part street in master data

// Data Field	Required	Editable	Rules	Validation // not from google autocomplete
// Address type	True	Yes - all cases	selection between: - Residential- Business	NA

// Data Field	Required	Editable	Rules	Validation
// Business name	False	Yes - all cases	Required field when Business address type is selected	@Grouped by journey // not from google autocomplete

// Data Field	Required	Editable	Rules	Validation  // not from google autocomplete
// Building/ Complex	False	Yes - all cases		@Grouped by journey

// Data Field	Required	Editable	Rules	Validation
// Suburb	True	Only in manual		@Grouped by journey  //neighborhood in master data

// Data Field	Required	Editable	Rules	Validation
// City	True	Only in manual		@Grouped by journey //city in master data

// Data Field	Required	Editable	Rules	Validation
// Province	True	Only in manual	Dropdown list with available Provinces to select	NA // called start in master data do i have to map it

// Data Field	Required	Editable	Rules	Validation
// Country	True	Never	Not selectable	South Africa

// TODO: fix where back button tackes you for add address
