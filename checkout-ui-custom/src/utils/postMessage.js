import { COLLECTION_VALIDATION_ERROR, CUSTOM_PICKUP_COMPLEMENT, PICKUP_RECEIVER, isValidField } from './collectionField';


export const postMessage = (type, message) => {
  window.postMessage({type, message}, '*');
};

export const postCollectionValidationErrors = () => {
  [PICKUP_RECEIVER, CUSTOM_PICKUP_COMPLEMENT]
    .filter(isValidField)
    .forEach((field) => {
      postMessage(COLLECTION_VALIDATION_ERROR,`${field} is invalid`);
    });
};