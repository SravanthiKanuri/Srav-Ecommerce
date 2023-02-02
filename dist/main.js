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

/***/ "./scripts/fav-btn.js":
/*!****************************!*\
  !*** ./scripts/fav-btn.js ***!
  \****************************/
/***/ (() => {

eval("function captureFavouriteButtonClick() {\r\n    const products$ = document.getElementById(\"products\");\r\n    const favouriteButton$ = products$.querySelectorAll(\".btn-favourite\");\r\n    favouriteButton$.forEach(function(btn$) {\r\n      btn$.addEventListener(\"click\", function(event) {\r\n        // alert(\"ok\")\r\n        const target = event.target;\r\n        const favouriteBtn$ = target.closest(\".btn-favourite\"); \r\n        const selectedId = favouriteBtn$.getAttribute(\"data-id\");\r\n        console.log(selectedId);\r\n        const selectedProductIndex = selectedProductIds.indexOf(selectedId);\r\n        const icon$ = btn$.querySelector(\".material-icons-outlined\");\r\n        if (selectedProductIndex != -1) { \r\n          //means product is already selected\r\n          selectedProductIds.splice(selectedProductIndex, 1);  \r\n          icon$.innerText = 'favorite_border'      \r\n        }\r\n        else {\r\n          // means product is not selected\r\n          selectedProductIds.push(selectedId);\r\n          icon$.innerText = 'favorite';\r\n        }\r\n        console.log(selectedProductIds)\r\n        const wishlistCounter$ = document.getElementById(\"wishlistCount\");\r\n        \r\n        \r\n        wishlistCounter$.innerText = selectedProductIds.length;\r\n      })\r\n    })\r\n  }\n\n//# sourceURL=webpack://training/./scripts/fav-btn.js?");

/***/ }),

/***/ "./scripts/home.js":
/*!*************************!*\
  !*** ./scripts/home.js ***!
  \*************************/
/***/ (() => {

eval("const products = [\r\n  {\r\n    id : 1,\r\n    title: \"Macbook\",\r\n    image:\r\n      \"https://demo.opencart.com/image/cache/catalog/demo/macbook_1-200x200.jpg\",\r\n    description:\r\n      \"Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..\",\r\n    price: 10800,\r\n  },\r\n  {\r\n    id : 2,\r\n    title: \"Iphone\",\r\n    image:\r\n      \"https://demo.opencart.com/image/cache/catalog/demo/iphone_1-200x200.jpg\",\r\n    description:\r\n      \"iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam..\",\r\n    price: 15000,\r\n  },\r\n  {\r\n    id : 3,\r\n    title: \"Apple cinema\",\r\n    image:\r\n      \"https://demo.opencart.com/image/cache/catalog/demo/apple_cinema_30-200x200.jpg\",\r\n    description:\r\n      \"The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..\",\r\n    price: 12000,\r\n  },\r\n  {\r\n    id : 4,\r\n    title: \"Epson\",\r\n    image:\r\n      \"https://demo.opencart.com/image/cache/catalog/demo/canon_eos_5d_1-200x200.jpg\",\r\n    description:\r\n      \"Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we'r..\",\r\n    price: 32000,\r\n  },\r\n]\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://training/./scripts/home.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./home */ \"./scripts/home.js\");\r\n__webpack_require__(/*! ./fav-btn */ \"./scripts/fav-btn.js\");\r\n__webpack_require__(/*! ./render */ \"./scripts/render.js\");\r\n__webpack_require__(/*! ./search */ \"./scripts/search.js\")\n\n//# sourceURL=webpack://training/./scripts/index.js?");

/***/ }),

/***/ "./scripts/render.js":
/*!***************************!*\
  !*** ./scripts/render.js ***!
  \***************************/
/***/ (() => {

eval("const selectedProductIds = [];\r\nconst productsElement = document.getElementById(\"products\");\r\nconst productsModified = products.map(function (product) {\r\n  product.priceModified = product.price.toFixed(2)\r\n  return product\r\n})\r\nrenderProductCards(productsModified)\r\n\r\nfunction renderProductCards(products) {\r\n  let productCards = \"\"\r\n\r\n  for (let i = 0; i < products.length; i++) {\r\n    productCards = productCards + renderProductCard(products[i])\r\n  }\r\n  productsElement.innerHTML = productCards;\r\n  captureFavouriteButtonClick();\r\n}\r\n\r\nfunction renderProductCard(product) {\r\n  return `<div class=\"col-12 col-md-4 col-lg-3\">\r\n    <div class=\"card\">\r\n      <img\r\n        src=\"${product.image}\"\r\n        class=\"card-img-top\"\r\n        alt=\"...\"\r\n      />\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">${product.title}</h5>\r\n        <p class=\"card-text\">\r\n         ${product.description}\r\n        </p>\r\n        <div>\r\n        <strong><span class=\"material-icons-outlined\">\r\n        currency_rupee\r\n        </span>${product.priceModified}</strong>\r\n        </div>\r\n        <div\r\n          class=\"btn-group w-100\"\r\n          role=\"group\"\r\n          aria-label=\"Basic example\"\r\n        >\r\n          <button type=\"button\" class=\"btn\">\r\n            <span class=\"material-icons-outlined\">\r\n              shopping_cart_checkout\r\n            </span>\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-favourite\" data-id=\"${product.id}\" >\r\n            <span class=\"material-icons-outlined\"> favorite_border </span>\r\n          </button>\r\n          <button type=\"button\" class=\"btn\">\r\n            <span class=\"material-icons-outlined\"> compare_arrows </span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div>`\r\n}\r\n\n\n//# sourceURL=webpack://training/./scripts/render.js?");

/***/ }),

/***/ "./scripts/search.js":
/*!***************************!*\
  !*** ./scripts/search.js ***!
  \***************************/
/***/ (() => {

eval("\r\nconst search$ = document.getElementById('search');\r\nsearch$.addEventListener('keyup', function(event) {\r\n    // console.log(event)\r\n    const term = search$.value;\r\n    //console.log(term)\r\n    const termLowerCase = term.toLowerCase();\r\n    // console.log(termLowerCase);\r\n    const productsFiltered = productsModified.filter(function(product) {\r\n      const titleLowerCase = product.title.toLowerCase();\r\n      return titleLowerCase.indexOf(termLowerCase) != -1;\r\n    });\r\n    renderProductCards(productsFiltered)\r\n})\n\n//# sourceURL=webpack://training/./scripts/search.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;