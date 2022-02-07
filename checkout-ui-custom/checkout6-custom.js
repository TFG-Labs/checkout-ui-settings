/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/checkout6-custom.scss":
/*!***********************************!*\
  !*** ./src/checkout6-custom.scss ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"checkout6-custom.css\";\n\n//# sourceURL=webpack://custom-shipping-step-by-items/./src/checkout6-custom.scss?");

/***/ }),

/***/ "./src/checkout6-custom.js":
/*!*********************************!*\
  !*** ./src/checkout6-custom.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller_CartController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller/CartController */ \"./src/controller/CartController.js\");\n/* harmony import */ var _controller_ViewController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller/ViewController */ \"./src/controller/ViewController.js\");\n/* harmony import */ var _controller_FormController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller/FormController */ \"./src/controller/FormController.js\");\n\r\n\r\n\r\n\r\n_controller_CartController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\r\n_controller_ViewController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\r\n_controller_FormController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init();\r\n\n\n//# sourceURL=webpack://custom-shipping-step-by-items/./src/checkout6-custom.js?");

/***/ }),

/***/ "./src/controller/CartController.js":
/*!******************************************!*\
  !*** ./src/controller/CartController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/const */ \"./src/utils/const.js\");\n/* eslint-disable no-undef */\r\n\r\n\r\nconst CartController = (() => {\r\n  const state = {\r\n    categories: {}\r\n  };\r\n\r\n  const getCategories = (items) => {\r\n    const categories = {};\r\n\r\n    items.forEach((item) => {\r\n      Object.assign(categories, item.productCategories);\r\n    });\r\n\r\n    return categories;\r\n  };\r\n\r\n  const runCustomization = () => {\r\n    if (window.location.hash === _utils_const__WEBPACK_IMPORTED_MODULE_0__.STEPS.SHIPPING) {\r\n      setTimeout(() => {\r\n        if (vtexjs.checkout.orderForm) {\r\n          const { items } = vtexjs.checkout.orderForm;\r\n          state.categories = {\r\n            ...getCategories(items)\r\n          };\r\n        }\r\n      }, _utils_const__WEBPACK_IMPORTED_MODULE_0__.ORDERFORM_TIMEOUT);\r\n    }\r\n  };\r\n\r\n  // EVENTS SUBSCRIPTION\r\n  $(document).ready(() => {\r\n    runCustomization();\r\n  });\r\n\r\n  $(window).on('hashchange orderFormUpdated.vtex', () => {\r\n    runCustomization();\r\n  });\r\n\r\n  const publicInit = () => {\r\n    window.CartController = undefined;\r\n  };\r\n\r\n  return {\r\n    init: publicInit,\r\n    state\r\n  };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartController);\r\n\n\n//# sourceURL=webpack://custom-shipping-step-by-items/./src/controller/CartController.js?");

/***/ }),

