/* eslint-disable camelcase */
export const EVENT_NAME = {
  ADDRESS_SAVED: 'address_saved', // TRIGGER: On succesful API call for address creation/update
  ADD_ADDRESS: 'add_address', // TRIGGER: On the initiation of the address flow i.e. we reached the view with the form to enter data
  ADD_ADDRESS_ERROR: 'add_address_error', // TRIGGER: On failure of API call for address creation/update, opposite call to address_saved
};

export const PARAMETER = {
  ADD_ADDRESS_STAGE: 'add_address_stage',
  DOCUMENT_ID: 'document_id',
  ADD_ADDRESS_CAPTURE_METHOD: 'add_address_capture_method',
  ADD_ADDRESS_METHOD: 'add_address_method',
};

export const ADD_ADDRESS_STAGE = {
  PROFILE: 'profile',
  CHECKOUT: 'checkout',
};

export const ADD_ADDRESS_CAPTURE_METHOD = {
  AUTO_COMPLETE_GOOGLE: 'auto_complete_google',
  MANUAL_ATTEMPTED_AUTO_COMPLETE_GOOGLE: 'manual_attempted_autocomplete_google',
  MANUAL_ENTRY: 'manual_entry',
};

export const ADD_ADDRESS_METHOD = {
  SEARCH_FOR_AN_ADDRESS: 'search_for_an_address',
  EDIT_ADDRESS: 'edit_address',
  ADD_ADDRESS_MANUALLY: 'add_address_manually',
};

/**
 * Tracks an address-related event and sends the relevant data for analytics purposes.
 *
 * @param {Object} params - The parameters for the event tracking.
 * @param {EVENT_NAME[keyof typeof EVENT_NAME]} params.eventName - The name of the event to be tracked. Use one of the values from `EVENT_NAME` (e.g., `EVENT_NAME.ADDRESS_SAVED`).
 * @param {ADD_ADDRESS_STAGE[keyof typeof ADD_ADDRESS_STAGE]} params.add_address_stage - The stage of the address addition process. Use one of the values from `ADD_ADDRESS_STAGE` (e.g., `ADD_ADDRESS_STAGE.PROFILE`).
 * @param {ADD_ADDRESS_METHOD[keyof typeof ADD_ADDRESS_METHOD]} params.add_address_method - The initial view to add the address. Use one of the values from `ADD_ADDRESS_METHOD` (e.g., `ADD_ADDRESS_METHOD.SEARCH_FOR_AN_ADDRESS`).
 * @param {ADD_ADDRESS_CAPTURE_METHOD[keyof typeof ADD_ADDRESS_CAPTURE_METHOD]} params.add_address_capture_method - The method used to capture the address. Use one of the values from `ADD_ADDRESS_CAPTURE_METHOD` (e.g., `ADD_ADDRESS_CAPTURE_METHOD.AUTO_COMPLETE_GOOGLE`).
 * @param {string} params.document_id - The unique identifier for the document associated with the address.
 *
 * @returns {void}
 */
export const trackAddressEvent = ({
  eventName, // TODO should event name been like this
  add_address_stage,
  add_address_method,
  add_address_capture_method,
  document_id,
}) => {
  const payload = {
    eventName,
    add_address_stage,
    add_address_method,
    add_address_capture_method,
    document_id,
  };

  console.log('trackAddressEvent', payload);
  // TODO decide how to pipe to GTM
};
