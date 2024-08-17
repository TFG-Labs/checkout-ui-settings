export const EVENT_NAME = {
  ADDRESS_SAVED: 'address_saved',
  ADD_ADDRESS: 'add_address',
  ADD_ADDRESS_ERROR: 'add_address_error',
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

/// ////////////////////// ADDRESS ANALYTICS //////////////////////////

// 1.  EVENT NAME: address_saved
//     TRIGGER: On succesful API call for address creation/update //TODO on Address Update as well?
//     PARAMETERS:
//         - add_address_stage: profile | checkout
//         - document_id: customers id  - TODO: verify if GTM automatically tracks
//         - add_address_capture_method: auto_complete_google | manual_attempted_autocomplete_google | manual
//         - add_address_method: search_for_an_address | edit_address | add_address_manually
// TODO: how is there no reference to the address that was saved?
// TODO:  what is the difference between add_address_capture_method and add_address_method?

// 2.  EVENT NAME: add_address
//     TRIGGER: On the initiation of the address flow ie we reached the view with the form to enter data
//     PARAMETERS:
//         - add_address_stage: profile | checkout
//         - add_address_method: search_for_an_address | edit_address | add_address_manually
//         - add_address_capture_method: auto_complete_google | manual_attempted_autocomplete_google | manual_entry
//         - document_id: customers id  - TODO: verify if GTM automatically tracks
// TODO:  how can  add_address_capture_method be valid if this is only triggered on getting to the view

// 3.  EVENT NAME: add_address_error
//     TRIGGER: On failure of API call for address creation/update, opposite call to the existing address_saved
//     PARAMETERS:
//         - add_address_stage: profile | checkout
//         - add_address_method: search_for_an_address | edit_address | add_address_manually
//         - add_address_capture_method: auto_complete_google | manual_attempted_autocomplete_google | manual_entry
//         - document_id: customers id  - TODO: verify if GTM automatically tracks