/***/ "./src/controller/FormController.js":
/*!******************************************!*\
  !*** ./src/controller/FormController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/const */ \"./src/utils/const.js\");\n/* harmony import */ var _ViewController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewController */ \"./src/controller/ViewController.js\");\n/* eslint-disable func-names */\r\n\r\n\r\n\r\nconst FormController = (() => {\r\n  const state = {\r\n    validForm: true\r\n  };\r\n\r\n  const checkNativeForm = () => {\r\n    const nativeFields = [\r\n      'ship-street',\r\n      'ship-city',\r\n      'ship-state',\r\n      'ship-receiverName'\r\n    ];\r\n\r\n    nativeFields.forEach((field) => {\r\n      if ($(`#${field}`).length > 0 && !$(`#${field}`).val()) {\r\n        $(`#${field}`).addClass('error');\r\n        state.validForm = false;\r\n      } else {\r\n        $(`#${field}`).removeClass('error');\r\n      }\r\n    });\r\n  };\r\n\r\n  const checkFurnitureForm = () => {\r\n    const furnitureFields = [\r\n      'tfg-building-type',\r\n      'tfg-parking-distance',\r\n      'tfg-delivery-floor',\r\n      'tfg-lift-stairs'\r\n    ];\r\n\r\n    furnitureFields.forEach((field) => {\r\n      if ($(`#${field}`).length > 0 && !$(`#${field}`).attr('disabled') && !$(`#${field}`).val()) {\r\n        $(`#${field}`).addClass('error');\r\n        state.validForm = false;\r\n      } else {\r\n        $(`#${field}`).removeClass('error');\r\n      }\r\n    });\r\n  };\r\n\r\n  const checkFields = () => {\r\n    const { showFurnitureForm, showTVIDForm } = _ViewController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].state;\r\n\r\n    // Reset state\r\n    state.validForm = true;\r\n\r\n    checkNativeForm();\r\n\r\n    if (showFurnitureForm) {\r\n      checkFurnitureForm();\r\n    }\r\n\r\n    if (showTVIDForm) {\r\n      // TODO  checkTVIDForm();\r\n    }\r\n  };\r\n\r\n  const checkoutSendCustomData = (appId, customData) => {\r\n    const { orderFormId } = vtexjs.checkout.orderForm;\r\n\r\n    return $.ajax({\r\n      type: 'PUT',\r\n      url:\r\n        `/api/checkout/pub/orderForm/${orderFormId}/customData/${appId}`,\r\n      dataType: 'json',\r\n      contentType: 'application/json; charset=utf-8',\r\n      data: JSON.stringify(customData)\r\n    });\r\n  };\r\n\r\n  const saveFurnitureForm = () => {\r\n    const furnitureFields = {};\r\n\r\n    furnitureFields.buildingType = $('#tfg-building-type').val();\r\n    furnitureFields.parkingDistance = $('#tfg-parking-distance').val();\r\n    furnitureFields.deliveryFloor = $('#tfg-delivery-floor').val();\r\n    if (!$('#tfg-lift-stairs').attr('disabled')) {\r\n      furnitureFields.liftOrStairs = $('#tfg-lift-stairs').val();\r\n    }\r\n    furnitureFields.hasSufficientSpace = $('#tfg-sufficient-space').is(':checked');\r\n    furnitureFields.assembleFurniture = $('#tfg-assemble-furniture').is(':checked');\r\n\r\n    checkoutSendCustomData(_utils_const__WEBPACK_IMPORTED_MODULE_0__.CUSTOM_FIELDS_APP, furnitureFields);\r\n  };\r\n\r\n  function saveShippingAddress() {\r\n    $('#btn-go-to-payment').trigger('click');\r\n  }\r\n\r\n  const checkShippingFields = () => {\r\n    const { showFurnitureForm, showTVIDForm } = _ViewController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].state;\r\n\r\n    checkFields();\r\n\r\n    if (state.validForm) {\r\n      if (showFurnitureForm) {\r\n        saveFurnitureForm();\r\n      }\r\n\r\n      if (showTVIDForm) {\r\n        // TODO GUARDADO TVID\r\n      }\r\n\r\n      saveShippingAddress();\r\n    }\r\n  };\r\n\r\n  const addCustomBtnPayment = () => {\r\n    if ($('#custom-go-to-payment').length <= 0) {\r\n      const nativePaymentBtn = $('#btn-go-to-payment');\r\n      const customPaymentBtn = nativePaymentBtn.clone(false);\r\n\r\n      $(nativePaymentBtn).hide();\r\n      $(customPaymentBtn).data('bind', '');\r\n      $(customPaymentBtn).removeAttr('id').attr('id', 'custom-go-to-payment');\r\n      $(customPaymentBtn).removeAttr('data-bind');\r\n      $(customPaymentBtn).css('display', 'block');\r\n\r\n      $('p.btn-go-to-payment-wrapper').append(customPaymentBtn);\r\n      $(customPaymentBtn).on('click', checkShippingFields);\r\n    }\r\n  };\r\n\r\n  const getCustomShippingInfo = () => {\r\n    const { customData } = vtexjs.checkout.orderForm;\r\n    let fields = {};\r\n\r\n    if (customData && customData.customApps && customData.customApps.length > 0) {\r\n      customData.customApps.forEach((app) => {\r\n        if (app.id === _utils_const__WEBPACK_IMPORTED_MODULE_0__.CUSTOM_FIELDS_APP) {\r\n          fields = app.fields;\r\n        }\r\n      });\r\n    }\r\n\r\n    return fields;\r\n  };\r\n\r\n  const setValues = () => {\r\n    setTimeout(() => {\r\n      if (vtexjs.checkout.orderForm) {\r\n        const { showFurnitureForm, showTVIDForm } = _ViewController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].state;\r\n        const customShippingInfo = getCustomShippingInfo();\r\n\r\n        if (customShippingInfo) {\r\n          if (showFurnitureForm) {\r\n            $('#tfg-building-type').val(customShippingInfo.buildingType);\r\n            $('#tfg-parking-distance').val(customShippingInfo.parkingDistance);\r\n            $('#tfg-delivery-floor').val(customShippingInfo.deliveryFloor);\r\n            if ($('#tfg-delivery-floor').val() === 'Ground') {\r\n              $('#tfg-lift-stairs').attr('disabled', 'disabled');\r\n            } else {\r\n              $('#tfg-lift-stairs').val(customShippingInfo.liftOrStairs);\r\n            }\r\n            $('#tfg-sufficient-space').prop('checked', (customShippingInfo.hasSufficientSpace === 'true'));\r\n            $('#tfg-assemble-furniture').prop('checked', (customShippingInfo.assembleFurniture === 'true'));\r\n          }\r\n\r\n          if (showTVIDForm) {\r\n            // TODO:set tvid field\r\n          }\r\n        }\r\n      }\r\n    }, _utils_const__WEBPACK_IMPORTED_MODULE_0__.ORDERFORM_TIMEOUT);\r\n  };\r\n\r\n  const runCustomization = () => {\r\n    if (window.location.hash === _utils_const__WEBPACK_IMPORTED_MODULE_0__.STEPS.SHIPPING) {\r\n      // addEventBtnShipping();\r\n      addCustomBtnPayment();\r\n      setValues();\r\n    }\r\n  };\r\n\r\n  // INPUT EVENT SUBSCRIPTION\r\n  $(document).on('change', '.vtex-omnishipping-1-x-deliveryGroup #tfg-delivery-floor', function () {\r\n    if ($(this).val() === 'Ground') {\r\n      $('#tfg-lift-stairs').attr('disabled', 'disabled');\r\n      if ($('#tfg-lift-stairs').hasClass('error')) {\r\n        $('#tfg-lift-stairs').removeClass('error');\r\n      }\r\n    } else {\r\n      $('#tfg-lift-stairs').removeAttr('disabled');\r\n    }\r\n  });\r\n\r\n  $(document).on('change', '.vtex-omnishipping-1-x-deliveryGroup .tfg-custom-selector', function () {\r\n    if ($(this).val()) {\r\n      $(this).removeClass('error');\r\n      $(this).addClass('tfg-input-completed');\r\n    } else {\r\n      $(this).removeClass('tfg-input-completed');\r\n    }\r\n  });\r\n\r\n  // EVENTS SUBSCRIPTION\r\n  $(document).ready(() => {\r\n    runCustomization();\r\n  });\r\n\r\n  $(window).on('hashchange', () => {\r\n    runCustomization();\r\n  });\r\n\r\n  $(window).on('orderFormUpdated.vtex', () => {\r\n    if (window.location.hash === _utils_const__WEBPACK_IMPORTED_MODULE_0__.STEPS.SHIPPING) {\r\n      setValues();\r\n    }\r\n  });\r\n\r\n  const publicInit = () => {\r\n    window.FormController = undefined;\r\n  };\r\n\r\n  return {\r\n    init: publicInit,\r\n    state\r\n  };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormController);\r\n\n\n//# sourceURL=webpack://custom-shipping-step-by-items/./src/controller/FormController.js?");

