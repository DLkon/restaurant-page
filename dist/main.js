/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/contact-page.js":
/*!*************************************!*\
  !*** ./src/modules/contact-page.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const content = document.querySelector('#content');
const createContact = function(){

    const section = document.createElement("section");
    section.classList.add("content");
    content.appendChild(section);
    
    const container = document.createElement("div");
    container.classList.add("container-contact");
    section.appendChild(container);

    const divMap = document.createElement("div");
    divMap.classList.add("google-maps");
    container.appendChild(divMap);

    const divCard = document.createElement("div");
    divCard.classList.add("buisness-hours");
    container.appendChild(divCard);

    const iframe = document.createElement("iframe");
    iframe.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.4244510639287!2d-51.14821348518599!3d-23.300353884812996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb448502809699%3A0x6800226ff8215503!2sR.%20Trememb%C3%A9s%2C%20498%20-%20Vila%20Casoni%2C%20Londrina%20-%20PR%2C%2086026-410!5e0!3m2!1spt-BR!2sbr!4v1641416715568!5m2!1spt-BR!2sbr")
    iframe.setAttribute("width","400");
    iframe.setAttribute("height","300");
    iframe.setAttribute("style","border:0;");
    iframe.setAttribute("allowfullscreen","");
    iframe.setAttribute("loading","lazy");

    divMap.appendChild(iframe);

    const time = document.createElement("div");
    time.classList.add("time");
    divCard.appendChild(time);

    const hourTitle = document.createElement("h3");
    hourTitle.textContent = "Hours"
    hourTitle.setAttribute("id","h");
    time.appendChild(hourTitle);

    const hoursOfWork = document.createElement("h3");
    hoursOfWork.textContent = "19:30pm - 00:00 am";
    time.appendChild(hoursOfWork);

    const daysOfWOrk = document.createElement("h3");
    daysOfWOrk.textContent = "Tue - Sun";
    time.appendChild(daysOfWOrk);

    const dayOff = document.createElement("h3");
    dayOff.textContent = "Monday: day off";
    time.appendChild(dayOff);

    divCard.appendChild(time);

    const info = document.createElement("h3");
    info.textContent = "Only orders by Ifood";
    info.setAttribute("id","bottom");
    divCard.appendChild(info);
    
    
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);

/***/ }),

/***/ "./src/modules/inital-page.js":
/*!************************************!*\
  !*** ./src/modules/inital-page.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _hamburguer_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hamburguer.jpg */ "./src/modules/hamburguer.jpg");


const content = document.querySelector('#content');
const createHeader = function(){
    const header = document.createElement('header');
    content.appendChild(header);
    const Nav = document.createElement("div");
    Nav.classList.add("nav");
    
    const companyName = document.createElement("div");
    companyName.classList.add("company-name");

    const navegation = document.createElement("div");
    navegation.classList.add("navegation");

    const companyNameText = document.createElement("h1");
    companyNameText.textContent = "Dots Hamburgueria";
    companyNameText.classList.add("company-name-text");


    const NavBar = document.createElement("div");
    NavBar.classList.add("NavBar");
    const NavOptions = document.createElement("ul");
        NavOptions.classList.add("navegation-items");
    
        const Home = document.createElement('li');
            Home.classList.add("home");
                Home.textContent = "Home";

        const Menu = document.createElement('li');
            Menu.classList.add("menu");
                Menu.textContent = "Menu";

        const Contact = document.createElement('li');
         Contact.classList.add("contact");
            Contact.textContent = "Contact";

        NavOptions.appendChild(Home);
        NavOptions.appendChild(Menu);
        NavOptions.appendChild(Contact);
        NavBar.appendChild(NavOptions);
        navegation.appendChild(NavBar);

    companyName.appendChild(companyNameText);
    Nav.appendChild(companyName);
    Nav.appendChild(navegation);
    header.appendChild(Nav);

}; 
const createContent = function(){
        const section = document.createElement("section");
        section.classList.add("content");

        const container = document.createElement("div");
        container.classList.add("info");

        const description = document.createElement("div");
        description.classList.add("description");
        const descriptionTitle = document.createElement("h2");
            descriptionTitle.textContent = "Come Taste the Best Burguer in Londrina"
        const descriptionText = document.createElement('p');
            descriptionText.textContent = "We are a kitchen specializing in handmade burgers, our priority is the flavor and the customer"

        description.appendChild(descriptionTitle);
        description.appendChild(descriptionText);
         
        container.appendChild(description);

        const myIcon = new Image();
        myIcon.src = _hamburguer_jpg__WEBPACK_IMPORTED_MODULE_0__;
        myIcon.classList.add("img");
        container.appendChild(myIcon);
        

        section.appendChild(container);
        content.appendChild(section);
    };

