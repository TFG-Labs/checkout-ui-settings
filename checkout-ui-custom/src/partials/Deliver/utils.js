// @ts-nocheck
import {
  AD_TYPE,
  COLLECT_FEE,
  DELIVERY_FEE,
  FREE_SHIPPING_THRESHOLD,
  PICKUP,
  RICA_APP,
  TV_APP,
} from '../../utils/const';
import { getSpecialCategories, hideBusinessName, isValidNumberBash, showBusinessName } from '../../utils/functions';
import isInSouthAfrica from '../../utils/isInSouthAfrica';
import { getBestPhoneNumber } from '../../utils/phoneFields';
import { getOrderFormCustomData } from '../../utils/services';
import { DeliveryError } from './DeliveryError';
import { Alert } from './Elements/Alert';
import { requiredAddressFields, requiredRicaFields, requiredTVFields } from './constants';
import usePhoneNumberFormatting from '../../utils/phoneNumberFormat';

const { formatPhoneNumber, isValidNumber } = usePhoneNumberFormatting();

export const setDeliveryLoading = () => {
  document.querySelector('.bash--delivery-container')?.classList.add('shimmer');
};

export const setPickupLoading = () => {
  document.querySelector('.delivery-group-content')?.classList?.add('shimmer');
  document.querySelector('.vtex-omnishipping-1-x-ask')?.classList?.add('shimmer');
};

export const mapGoogleAddress = (addressComponents, geometry) => {
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

export const provinceShortCode = (province) => {
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
    geoCoordinate,
  } = address;

  // Clear any populated fields
  document.getElementById('bash--address-form')?.reset();
  hideBusinessName();
  let lat;
  let lng;
  try {
    [lng, lat] = JSON.parse(JSON.stringify(geoCoordinate));

    if (!isInSouthAfrica([lng, lat])) {
      // Coordinates are most likely still at [lat, lng]
      if (isInSouthAfrica[(lat, lng)]) {
        lng = lat;
        lat = lng;
      } else {
        // Unset the coordinates
        lng = 0;
        lat = 0;
      }
    }
  } catch (e) {
    console.warn('Could not parse geo coords', { address, geoCoordinate });
  }

  // Only overwrite defaults if values exist.
  if (receiverName) document.getElementById('bash--input-receiverName').value = receiverName ?? '';
  if (complement) document.getElementById('bash--input-complement').value = complement ?? '';

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
  document.getElementById('bash--input-lat').value = lat || '';
  document.getElementById('bash--input-lng').value = lng || '';

  const fields = getOrderFormCustomData(PICKUP);

  // Only overwrite defaults if values exist.
  if (receiverName) document.getElementById('bash--input-receiverName').value = receiverName ?? '';
  if (complement) document.getElementById('bash--input-complement').value = complement ?? '';
  document.getElementById('bash--input-receiverPhone').value =
    formatPhoneNumber(receiverPhone).trim() ||
    getBestPhoneNumber({
      preferred: receiverPhone,
      type: 'delivery',
      fields,
    });
  document.getElementById('bash--input-receiverPhone')?.addEventListener('onblur', (event) => {
    event.target.value = event.target.value.trim();
  });

  $(':invalid').trigger('change');
};

export const parseAttribute = (data) => {
  try {
    return JSON.parse(decodeURIComponent(data));
  } catch (e) {
    return undefined;
  }
};

export const populateExtraFields = (address, fields, prefix = '', override = false) => {
  if (!address) return;
  for (let i = 0; i < fields.length; i++) {
    const fieldId = `bash--input-${prefix}${fields[i]}`;
    if (
      document.getElementById(fieldId) &&
      (address[fields[i]] || override) &&
      (!document.getElementById(fieldId).value || override)
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

  let requiredFields = requiredAddressFields;
  const invalidFields = [];

  if (hasTVs && validateExtraFields) {
    requiredFields = [...requiredFields, ...requiredTVFields];
  }

  if (hasSimCards && validateExtraFields) {
    requiredFields = [...requiredFields, ...requiredRicaFields];
  }

  for (let i = 0; i < requiredFields.length; i++) {
    if (!address[requiredFields[i]]) invalidFields.push(requiredFields[i]);
  }

  if (
    requiredFields.includes('receiverPhone') &&
    !invalidFields.includes('receiverPhone') &&
    !isValidNumber(formatPhoneNumber(address.receiverPhone, 'ZA'), 'ZA')
  ) {
    invalidFields.push('receiverPhone');
    $('#bash--input-receiverPhone').addClass('invalid');
    $('#bash--label-receiverPhone').focus();
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
    value:
      window.vtexjs.checkout.orderForm?.shippingData?.address?.addressType === AD_TYPE.PICKUP
        ? COLLECT_FEE
        : DELIVERY_FEE,
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

export const showAlertBox = (alertText = 'Address saved') => {
  $('.alert-container').addClass('show');
  $('.alert-container').slideDown();
  $('#bash-alert-container').html(Alert({ text: alertText }));
  // After 5 seconds, remove the element
  setTimeout(() => {
    $('.alert-container').slideUp();
  }, 5000);
};

export default mapGoogleAddress;