/***/ }),

/***/ "./src/controller/ViewController.js":
/*!******************************************!*\
  !*** ./src/controller/ViewController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/const */ \"./src/utils/const.js\");\n/* harmony import */ var _templates_FurnitureForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/FurnitureForm */ \"./src/templates/FurnitureForm.js\");\n/* harmony import */ var _CartController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CartController */ \"./src/controller/CartController.js\");\n\r\n\r\n\r\n\r\nconst ViewController = (() => {\r\n  const state = {\r\n    showFurnitureForm: false,\r\n    showTVIDForm: false,\r\n    showTVIDMsg: false,\r\n    showRICAMsg: false,\r\n    showMixedCategoriesMsg: false\r\n  };\r\n\r\n  const config = {\r\n    furnitureId: '0',\r\n    tvId: '0',\r\n    simCardId: '0',\r\n    furnitureForm: {\r\n      buildingType: ['Free standing', 'House in complex', 'Townhouse', 'Apartment'],\r\n      parkingDistance: [15, 25, 50, 100],\r\n      deliveryFloor: ['Ground', '1', '2', '3+'],\r\n      liftStairs: ['Lift', 'Stairs']\r\n    },\r\n    RICAMsg: 'You can\\'t collect this order in store because your cart contains items which '\r\n      + 'require either RICA or TV License validation.',\r\n    MixedProductsMsg: 'We\\'ll ship your furniture and other items in your cart to the selected address. '\r\n      + 'Only the furniture delivery fee will apply.'\r\n  };\r\n\r\n  const restartState = () => {\r\n    state.showFurnitureForm = false;\r\n    state.showTVIDForm = false;\r\n    state.showTVIDMsg = false;\r\n    state.showRICAMsg = false;\r\n    state.showMixedCategoriesMsg = false;\r\n  };\r\n\r\n  const checkCartCategories = () => {\r\n    const { categories } = _CartController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state;\r\n    const allCategoriesIds = Object.keys(categories);\r\n\r\n    state.showFurnitureForm = allCategoriesIds.includes(config.furnitureId);\r\n    state.showTVIDForm = allCategoriesIds.includes(config.tvId);\r\n    state.showTVIDMsg = state.showTVIDForm;\r\n    state.showRICAMsg = allCategoriesIds.includes(config.simCardId);\r\n    state.showMixedCategoriesMsg = (\r\n      allCategoriesIds.includes(config.furnitureId)\r\n      && !allCategoriesIds.every((value) => value === config.furnitureId)\r\n    );\r\n  };\r\n\r\n  const showCustomSections = () => {\r\n    const furnitureStepExists = ($('#tfg-custom-furniture-step').length > 0);\r\n\r\n    if (state.showFurnitureForm && !furnitureStepExists) {\r\n      $('.vtex-omnishipping-1-x-deliveryGroup').prepend((0,_templates_FurnitureForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(config.furnitureForm));\r\n    }\r\n  };\r\n\r\n  const runCustomization = () => {\r\n    if (window.location.hash === _utils_const__WEBPACK_IMPORTED_MODULE_0__.STEPS.SHIPPING) {\r\n      restartState();\r\n\r\n      setTimeout(() => {\r\n        checkCartCategories();\r\n        showCustomSections();\r\n      }, _utils_const__WEBPACK_IMPORTED_MODULE_0__.ORDERFORM_TIMEOUT);\r\n    }\r\n  };\r\n\r\n  // EVENTS SUBSCRIPTION\r\n  $(document).ready(() => {\r\n    if (typeof (setAppConfiguration) !== 'undefined' && window.location.hash === _utils_const__WEBPACK_IMPORTED_MODULE_0__.STEPS.SHIPPING) {\r\n      // eslint-disable-next-line no-undef\r\n      setAppConfiguration(config);\r\n    }\r\n\r\n    runCustomization();\r\n  });\r\n\r\n  $(window).on('hashchange orderFormUpdated.vtex', () => {\r\n    runCustomization();\r\n  });\r\n\r\n  const publicInit = () => {\r\n    window.ViewController = undefined;\r\n  };\r\n\r\n  return {\r\n    init: publicInit,\r\n    state\r\n  };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewController);\r\n\n\n//# sourceURL=webpack://custom-shipping-step-by-items/./src/controller/ViewController.js?");

