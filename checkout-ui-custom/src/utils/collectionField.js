import { isValidNumberBash } from './functions';

//FIELD IDENTIFIERS
export const PICKUP_RECEIVER = 'pickup-receiver';
export const CUSTOM_PICKUP_COMPLEMENT = 'custom-pickup-complement';

//CONSTANTS
export const COLLECTION_VALIDATION_ERROR = 'COLLECTION_VALIDATION_ERROR';

/**
 * Determines if a field is valid or not
 */
export const isValidField = (field) => {
  let isValid = true;
  switch (field) {
    case PICKUP_RECEIVER:
      isValid = !($(`#${field}`).length > 0 && !$(`#${field}`).attr('disabled') && !$(`#${field}`).val());
      break;
    case CUSTOM_PICKUP_COMPLEMENT:
      isValid = isValidNumberBash($(`#${field}`).val());
      break;
    default:
      break;
  }

  return isValid;
};

/**
 * For a given field return is parent element
 */
export const getParentElement = (field) => {
  let parent;
  switch (field) {
    case PICKUP_RECEIVER:
      parent = '.shp-pickup-receiver';
      break;
    case CUSTOM_PICKUP_COMPLEMENT:
      parent = '#box-pickup-complement';
      break;
    default:
      break;
  }

  return parent;
};
