// Checkout steps
const STEPS = {
  CART: '#/cart',
  PROFILE: '#/profile',
  SHIPPING: '#/shipping',
  PAYMENT: '#/payment',
};

// Address types
const AD_TYPE = {
  PICKUP: 'search',
  DELIVERY: 'residential',
  BUSINESS: 'business',
  COMMERCIAL: 'commercial',
};

// TIMEOUT
const TIMEOUT_500 = 500;
const TIMEOUT_750 = 750;

// PICKUP MAP STATES
const GEOLOCATE = 'geolocate';
const MANUAL = 'manual';
const PICKUP = 'pickup';
const NONE = 'none';

// APP CONFIGURATION IDs
const RICA_APP = 'ricafields';
const TV_APP = 'tvfields';
const PICKUP_APP = 'pickup';

const DELIVER_APP = 'deliver';

// Furniture fees Url
const FURNITURE_FEES =
  'http://image.tfgmedia.co.za/image/1/process/500x790?source=http://cdn.tfgmedia.co.za' +
  '/15/Marketing/HTMLPages/Furniture_Delivery_Fees_tab_image.jpg';

const COUNTRIES = {
  za: { code: 'za', phonePlaceholder: '(+27)' }, // South Africa
};
const COUNTRIES_AVAILABLES = [COUNTRIES.za.code];

const BASE_URL_API = window.location.host.includes('bash.com')
  ? 'https://store-api.www.bash.com/custom-api/'
  : `${window.location.protocol}//${window.location.host}/custom-api/`;

const FURNITURE_FEE_LINK = `
<a 
  href="${FURNITURE_FEES}"
  class="furniture-fees-link" 
  target="_blank"
>
  Furniture delivery costs
</a>
`;

const FURNITURE_CAT = '1169288799';
const TV_CAT = '938942995';
const SIM_CAT = '24833302';

export {
  STEPS,
  TIMEOUT_500,
  TIMEOUT_750,
  RICA_APP,
  FURNITURE_FEES,
  COUNTRIES,
  COUNTRIES_AVAILABLES,
  AD_TYPE,
  BASE_URL_API,
  TV_APP,
  FURNITURE_FEE_LINK,
  SIM_CAT,
  TV_CAT,
  FURNITURE_CAT,
  GEOLOCATE,
  MANUAL,
  PICKUP,
  NONE,
  PICKUP_APP,
};

