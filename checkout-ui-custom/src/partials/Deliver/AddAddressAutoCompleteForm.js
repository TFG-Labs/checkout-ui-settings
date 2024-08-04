import { formatPhoneNumber } from '../../utils/phoneFields';
import FormField from './Elements/FormField';
import { AddressSectionHeading, ContactCard, SubmitButton } from './FormComponents';

export const ADD_ADDRESS_AUTOCOMPLETE_FORM_RECEIVER_PHONE_ID = 'bash--input-add-adress-autocomplete-form-receiverPhone';

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
      idOverride: ADD_ADDRESS_AUTOCOMPLETE_FORM_RECEIVER_PHONE_ID,
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
      name: 'country',
      type: 'hidden',
      required: true,
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

export const submitAddAddressAutoCompleteForm = async (event) => {
  event.preventDefault();

  // TODO: how do you do the conditional address type check

  // PULL ALL FORM FIELDS
  const form = document.getElementById('bash--add-address-autocomplete-form');
  const formData = new FormData(form);

  // visible fields
  const streetNumber = formData.get('streetNumber');
  const addressType = formData.get('addressType');
  const businessName = formData.get('businessName');
  const companyBuilding = formData.get('companyBuilding');
  const receiverName = formData.get('receiverName');
  let receiverPhone = formData.get('receiverPhone');
  receiverPhone = formatPhoneNumber(receiverPhone, 'ZA').trim();

  // hidden fields
  const route = formData.get('route');
  const neighborhood = formData.get('neighborhood');
  const state = formData.get('state');
  const country = formData.get('country');
  const postalCode = formData.get('postalCode');
  const lat = formData.get('lat');
  const lng = formData.get('lng');

  console.log('yeet', {
    streetNumber,
    addressType,
    businessName,
    companyBuilding,
    receiverName,
    receiverPhone,
    route,
    neighborhood,
    state,
    country,
    postalCode,
    lat,
    lng,
  });

  // VALIDATE FIELDS
  // we only validate visible fields - hidden fields had been validated
  // prior otherwise the user would not be able to get to this form

  // const invalidFields = [];
  // if (!receiverName) invalidFields.push('receiverName');
  // if (!receiverPhone || !isValidNumber(receiverPhone, 'ZA')) {
  //   invalidFields.push('receiverPhone');
  //   $(`#${EDIT_FORM_RECEIVER_PHONE_ID}`).addClass('invalid');
  // }

  // APPLY VALIDATION UI
  // if (invalidFields.length > 0) {
  //   console.error({ invalidFields });
  //   $('#bash--edit-address-form').addClass('show-form-errors');
  //   $(`#bash--input-${invalidFields[0]}`).focus();

  //   window.postMessage(
  //     {
  //       type: 'ADDRESS_VALIDATION_ERROR',
  //       message: 'Address validation error. See invalidFields.',
  //       invalidFields,
  //     },
  //     '*'
  //   );
  //   return;
  // }
  // POST ADDRESS UPDATE AND CHANGE VIEW
  // getAddressByName(addressName).then(async (address) => {
  //   const payload = {
  //     ...address,
  //     addressId,
  //     addressName,
  //     receiverName,
  //     receiverPhone,
  //     geoCoordinates: address?.geoCoordinate || [], // for shippingData
  //   };

  //   // Apply the selected address to customers orderForm.
  //   const setAddressResponse = await setAddress(payload, { validateExtraFields: false });
  //   const { success } = setAddressResponse;
  //   if (!success) {
  //     console.error('Set address error', { setAddressResponse });
  //     return;
  //   }
  //   addOrUpdateAddress(payload);

  //   window.postMessage({ action: 'setDeliveryView', view: 'select-address' });
  // });
};

export default AddAddressAutoCompleteForm;