const init = function () {
    createContent();

};




/***/ }),

/***/ "./src/modules/menu-page.js":
/*!**********************************!*\
  !*** ./src/modules/menu-page.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const content = document.querySelector('#content');

const createMenu = function() {
const section = document.createElement("section");
section.classList.add("content");
content.appendChild(section);

const container = document.createElement("div");
container.classList.add("container-cards");
section.appendChild(container);

const cardOne = document.createElement("div");
const cardTwo = document.createElement("div");
const cardThree = document.createElement("div");
const cardFour = document.createElement("div");

cardOne.classList.add("card");
cardTwo.classList.add("card");
cardThree.classList.add("card");
cardFour.classList.add("card");

container.appendChild(cardOne);
container.appendChild(cardTwo);
container.appendChild(cardThree);
container.appendChild(cardFour);

const burgCheddarImg = document.createElement("div");
burgCheddarImg.classList.add("burg-image");
    cardOne.appendChild(burgCheddarImg);
const burgCheddarDescription = document.createElement("div");
burgCheddarDescription.classList.add("burg-description");
    cardOne.appendChild(burgCheddarDescription);
const burgCheddarName = document.createElement("h3");
    burgCheddarName.textContent = "Smash Cheddar"
    burgCheddarDescription.appendChild(burgCheddarName);
const burgCheddarInfo = document.createElement("p");
    burgCheddarInfo.textContent = "A delicious burguer with cheddar cheese, purple Onion, Brioche Bread and especial sauces"
    burgCheddarDescription.appendChild(burgCheddarInfo);

const burgBaconImg = document.createElement("div");
burgBaconImg.classList.add("burg-image");
    cardTwo.appendChild(burgBaconImg);
const burgBaconDescription = document.createElement("div");
burgBaconDescription.classList.add("burg-description");
    cardTwo.appendChild(burgBaconDescription);
const burgBaconName = document.createElement("h3");
    burgBaconName.textContent = "Smash Bacon"
    burgBaconDescription.appendChild(burgBaconName);
const burgBaconInfo = document.createElement("p");
    burgBaconInfo.textContent = "A delicious burguer with cheddar cheese, caramelized onion,  Brioche Bread, crispy bacon and especial sauces"
    burgBaconDescription.appendChild(burgBaconInfo);

const burgClassicImg = document.createElement("div");
burgClassicImg.classList.add("burg-image");
    cardThree.appendChild(burgClassicImg);
const burgClassicDescription = document.createElement("div");
burgClassicDescription.classList.add("burg-description");
    cardThree.appendChild(burgClassicDescription);
const burgClassicName = document.createElement("h3");
    burgClassicName.textContent = "Classic"
    burgClassicDescription.appendChild(burgClassicName);
const burgClassicInfo = document.createElement("p");
    burgClassicInfo.textContent = "A delicious burguer with cheddar cheese, purple Onion, Brioche Bread, pickles and especial sauces"
    burgClassicDescription.appendChild(burgClassicInfo);

const burgPepperoniImg = document.createElement("div");
burgPepperoniImg.classList.add("burg-image");
    cardFour.appendChild(burgPepperoniImg);
const burgPepperoniDescription = document.createElement("div");
burgPepperoniDescription.classList.add("burg-description");
    cardFour.appendChild(burgPepperoniDescription);
const burgPepperoniName = document.createElement("h3");
    burgPepperoniName.textContent = "Smash Bacon"
    burgPepperoniDescription.appendChild(burgPepperoniName);
const burgPepperoniInfo = document.createElement("p");
    burgPepperoniInfo.textContent = "A delicious burguer with cheddar cheese, caramelized onion,  Brioche Bread, crispy bacon and especial sauces"
    burgPepperoniDescription.appendChild(burgPepperoniInfo);


};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);

/***/ }),

/***/ "./src/modules/hamburguer.jpg":
/*!************************************!*\
  !*** ./src/modules/hamburguer.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fc103fac75e7a4cf2c4.jpg";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_inital_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/inital-page */ "./src/modules/inital-page.js");
/* harmony import */ var _modules_menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu-page */ "./src/modules/menu-page.js");
/* harmony import */ var _modules_contact_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact-page */ "./src/modules/contact-page.js");