/***/ }),

/***/ "./src/templates/FurnitureForm.js":
/*!****************************************!*\
  !*** ./src/templates/FurnitureForm.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst FurnitureForm = ({ buildingType, parkingDistance, deliveryFloor, liftStairs }) => {\r\n  // Building type selector\r\n  let buildingTypeInput = `\r\n    <p class=\"tfg-custom-input\">\r\n      <label>Building type</label>\r\n      <select class=\"input-xlarge tfg-custom-selector\" id=\"tfg-building-type\">\r\n        <option disabled selected value=\"\">Please select</option>\r\n    `;\r\n\r\n  buildingType.forEach((value) => {\r\n    buildingTypeInput += `<option value=\"${value}\">${value}</option>`;\r\n  });\r\n\r\n  buildingTypeInput += `\r\n      </select>\r\n    </p>\r\n    `;\r\n\r\n  // Parking selector\r\n  let parkingDistanceInput = `\r\n  <p class=\"tfg-custom-input\">\r\n    <label>Distance to parking</label>\r\n    <select class=\"input-xlarge tfg-custom-selector\" id=\"tfg-parking-distance\">\r\n      <option disabled selected value=\"\">Please select</option>\r\n  `;\r\n\r\n  parkingDistance.forEach((value) => {\r\n    parkingDistanceInput += `<option value=\"${value}\">${value}</option>`;\r\n  });\r\n\r\n  parkingDistanceInput += `\r\n    </select>\r\n  </p>\r\n  `;\r\n\r\n  // Delivery floor selector\r\n  let deliveryFloorInput = `\r\n  <p class=\"tfg-custom-input\">\r\n    <label>Delivery floor</label>\r\n    <select class=\"input-xlarge tfg-custom-selector\" id=\"tfg-delivery-floor\">\r\n      <option disabled selected value=\"\">Please select</option>\r\n  `;\r\n\r\n  deliveryFloor.forEach((value) => {\r\n    deliveryFloorInput += `<option value=\"${value}\">${value}</option>`;\r\n  });\r\n\r\n  deliveryFloorInput += `\r\n    </select>\r\n  </p>\r\n  `;\r\n\r\n  // Lift/Stairs selector\r\n  let liftStairsInput = `\r\n  <p class=\"tfg-custom-input\">\r\n    <label>Lift or staris</label>\r\n    <select class=\"input-xlarge tfg-custom-selector\" id=\"tfg-lift-stairs\">\r\n      <option disabled selected value=\"\">Please select</option>\r\n  `;\r\n\r\n  liftStairs.forEach((value) => {\r\n    liftStairsInput += `<option value=\"${value}\">${value}</option>`;\r\n  });\r\n\r\n  liftStairsInput += `\r\n    </select>\r\n  </p>\r\n  `;\r\n\r\n  // Complete Form\r\n  return `\r\n    <div id=\"tfg-custom-furniture-step\">\r\n      <p class=\"tfg-custom-title\">Furniture information needed</p>\r\n      <p class=\"tfg-custom-subtitle\">\r\n        We need some more information to prepare delivery of your furniture items to your address.\r\n      </p>\r\n      ${buildingTypeInput}\r\n      ${parkingDistanceInput}\r\n      ${deliveryFloorInput}\r\n      ${liftStairsInput}\r\n      <p class=\"tfg-custom-checkbox\">\r\n        <label class=\"tfg-checkbox-label\">\r\n          <input type='checkbox' id=\"tfg-sufficient-space\"/>\r\n          <span class=\"tfg-checkbox-text\">Is there sufficent corner/passage door space?</span>\r\n        </label>\r\n      </p>\r\n      <p class=\"tfg-custom-checkbox\">\r\n        <label class=\"tfg-checkbox-label\">\r\n          <input type='checkbox' id=\"tfg-assemble-furniture\"/>\r\n          <span class=\"tfg-checkbox-text\">Would you like us to assemble your furniture items?</span>\r\n        </label>\r\n      </p>\r\n    </div>\r\n  `;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FurnitureForm);\r\n\n\n//# sourceURL=webpack://custom-shipping-step-by-items/./src/templates/FurnitureForm.js?");

/***/ }),

/***/ "./src/utils/const.js":
/*!****************************!*\
  !*** ./src/utils/const.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"STEPS\": () => (/* binding */ STEPS),\n/* harmony export */   \"ORDERFORM_TIMEOUT\": () => (/* binding */ ORDERFORM_TIMEOUT),\n/* harmony export */   \"CUSTOM_FIELDS_APP\": () => (/* binding */ CUSTOM_FIELDS_APP)\n/* harmony export */ });\n// Checkout steps\r\nconst STEPS = {\r\n  CART: '#/cart',\r\n  PROFILE: '#/profile',\r\n  SHIPPING: '#/shipping',\r\n  PAYMENT: '#/payment'\r\n};\r\n\r\n// OrderForm timeout\r\nconst ORDERFORM_TIMEOUT = 500;\r\n\r\n// OrderForm configuration app-name\r\nconst CUSTOM_FIELDS_APP = 'customshippinginfo';\r\n\r\n\r\n\n\n//# sourceURL=webpack://custom-shipping-step-by-items/./src/utils/const.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/checkout6-custom.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/checkout6-custom.scss");
/******/ 	
/******/ })()
;