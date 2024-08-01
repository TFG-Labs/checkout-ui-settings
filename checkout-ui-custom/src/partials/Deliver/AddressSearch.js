import FormField from './Elements/FormField';
import { mapGoogleAddress, provinceShortCode } from './utils';

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

const initGoogleAutocomplete = () => {
  if (!window.google) return;

  const input = document.getElementById('bash--input-address-search');
  if (!input) return;
  const autocomplete = new window.google.maps.places.Autocomplete(input, {
    componentRestrictions: { country: 'ZA' },
  });

  window.google.maps.event.addListener(autocomplete, 'place_changed', () => {
    const place = autocomplete.getPlace();
    const { address_components: addressComponents, geometry } = place;

    const address = mapGoogleAddress(addressComponents, geometry);

    // Populate the form
    // Set view to add-address
    populateAddressFromSearch(address);
    window.postMessage({ action: 'setDeliveryView', view: 'address-form' });
    input.value = '';
  });

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