function removeAllChildNodes(parent) {
    while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
 }
};

    (0,_modules_inital_page__WEBPACK_IMPORTED_MODULE_0__.createHeader)();
    (0,_modules_inital_page__WEBPACK_IMPORTED_MODULE_0__.init)();
    
    const Menu = document.querySelector(".menu");
    Menu.addEventListener('click',()=>{
        const content = document.querySelector(".content");
        content.remove();
        (0,_modules_menu_page__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });


    const Home = document.querySelector(".home");
    Home.addEventListener('click',()=> {
        const content = document.querySelector(".content");
        content.remove();
        (0,_modules_inital_page__WEBPACK_IMPORTED_MODULE_0__.init)();
    });

    const Contact = document.querySelector(".contact");
    Contact.addEventListener("click",()=>{
        const content = document.querySelector(".content");
        content.remove();
        (0,_modules_contact_page__WEBPACK_IMPORTED_MODULE_2__["default"])();
        
    });










})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7O0FDNURROztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLDRDQUFJO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFNEI7Ozs7Ozs7Ozs7Ozs7OztBQ25GNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7OztVQ2pGekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZndEO0FBQ1g7QUFDTTs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGtFQUFZO0FBQ2hCLElBQUksMERBQUk7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4REFBVTtBQUNsQixLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQUk7QUFDWixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBYTtBQUNyQjtBQUNBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9jb250YWN0LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaW5pdGFsLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWVudS1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb25zdCBjcmVhdGVDb250YWN0ID0gZnVuY3Rpb24oKXtcblxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG4gICAgXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lci1jb250YWN0XCIpO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIGNvbnN0IGRpdk1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2TWFwLmNsYXNzTGlzdC5hZGQoXCJnb29nbGUtbWFwc1wiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2TWFwKTtcblxuICAgIGNvbnN0IGRpdkNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkNhcmQuY2xhc3NMaXN0LmFkZChcImJ1aXNuZXNzLWhvdXJzXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZDYXJkKTtcblxuICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZShcInNyY1wiLFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMzY2NC40MjQ0NTEwNjM5Mjg3ITJkLTUxLjE0ODIxMzQ4NTE4NTk5ITNkLTIzLjMwMDM1Mzg4NDgxMjk5NiEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4OTRlYjQ0ODUwMjgwOTY5OSUzQTB4NjgwMDIyNmZmODIxNTUwMyEyc1IuJTIwVHJlbWVtYiVDMyVBOXMlMkMlMjA0OTglMjAtJTIwVmlsYSUyMENhc29uaSUyQyUyMExvbmRyaW5hJTIwLSUyMFBSJTJDJTIwODYwMjYtNDEwITVlMCEzbTIhMXNwdC1CUiEyc2JyITR2MTY0MTQxNjcxNTU2OCE1bTIhMXNwdC1CUiEyc2JyXCIpXG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsXCI0MDBcIik7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLFwiMzAwXCIpO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwiYm9yZGVyOjA7XCIpO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoXCJhbGxvd2Z1bGxzY3JlZW5cIixcIlwiKTtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKFwibG9hZGluZ1wiLFwibGF6eVwiKTtcblxuICAgIGRpdk1hcC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuXG4gICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGltZS5jbGFzc0xpc3QuYWRkKFwidGltZVwiKTtcbiAgICBkaXZDYXJkLmFwcGVuZENoaWxkKHRpbWUpO1xuXG4gICAgY29uc3QgaG91clRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhvdXJUaXRsZS50ZXh0Q29udGVudCA9IFwiSG91cnNcIlxuICAgIGhvdXJUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiaFwiKTtcbiAgICB0aW1lLmFwcGVuZENoaWxkKGhvdXJUaXRsZSk7XG5cbiAgICBjb25zdCBob3Vyc09mV29yayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBob3Vyc09mV29yay50ZXh0Q29udGVudCA9IFwiMTk6MzBwbSAtIDAwOjAwIGFtXCI7XG4gICAgdGltZS5hcHBlbmRDaGlsZChob3Vyc09mV29yayk7XG5cbiAgICBjb25zdCBkYXlzT2ZXT3JrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGRheXNPZldPcmsudGV4dENvbnRlbnQgPSBcIlR1ZSAtIFN1blwiO1xuICAgIHRpbWUuYXBwZW5kQ2hpbGQoZGF5c09mV09yayk7XG5cbiAgICBjb25zdCBkYXlPZmYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgZGF5T2ZmLnRleHRDb250ZW50ID0gXCJNb25kYXk6IGRheSBvZmZcIjtcbiAgICB0aW1lLmFwcGVuZENoaWxkKGRheU9mZik7XG5cbiAgICBkaXZDYXJkLmFwcGVuZENoaWxkKHRpbWUpO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBpbmZvLnRleHRDb250ZW50ID0gXCJPbmx5IG9yZGVycyBieSBJZm9vZFwiO1xuICAgIGluZm8uc2V0QXR0cmlidXRlKFwiaWRcIixcImJvdHRvbVwiKTtcbiAgICBkaXZDYXJkLmFwcGVuZENoaWxkKGluZm8pO1xuICAgIFxuICAgIFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdDsiLCJpbXBvcnQgSWNvbiBmcm9tICcuL2hhbWJ1cmd1ZXIuanBnJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb25zdCBjcmVhdGVIZWFkZXIgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb25zdCBOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIE5hdi5jbGFzc0xpc3QuYWRkKFwibmF2XCIpO1xuICAgIFxuICAgIGNvbnN0IGNvbXBhbnlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb21wYW55TmFtZS5jbGFzc0xpc3QuYWRkKFwiY29tcGFueS1uYW1lXCIpO1xuXG4gICAgY29uc3QgbmF2ZWdhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmF2ZWdhdGlvbi5jbGFzc0xpc3QuYWRkKFwibmF2ZWdhdGlvblwiKTtcblxuICAgIGNvbnN0IGNvbXBhbnlOYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb21wYW55TmFtZVRleHQudGV4dENvbnRlbnQgPSBcIkRvdHMgSGFtYnVyZ3VlcmlhXCI7XG4gICAgY29tcGFueU5hbWVUZXh0LmNsYXNzTGlzdC5hZGQoXCJjb21wYW55LW5hbWUtdGV4dFwiKTtcblxuXG4gICAgY29uc3QgTmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBOYXZCYXIuY2xhc3NMaXN0LmFkZChcIk5hdkJhclwiKTtcbiAgICBjb25zdCBOYXZPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBOYXZPcHRpb25zLmNsYXNzTGlzdC5hZGQoXCJuYXZlZ2F0aW9uLWl0ZW1zXCIpO1xuICAgIFxuICAgICAgICBjb25zdCBIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIEhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG4gICAgICAgICAgICAgICAgSG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuXG4gICAgICAgIGNvbnN0IE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgTWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgICAgICAgICAgICAgICBNZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5cbiAgICAgICAgY29uc3QgQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICBDb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuICAgICAgICAgICAgQ29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuXG4gICAgICAgIE5hdk9wdGlvbnMuYXBwZW5kQ2hpbGQoSG9tZSk7XG4gICAgICAgIE5hdk9wdGlvbnMuYXBwZW5kQ2hpbGQoTWVudSk7XG4gICAgICAgIE5hdk9wdGlvbnMuYXBwZW5kQ2hpbGQoQ29udGFjdCk7XG4gICAgICAgIE5hdkJhci5hcHBlbmRDaGlsZChOYXZPcHRpb25zKTtcbiAgICAgICAgbmF2ZWdhdGlvbi5hcHBlbmRDaGlsZChOYXZCYXIpO1xuXG4gICAgY29tcGFueU5hbWUuYXBwZW5kQ2hpbGQoY29tcGFueU5hbWVUZXh0KTtcbiAgICBOYXYuYXBwZW5kQ2hpbGQoY29tcGFueU5hbWUpO1xuICAgIE5hdi5hcHBlbmRDaGlsZChuYXZlZ2F0aW9uKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoTmF2KTtcblxufTsgXG5jb25zdCBjcmVhdGVDb250ZW50ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbWUgVGFzdGUgdGhlIEJlc3QgQnVyZ3VlciBpbiBMb25kcmluYVwiXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uVGV4dC50ZXh0Q29udGVudCA9IFwiV2UgYXJlIGEga2l0Y2hlbiBzcGVjaWFsaXppbmcgaW4gaGFuZG1hZGUgYnVyZ2Vycywgb3VyIHByaW9yaXR5IGlzIHRoZSBmbGF2b3IgYW5kIHRoZSBjdXN0b21lclwiXG5cbiAgICAgICAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UaXRsZSk7XG4gICAgICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dCk7XG4gICAgICAgICBcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBjb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbXlJY29uLnNyYyA9IEljb247XG4gICAgICAgIG15SWNvbi5jbGFzc0xpc3QuYWRkKFwiaW1nXCIpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobXlJY29uKTtcbiAgICAgICAgXG5cbiAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICAgIH07XG5cbmNvbnN0IGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY3JlYXRlQ29udGVudCgpO1xuXG59O1xuXG5leHBvcnQge2NyZWF0ZUhlYWRlciwgaW5pdH07XG4iLCJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuY29uc3QgY3JlYXRlTWVudSA9IGZ1bmN0aW9uKCkge1xuY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuc2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lci1jYXJkc1wiKTtcbnNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuY29uc3QgY2FyZE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBjYXJkVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGNhcmRUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBjYXJkRm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbmNhcmRPbmUuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG5jYXJkVHdvLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuY2FyZFRocmVlLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuY2FyZEZvdXIuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG5cbmNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkT25lKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkVHdvKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkVGhyZWUpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRGb3VyKTtcblxuY29uc3QgYnVyZ0NoZWRkYXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuYnVyZ0NoZWRkYXJJbWcuY2xhc3NMaXN0LmFkZChcImJ1cmctaW1hZ2VcIik7XG4gICAgY2FyZE9uZS5hcHBlbmRDaGlsZChidXJnQ2hlZGRhckltZyk7XG5jb25zdCBidXJnQ2hlZGRhckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmJ1cmdDaGVkZGFyRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImJ1cmctZGVzY3JpcHRpb25cIik7XG4gICAgY2FyZE9uZS5hcHBlbmRDaGlsZChidXJnQ2hlZGRhckRlc2NyaXB0aW9uKTtcbmNvbnN0IGJ1cmdDaGVkZGFyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBidXJnQ2hlZGRhck5hbWUudGV4dENvbnRlbnQgPSBcIlNtYXNoIENoZWRkYXJcIlxuICAgIGJ1cmdDaGVkZGFyRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoYnVyZ0NoZWRkYXJOYW1lKTtcbmNvbnN0IGJ1cmdDaGVkZGFySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJ1cmdDaGVkZGFySW5mby50ZXh0Q29udGVudCA9IFwiQSBkZWxpY2lvdXMgYnVyZ3VlciB3aXRoIGNoZWRkYXIgY2hlZXNlLCBwdXJwbGUgT25pb24sIEJyaW9jaGUgQnJlYWQgYW5kIGVzcGVjaWFsIHNhdWNlc1wiXG4gICAgYnVyZ0NoZWRkYXJEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChidXJnQ2hlZGRhckluZm8pO1xuXG5jb25zdCBidXJnQmFjb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuYnVyZ0JhY29uSW1nLmNsYXNzTGlzdC5hZGQoXCJidXJnLWltYWdlXCIpO1xuICAgIGNhcmRUd28uYXBwZW5kQ2hpbGQoYnVyZ0JhY29uSW1nKTtcbmNvbnN0IGJ1cmdCYWNvbkRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmJ1cmdCYWNvbkRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJidXJnLWRlc2NyaXB0aW9uXCIpO1xuICAgIGNhcmRUd28uYXBwZW5kQ2hpbGQoYnVyZ0JhY29uRGVzY3JpcHRpb24pO1xuY29uc3QgYnVyZ0JhY29uTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBidXJnQmFjb25OYW1lLnRleHRDb250ZW50ID0gXCJTbWFzaCBCYWNvblwiXG4gICAgYnVyZ0JhY29uRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoYnVyZ0JhY29uTmFtZSk7XG5jb25zdCBidXJnQmFjb25JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYnVyZ0JhY29uSW5mby50ZXh0Q29udGVudCA9IFwiQSBkZWxpY2lvdXMgYnVyZ3VlciB3aXRoIGNoZWRkYXIgY2hlZXNlLCBjYXJhbWVsaXplZCBvbmlvbiwgIEJyaW9jaGUgQnJlYWQsIGNyaXNweSBiYWNvbiBhbmQgZXNwZWNpYWwgc2F1Y2VzXCJcbiAgICBidXJnQmFjb25EZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChidXJnQmFjb25JbmZvKTtcblxuY29uc3QgYnVyZ0NsYXNzaWNJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuYnVyZ0NsYXNzaWNJbWcuY2xhc3NMaXN0LmFkZChcImJ1cmctaW1hZ2VcIik7XG4gICAgY2FyZFRocmVlLmFwcGVuZENoaWxkKGJ1cmdDbGFzc2ljSW1nKTtcbmNvbnN0IGJ1cmdDbGFzc2ljRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuYnVyZ0NsYXNzaWNEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiYnVyZy1kZXNjcmlwdGlvblwiKTtcbiAgICBjYXJkVGhyZWUuYXBwZW5kQ2hpbGQoYnVyZ0NsYXNzaWNEZXNjcmlwdGlvbik7XG5jb25zdCBidXJnQ2xhc3NpY05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgYnVyZ0NsYXNzaWNOYW1lLnRleHRDb250ZW50ID0gXCJDbGFzc2ljXCJcbiAgICBidXJnQ2xhc3NpY0Rlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGJ1cmdDbGFzc2ljTmFtZSk7XG5jb25zdCBidXJnQ2xhc3NpY0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBidXJnQ2xhc3NpY0luZm8udGV4dENvbnRlbnQgPSBcIkEgZGVsaWNpb3VzIGJ1cmd1ZXIgd2l0aCBjaGVkZGFyIGNoZWVzZSwgcHVycGxlIE9uaW9uLCBCcmlvY2hlIEJyZWFkLCBwaWNrbGVzIGFuZCBlc3BlY2lhbCBzYXVjZXNcIlxuICAgIGJ1cmdDbGFzc2ljRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoYnVyZ0NsYXNzaWNJbmZvKTtcblxuY29uc3QgYnVyZ1BlcHBlcm9uaUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5idXJnUGVwcGVyb25pSW1nLmNsYXNzTGlzdC5hZGQoXCJidXJnLWltYWdlXCIpO1xuICAgIGNhcmRGb3VyLmFwcGVuZENoaWxkKGJ1cmdQZXBwZXJvbmlJbWcpO1xuY29uc3QgYnVyZ1BlcHBlcm9uaURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmJ1cmdQZXBwZXJvbmlEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiYnVyZy1kZXNjcmlwdGlvblwiKTtcbiAgICBjYXJkRm91ci5hcHBlbmRDaGlsZChidXJnUGVwcGVyb25pRGVzY3JpcHRpb24pO1xuY29uc3QgYnVyZ1BlcHBlcm9uaU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgYnVyZ1BlcHBlcm9uaU5hbWUudGV4dENvbnRlbnQgPSBcIlNtYXNoIEJhY29uXCJcbiAgICBidXJnUGVwcGVyb25pRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoYnVyZ1BlcHBlcm9uaU5hbWUpO1xuY29uc3QgYnVyZ1BlcHBlcm9uaUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBidXJnUGVwcGVyb25pSW5mby50ZXh0Q29udGVudCA9IFwiQSBkZWxpY2lvdXMgYnVyZ3VlciB3aXRoIGNoZWRkYXIgY2hlZXNlLCBjYXJhbWVsaXplZCBvbmlvbiwgIEJyaW9jaGUgQnJlYWQsIGNyaXNweSBiYWNvbiBhbmQgZXNwZWNpYWwgc2F1Y2VzXCJcbiAgICBidXJnUGVwcGVyb25pRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoYnVyZ1BlcHBlcm9uaUluZm8pO1xuXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHtjcmVhdGVIZWFkZXIsaW5pdH0gZnJvbSBcIi4vbW9kdWxlcy9pbml0YWwtcGFnZVwiO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSBcIi4vbW9kdWxlcy9tZW51LXBhZ2VcIjtcbmltcG9ydCBjcmVhdGVDb250YWN0IGZyb20gXCIuL21vZHVsZXMvY29udGFjdC1wYWdlXCI7XG5cbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiB9XG59O1xuXG4gICAgY3JlYXRlSGVhZGVyKCk7XG4gICAgaW5pdCgpO1xuICAgIFxuICAgIGNvbnN0IE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XG4gICAgTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICAgICAgY29udGVudC5yZW1vdmUoKTtcbiAgICAgICAgY3JlYXRlTWVudSgpO1xuICAgIH0pO1xuXG5cbiAgICBjb25zdCBIb21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpO1xuICAgIEhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgICAgICBjb250ZW50LnJlbW92ZSgpO1xuICAgICAgICBpbml0KCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBDb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0XCIpO1xuICAgIENvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICAgICAgY29udGVudC5yZW1vdmUoKTtcbiAgICAgICAgY3JlYXRlQ29udGFjdCgpO1xuICAgICAgICBcbiAgICB9KTtcblxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==