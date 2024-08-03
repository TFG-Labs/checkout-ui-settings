import FormField from './Elements/FormField';
import { provinceShortCode } from './utils';

/**
 * isCompleteGoogleAddress - checks if the address meets the criteria to show the add address auto complete form
 * @param {Object} address - address object
 * @returns {boolean} - true if the address meets the <critera></critera>
 * */
const isCompleteGoogleAddress = (address) => {
  if (!address?.route) return false;
  if (!address?.neighborhood) return false;
  if (!address?.city) return false;
  if (!address?.state) return false;
  if (!address?.postalCode) return false;

  return true;
};

/**
 * getAddressComponentByType - given an address component, return a function that takes a type and returns the long_name of the address component
 * @param {*} addressComponents:
 * @returns {function} - a function that takes a type and returns the long_name of the address component
 */
const getAddressComponentByType = (addressComponents) => (type) => {
  const component = addressComponents.find((item) => item.types.includes(type));
  return component?.long_name ?? null;
};

/**
 * mapGoogleAddress - given a google address object, map it to a structured address object
 * @param {Object} place - google place object
 * @returns { address: Object, isComplete: boolean} mapped address object and boolean indicating if the address is complete
 */
const mapGoogleAddress = (place) => {
  const { address_components: addressComponents, geometry } = place;

  if (!addressComponents || addressComponents.length < 1) return {}; // TODO: not convinced we should return an empty object here

  const AUTOCOMPLETE_COMPONENT_MATRIX = [
    { type: 'street_number', target: 'streetNumber' },
    { type: 'route', target: 'route' },
    { type: 'sublocality', target: 'neighborhood' },
    { type: 'locality', target: 'city' },
    { type: 'postal_code', target: 'postalCode' },
    { type: 'administrative_area_level_1', target: 'state' },
  ];

  const getAddressSubValue = getAddressComponentByType(addressComponents);

  const subValues = AUTOCOMPLETE_COMPONENT_MATRIX.reduce((acc, component) => {
    acc[component.target] = getAddressSubValue(component.type);
    return acc;
  }, {});


  const coords = { lat: '', lng: '' };
  if (geometry) {
    coords.lat = geometry.location.lat();
    coords.lng = geometry.location.lng();
  }

  const res = {
    street: `${subValues.streetNumber ?? ''} ${subValues.route ?? ''}`.trim(),
    neighborhood: subValues.neighborhood,
    city: subValues.city,
    postalCode: subValues.postalCode,
    state: subValues.state,
    ...coords,
  };

  return { address: res, isComplete: isCompleteGoogleAddress(subValues) };
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
    const { address, isComplete } = mapGoogleAddress(place);

    // Route to the correct view
    if (isComplete) {
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
