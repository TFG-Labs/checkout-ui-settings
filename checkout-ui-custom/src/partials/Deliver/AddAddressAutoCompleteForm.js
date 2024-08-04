import FormField from './Elements/FormField';
import { AddressSectionHeading, ContactCard, SubmitButton } from './FormComponents';

export const submitAddAddressAutoCompleteForm = async (event) => {
  event.preventDefault();

  // TODO
  console.log('submitAddAddressAutoCompleteForm');
};

const AddAddressAutoCompleteForm = (address) => {
  const fields = [
    // TODO: fix where back button tackes you for add address
    // TODO: what to do with addressId and addressName
    // TODO: // Street Number TrueOnly on search @Grouped by journey  // street_number - part street in master data
    // TODO: Do we tranform province ?
    // TODO: street: `${subValues.streetNumber ?? ''} ${subValues.route ?? ''}`.trim(),
    {
      name: 'streetNumber',
      required: true,
      label: 'Street number',
      value: address?.streetNumber || '',
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
      name: 'state',
      required: true,
      type: 'hidden',
      value: address.state,
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
      value: address.postalCode,
      type: 'hidden',
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

  // TODO: Rename  ID FORM
  // TODO: Add on SUBMIT
  // TODO: LEGIT WHERE ARE WE STORING THIS INFO FOR  ON SUBMIT
  // TODO: ASK JOHN WHAT IS COMPLEMENT
  // TODO: How to deal with seperate street number  field
  // TODO: Why does the street number have no validation

  const street = `${address?.streetNumber ?? ''} ${address?.route ?? ''}`.trim();
  return /* html */ `
    ${AddressSectionHeading('Delivery Details')}
    ${ContactCard({ ...address, street })}
    <form id="bash--add-address-autocomplete-form" method="post">
      ${fields.map((field) => FormField(field)).join('')}
      ${SubmitButton()}
    </form>
  `;
};

export default AddAddressAutoCompleteForm;
