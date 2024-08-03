import FormField from './Elements/FormField';
import { provinceShortCode } from './utils';

/**
 *  isCompleteGoogleAddress - checks if the address meets the criteria to show the add address auto complete form
 *  @param {Object} address - address object
 * @returns {boolean} - true if the address meets the <critera></critera>
 * */
const isCompleteGoogleAddress = (address) => {
  console.log('in isCompleteGoogleAddress', address);
  // TODO
  return true;
};

/**
 * mapGoogleAddress - given a google address object, map it to a structured address object
 * @param {Array} addressComponents - google address components
 * @param {Object} geometry - google geometry object
 * @returns {Object} - structured address object
 */
const mapGoogleAddress = (addressComponents, geometry) => {
  if (!addressComponents || addressComponents.length < 1) return {};
  const streetNumber = addressComponents.find((item) => item.types.includes('street_number'))?.long_name;
  const street = addressComponents.find((item) => item.types.includes('route'))?.long_name;
  const neighborhood = addressComponents.find((item) => item.types.includes('sublocality'))?.long_name;
  const city = addressComponents.find((item) => item.types.includes('locality'))?.long_name;
  const postalCode = addressComponents.find((item) => item.types.includes('postal_code'))?.long_name;
  const state = addressComponents.find((item) => item.types.includes('administrative_area_level_1'))?.long_name;

  const coords = { lat: '', lng: '' };
  if (geometry) {
    coords.lat = geometry.location.lat();
    coords.lng = geometry.location.lng();
  }

  return {
    street: `${streetNumber ?? ''} ${street ?? ''}`.trim(),
    neighborhood,
    city,
    postalCode,
    state,
    ...coords,
  };
};

/**
 * populateAddressFromSearch - fills form fields based on the address returned from google auto complete
 * @param {Object} address
 * @returns {void}
 */
const populateAddressFromSearch = (address) => {
  const { street, neighborhood, postalCode, state, city, lat, lng } = address;

  // Clear any populated fields
  document.getElementById('bash--address-form')?.reset();

  // Clear hidden ID fields to prevent overwriting existing.
  document.getElementById('bash--input-addressId').value = '';
  document.getElementById('bash--input-addressName').value = '';

  document.getElementById('bash--input-number').value = '  ';
  document.getElementById('bash--input-street').value = street ?? '';
  document.getElementById('bash--input-neighborhood').value = neighborhood ?? '';
  document.getElementById('bash--input-city').value = city ?? '';
  document.getElementById('bash--input-postalCode').value = postalCode ?? '';
  document.getElementById('bash--input-state').value = provinceShortCode(state);
  document.getElementById('bash--input-lat').value = lat || '';
  document.getElementById('bash--input-lng').value = lng || '';

  // Update previously invalid fields.
  $(':invalid').trigger('change');
};

/**
 * checkForAddressResults - checks if there are any address results to display a notification
 * @param {*} event
 * @returns {void}
 */
const checkForAddressResults = (event) => {
  setTimeout(() => {
    const pacContainers = document.querySelectorAll('.pac-container');
    const hiddenPacContainers = document.querySelectorAll(".pac-container[style*='display: none']");
    if (pacContainers?.length === hiddenPacContainers?.length && event.target?.value?.length > 3) {
      $('#address-search-field-container:not(.no-results)').addClass('no-results');
    } else {
      $('#address-search-field-container.no-results').removeClass('no-results');
    }
  }, 250);
};

/**
 * initGoogleAutocomplete - initializes google autocomplete on the address search field, add event listeners for place changed, change view on place changed
 * @returns {void}
 */
const initGoogleAutocomplete = () => {
  if (!window.google) return;

  const input = document.getElementById('bash--input-address-search');
  if (!input) return;
  const autocomplete = new window.google.maps.places.Autocomplete(input, {
    componentRestrictions: { country: 'ZA' },
  });

  window.google.maps.event.addListener(autocomplete, 'place_changed', () => {
    const place = autocomplete.getPlace();
    console.log('place', place);
    const { address_components: addressComponents, geometry } = place;

    const address = mapGoogleAddress(addressComponents, geometry);

    // Route to the correct view
    if (isCompleteGoogleAddress(address)) {
      window.postMessage({ action: 'setDeliveryView', view: 'add-address-autocomplete', content: address });
    } else {
      populateAddressFromSearch(address);
      window.postMessage({ action: 'setDeliveryView', view: 'address-form' });
    }
  });
  input.value = '';
  input?.addEventListener('keyup', checkForAddressResults);
};

/**
 * AddressNotFoundNotification - html template for address not found notification
 * @returns {string} - html string
 */
const AddressNotFoundNotification = () => /* html */ `
  <div id="no-address-search-results-notification" class="notification info" >
    <span class="icon"></span>
    <div class="notification-content">
      We could not find your address. 
      <a class="no-results-drop-down" href="" data-view="address-form" id="no-address-search-results">
        Please click here to enter it manually.
      </a>
    </div>
  </div>
`;

/**
 * AddressSearch - html template for initializaitng address search field and google autocomplete
 * @returns {string} - html string
 */
const AddressSearch = () => {
  setTimeout(() => {
    initGoogleAutocomplete();
  }, 500);

  const searchField = FormField({
    name: 'address-search',
    placeholder: 'Start typing an address...',
    autoComplete: 'off',
  });

  return /* html */ `
    <div class="address-search-field-container" id="address-search-field-container">
      ${searchField}
      ${AddressNotFoundNotification()}
    </div>
  `;
};

export default AddressSearch;
