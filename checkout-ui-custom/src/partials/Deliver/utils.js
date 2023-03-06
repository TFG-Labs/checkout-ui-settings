import { RICA_APP, TV_APP } from '../../utils/const';
import { getSpecialCategories, hideBusinessName, showBusinessName } from '../../utils/functions';
import { getBestPhoneNumber } from '../../utils/phoneFields';
import { getOrderFormCustomData } from '../../utils/services';
import { requiredAddressFields, requiredRicaFields, requiredTVFields } from './constants';
import { DeliveryError } from './DeliveryError';
import { Alert } from './Elements/Alert';

export const setDeliveryLoading = () => {
  document.querySelector('.bash--delivery-container').classList.add('shimmer');
};

export const setPickupLoading = () => {
  document.querySelector('.delivery-group-content')?.classList?.add('shimmer');
  document.querySelector('.vtex-omnishipping-1-x-ask')?.classList?.add('shimmer');
};

export const mapGoogleAddress = (addressComponents, geometry) => {
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

const provinceShortCode = (province) => {
  switch (province) {
    case 'Select':
      return '';
    case 'Western Cape':
      return 'WC';
    case 'Easter Cape':
      return 'EC';
    case 'Gauteng':
      return 'GP';
    case 'KwaZulu-Natal':
    case 'KwaZulu Natal':
      return 'KZN';
    case 'Northern Cape':
      return 'NC';
    case 'Limpopo':
      return 'LP';
    case 'Mpumalanga':
      return 'MP';
    case 'North West':
      return 'NW';
    case 'Freestate':
    case 'Free State':
      return 'FS';
    default:
      return province;
  }
};

export const getBestRecipient = ({ preferred = undefined, type = 'delivery' }) => {
  const firstName = window?.vtexjs?.checkout?.orderForm?.clientProfileData?.firstName;
  const lastName = window?.vtexjs?.checkout?.orderForm?.clientProfileData?.lastName;
  const shippingReceiverName = window?.vtexjs?.checkout?.orderForm?.shippingData?.address?.receiverName;
  const clientProfileName = `${firstName ?? ''} ${lastName ?? ''}`.trim();

  if (type === 'collect') return preferred || shippingReceiverName || clientProfileName || '';

  return preferred || document.getElementById('client-first-name')?.value || clientProfileName || '';
};

const populateAddressFromSearch = (address) => {
  const { street, neighborhood, postalCode, state, city } = address;

  // Clear any populated fields
  document.getElementById('bash--address-form').reset();

  // Clear hidden ID fields to prevent overwriting existing.
  document.getElementById('bash--input-addressId').value = '';
  document.getElementById('bash--input-addressName').value = '';

  document.getElementById('bash--input-number').value = '  ';
  document.getElementById('bash--input-street').value = street ?? '';
  document.getElementById('bash--input-neighborhood').value = neighborhood ?? '';
  document.getElementById('bash--input-city').value = city ?? '';
  document.getElementById('bash--input-postalCode').value = postalCode ?? '';
  document.getElementById('bash--input-state').value = provinceShortCode(state);
};

export const populateAddressForm = (address) => {
  const {
    number,
    street,
    addressType,
    businessName,
    companyBuilding,
    neighborhood,
    postalCode,
    state,
    city,
    receiverName,
    receiverPhone,
    complement,
    id,
    addressId,
    addressName,
  } = address;

  // Clear any populated fields
  document.getElementById('bash--address-form').reset();
  hideBusinessName();

  // addressId indicates that address is being edited / completed.
  if (id || addressId) document.getElementById('bash--input-addressId').value = id || addressId; // TODO remove this?
  if (addressName) document.getElementById('bash--input-addressName').value = addressName;

  const streetLine = `${number ? `${number} ` : ''}${street}`.replace(`, ${companyBuilding}`, '');

  // Address type
  if (addressType === 'commercial') {
    $('#radio-addressType-business').click();
    showBusinessName({ focus: false });
  }

  if (businessName) document.getElementById('bash--input-businessName').value = businessName;

  document.getElementById('bash--input-number').value = '';
  document.getElementById('bash--input-street').value = streetLine || '';
  document.getElementById('bash--input-companyBuilding').value = companyBuilding || '';
  document.getElementById('bash--input-neighborhood').value = neighborhood || '';
  document.getElementById('bash--input-city').value = city || '';
  document.getElementById('bash--input-postalCode').value = postalCode || '';
  document.getElementById('bash--input-state').value = provinceShortCode(state);

  // Only overwrite defaults if values exist.
  if (receiverName) document.getElementById('bash--input-receiverName').value = receiverName ?? '';
  if (complement) document.getElementById('bash--input-complement').value = complement ?? '';
  document
    .getElementById('#bash--input-receiverPhone')
    .value = getBestPhoneNumber({ preferred: receiverPhone, type: 'delivery' });

  $(':invalid').trigger('change');
};

export const initGoogleAutocomplete = () => {
  if (!window.google) return;

  const input = document.getElementById('bash--input-address-search');
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
};

export const parseAttribute = (data) => JSON.parse(decodeURIComponent(data));

export const populateExtraFields = (address, fields, prefix = '', override = false) => {
  if (!address) return;
  for (let i = 0; i < fields.length; i++) {
    const fieldId = `bash--input-${prefix}${fields[i]}`;
    if (
      document.getElementById(fieldId)
      && (address[fields[i]] || override)
      && (!document.getElementById(fieldId).value || override)
    ) {
      document.getElementById(fieldId).value = address[fields[i]];
    }
  }
  $(':invalid').trigger('change');
};

export const populateRicaFields = () => {
  const { address } = window.vtexjs.checkout.orderForm.shippingData;

  if (document.getElementById('bash--input-rica_streetAddress')?.value || !address) return;

  address.fullName = getBestRecipient({ type: 'delivery' });
  address.streetAddress = address.street;
  address.suburb = address.neighborhood;
  address.province = address.state;
  populateExtraFields(address, requiredRicaFields, 'rica_');

  const data = getOrderFormCustomData(RICA_APP);
  if (data.streetAddress) populateExtraFields(data, requiredRicaFields, 'rica_', true);
};

export const clearRicaFields = () => {
  const idOrPassport = $('#bash--input-rica_idOrPassport').val();
  const clearedRica = {
    idOrPassport: idOrPassport ?? '', // TODO populate with users ID
    fullName: '',
    streetAddress: '',
    suburb: '',
    city: '',
    postalCode: '',
    province: '',
  };
  populateExtraFields(clearedRica, requiredRicaFields, 'rica_', true);
};

export const populateTVFields = async () => {
  const data = getOrderFormCustomData(TV_APP);
  populateExtraFields(data, requiredTVFields, 'tv');
};

// Runs when you setAddress
export const addressIsValid = (address, validateExtraFields = true) => {
  const { items } = window.vtexjs.checkout.orderForm;
  const { hasTVs, hasSimCards } = getSpecialCategories(items);

  let requiredFields = [];
  const invalidFields = [];

  requiredFields = [...requiredAddressFields];

  if (hasTVs && validateExtraFields) {
    requiredFields = [...requiredFields, ...requiredTVFields];
  }

  if (hasSimCards && validateExtraFields) {
    requiredFields = [...requiredFields, ...requiredRicaFields];
  }

  for (let i = 0; i < requiredFields.length; i++) {
    if (!address[requiredFields[i]]) invalidFields.push(requiredFields[i]);
  }

  return { isValid: !invalidFields.length, invalidFields };
};

export const setCartClasses = () => {
  const { items } = window.vtexjs.checkout.orderForm;
  const { hasTVs, hasSimCards, hasFurnitureMixed } = getSpecialCategories(items);

  const $container = '#shipping-data';

  if (hasTVs) {
    $(`${$container}:not(.has-tv)`).addClass('has-tv');
  } else {
    $(`${$container}.has-tv`).removeClass('has-tv');
  }

  if (hasSimCards) {
    $(`${$container}:not(.has-rica)`).addClass('has-rica');
  } else {
    $(`${$container}.has-rica`).removeClass('has-rica');
  }

  if (hasFurnitureMixed) {
    $(`${$container}:not(.has-furniture-mixed)`).addClass('has-furniture-mixed');
  } else {
    $(`${$container}.has-furniture-mixed`).removeClass('has-furniture-mixed');
  }
};

export const updateDeliveryFeeDisplay = () => {
  if (!window.vtexjs.checkout.orderForm.totalizers) return;

  const { value: shippingFee } = window.vtexjs.checkout.orderForm.totalizers.find((item) => item.id === 'Shipping') || {
    value: 5000,
  };

  let feeText = 'Free';

  if (shippingFee > 0) feeText = `R${(shippingFee / 100).toFixed(2).replace('.00', '')}`;

  if ($('#bash--delivery-fee').length > 0) {
    document.getElementById('bash--delivery-fee').innerHTML = feeText;
  }
};

export const customShippingDataIsValid = () => {
  const items = window.vtexjs.checkout.orderForm?.items;
  const { hasTVs, hasSimCards } = getSpecialCategories(items);

  let valid = true;

  if (hasTVs) {
    const data = getOrderFormCustomData(TV_APP);
    if (!data.tvID) valid = false;
  }

  if (hasSimCards) {
    const data = getOrderFormCustomData(RICA_APP);
    if (!data.idOrPassport || !data.streetAddress || !data.postalCode) valid = false;
  }

  return valid;
};

export const populateDeliveryError = (errors = []) => {
  if ($('#bash-delivery-error-container').length < 1) return;
  const errorsHtml = errors.length > 0 ? errors.map((error) => DeliveryError(error)) : '';
  $('#bash-delivery-error-container').html(errorsHtml);
  if (errors.length > 0) $('html, body').animate({ scrollTop: $('#bash-delivery-error-container').offset().top }, 400);
};

export const showAlertBox = () => {
  $('.alert-container').addClass('show');
  $('.alert-container').slideDown();
  const alertText = $('[data-view="address-form"]').length > 0 ? 'Address added' : 'Address updated';
  $('#bash-alert-container').html(Alert({ text: alertText }));
  // After 5 seconds, remove the element
  setTimeout(() => {
    $('.alert-container').slideUp();
  }, 5000);
};

// some presaved addresses still have a missing zero,
// this adds a zero to the phone number, if it's not there.
export const prependZero = (tel) => {
  if (!tel) return '';
  let phoneNumber = tel.replace(/\s/g, '');
  if (phoneNumber.length === 9 && phoneNumber[0] !== '0') {
    phoneNumber = `0${phoneNumber}`;
  }

  return phoneNumber;
};

// add spaces between 3rd and 6th digit
export const formatPhoneNumber = (value) => [value.slice(0, 3), value.slice(3, 6), value.slice(6)].join(' ');

/**
 * formattedPhoneNumber
 * Add spaces to help guide the user how the number should look.
 * Adds space after 3rd and 6th digits only.
 * xxx xxx xxxxxxxxx
 * @param value - string value
 * @returns string
 */
const formattedPhoneNumber = (value, isBackSpace) => {
  value = value.replace(/[^0-9+*#]+/g, '').trim();

  // Eg. 072 123 4567
  if (value[0] === '0') {
    if (value.length >= 6) {
      // 'xxx xxx *'
      const newValue = [value.slice(0, 3), value.slice(3, 6), value.slice(6)].join(' ');

      return isBackSpace ? newValue.trim() : newValue;
    }
    // 'xxx *'
    if (value.length >= 3) {
      const newValue = [value.slice(0, 3), value.slice(3)].join(' ');
      return isBackSpace ? newValue.trim() : newValue;
    }
    // Eg. 72 123 4567
  } else {
    if (value.length >= 5) {
      // 'xx xxx *'
      const newValue = [value.slice(0, 2), value.slice(2, 5), value.slice(5)].join(' ');
      return isBackSpace ? newValue.trim() : newValue;
    }
    // 'xx *'
    if (value.length >= 2) {
      const newValue = [value.slice(0, 2), value.slice(2)].join(' ');
      return isBackSpace ? newValue.trim() : newValue;
    }
  }

  if (isBackSpace) return value.trim();

  return value;
};

/**
 * preparePhoneField
 * When phone fields are loaded onto the DOM
 * Prepare them for proper display and validation.
 *
 * @param  input - string css selector to the element.
 */
export const preparePhoneField = (input) => {
  const phoneInput = document.querySelector(input);
  if (!phoneInput) return;
  phoneInput.setAttribute('maxlength', 12);
  phoneInput.value = formattedPhoneNumber(phoneInput.value);

  $(document).off('keyup', input); // preventbubble
  $(document).on('keyup', input, function (e) {
    const $phoneInput = $(this);
    const value = $phoneInput.val().replace(/[^0-9+*#]+/g, '');

    const isBackSpace = e.keyCode === 8;
    const displayValue = formattedPhoneNumber(value, isBackSpace);

    $phoneInput.parent('.text').removeClass('error');
    $phoneInput.parent('.text').find('span.error').hide();
    $phoneInput.val(displayValue);
  });
};

export default mapGoogleAddress;
