import FormField from './Elements/FormField';
import { getBestRecipient } from './utils';

const formatAddress = (fields) => {
  const businessName = fields.find((f) => f.name === 'businessName')?.value || '';
  const number = fields.find((f) => f.name === 'number')?.value || '';
  const street = fields.find((f) => f.name === 'street')?.value || '';
  const neighborhood = fields.find((f) => f.name === 'neighborhood')?.value || '';
  const city = fields.find((f) => f.name === 'city')?.value || '';
  const postalCode = fields.find((f) => f.name === 'postalCode')?.value || '';

  const addressLine = [
    `${businessName ? `${businessName}, ` : ''}${number ? `${number.trim()} ` : ''}${street}`,
    neighborhood || city,
    postalCode,
  ];

  return addressLine.filter(Boolean).join(', ');
};

const AddressForm = () => {
  const fields = [
    {
      name: 'addressId',
      type: 'hidden',
      value: '',
      required: false,
    },
    {
      name: 'addressName',
      type: 'hidden',
      value: '',
      required: false,
      maxLength: 50,
    },
    {
      name: 'lat',
      required: false,
      type: 'hidden',
      value: '',
    },
    {
      name: 'lng',
      required: false,
      type: 'hidden',
      value: '',
    },
    {
      name: 'street',
      label: 'Street address',
      required: true,
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
      name: 'number',
      required: false,
      value: '',
      type: 'hidden',
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
      name: 'neighborhood',
      label: 'Suburb',
      value: '',
      maxLength: 750,
    },
    {
      name: 'city',
      label: 'City',
      required: true,
      value: '',
      maxLength: 750,
    },
    {
      name: 'postalCode',
      label: 'Postal code',
      value: '',
      type: 'tel',
      minlength: 4,
      maxLength: 4,
    },
    {
      type: 'note',
      required: false,
      name: 'suburb-postal-reminder',
      value: 'Make sure to specify the correct Suburb and Postal code so we can easily find your address.',
    },
    {
      name: 'state',
      label: 'Province',
      type: 'dropdown',
      options: [
        {
          value: '',
          label: 'Select',
        },
        {
          value: 'EC',
          label: 'Eastern Cape',
        },
        {
          value: 'FS',
          label: 'Free State',
        },
        {
          value: 'GP',
          label: 'Gauteng',
        },
        {
          value: 'KZN',
          label: 'KwaZulu-Natal',
        },
        {
          value: 'LP',
          label: 'Limpopo',
        },
        {
          value: 'MP',
          label: 'Mpumalanga',
        },
        {
          value: 'NC',
          label: 'Northern Cape',
        },
        {
          value: 'NW',
          label: 'North West',
        },
        {
          value: 'WC',
          label: 'Western Cape',
        },
      ],
    },

    {
      type: 'note',
      required: false,
      name: 'country-display',
      label: 'Country',
      value: 'South Africa',
    },
    {
      type: 'hidden',
      required: true,
      name: 'country',
      value: 'ZAF',
    },
    {
      name: 'receiverName',
      label: 'Recipient’s name',
      required: true,
      value: getBestRecipient({ type: 'delivery' }),
    },
    {
      name: 'complement',
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
      maxLength: 9,
      error: 'Please enter a valid phone number',
      containerClasses: 'custom-field-complement', // for sa flag
    },
  ];

  const formFields = fields.map((field) => FormField(field)).join('');

  const formattedAddress = formatAddress(fields);

  const addressDisplay = `
  <div class="address-display">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.5 20.2506H22.5M14.25 20.2506V14.2506H9.75V20.2506M3.75 10.9403V20.2506M20.25 20.2506V10.9403M2.25 12.4403L11.4694 3.21996C11.539 3.15023 11.6217 3.09491 11.7128 3.05717C11.8038 3.01943 11.9014 3 12 3C12.0986 3 12.1962 3.01943 12.2872 3.05717C12.3783 3.09491 12.461 3.15023 12.5306 3.21996L21.75 12.4403"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span>${formattedAddress}</span>
  </div>
`;

  const addressEditWarning = `
  <div class="address-edit-warning">
 
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M11.25 11.25H12V16.5H12.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
    stroke="#040404"
    stroke-opacity="0.75"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M11.8125 8.8125C12.3303 8.8125 12.75 8.39277 12.75 7.875C12.75 7.35723 12.3303 6.9375 11.8125 6.9375C11.2947 6.9375 10.875 7.35723 10.875 7.875C10.875 8.39277 11.2947 8.8125 11.8125 8.8125Z"
    fill="#040404"
    fill-opacity="0.75"
  />
</svg>
  <p>Changing the recipient information will only reflect on this order and will not affect your address book</p>
  </div>
`;

  return `
  <div>
  ${addressDisplay}
  <form id="bash--address-form" method="post">
    ${formFields}
  ${addressEditWarning}
    <button 
      class="submit btn-go-to-payment btn btn-large btn-success"
      id="btn-save-address" 
      type="submit">
      Save address
    </button>
  </form>

  </div>
  `;
};

export default AddressForm;
