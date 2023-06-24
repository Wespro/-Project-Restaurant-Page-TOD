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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const content = document.querySelector(\"#content\");\n\nconst fragment = document.createDocumentFragment();\n//taps\nconst taps = document.createElement(\"div\");\nconst home = document.createElement(\"button\");\nconst menu = document.createElement(\"button\");\nconst contact = document.createElement(\"button\");\n//classes\ntaps.classList.add(\"taps\");\nhome.classList.add(\"tap\", \"home\");\nmenu.classList.add(\"tap\", \"menu\");\ncontact.classList.add(\"tap\", \"contact\");\n//content\n\nhome.innerText = \"Home\";\nmenu.innerText = \"menu\";\ncontact.innerText = \"contact\";\n\n//homescreen\nconst homeScreen = document.createElement(\"div\");\nhomeScreen.classList.add(\"homeScreen\");\n\n//middle sile\nconst middleSide = document.createElement(\"div\");\nconst homeImg = document.createElement(\"img\");\nmiddleSide.classList.add(\"middleSide\");\nhomeImg.classList.add(\"homeImg\");\n\nhomeImg.src = HomeImage;\n\n// rightside\nconst rightSide = document.createElement(\"div\");\nrightSide.classList.add(\"rightSide\");\nconst aboutGamer = document.createElement(\"div\");\nconst aboutGamerH1 = document.createElement(\"h1\");\nconst aboutGamerH3 = document.createElement(\"h3\");\naboutGamer.classList.add(\"aboutGamer\");\naboutGamerH1.classList.add(\"aboutGamerH1\");\naboutGamerH3.classList.add(\"aboutGamerH3\");\n\nconst todaysOffer = document.createElement(\"div\");\nconst todaysOfferH1 = document.createElement(\"h1\");\nconst todaysOfferimg = document.createElement(\"h3\");\ntodaysOffer.classList.add(\"todaysOffer\");\ntodaysOfferH1.classList.add(\"todaysOfferH1\");\ntodaysOfferimg.classList.add(\"todaysOfferimg\");\n//left side\nconst leftSide = document.createElement(\"div\");\nleftSide.classList.add(\"leftSide\");\n\nconst workingHours = document.createElement(\"div\");\nconst workingHoursH1 = document.createElement(\"h1\");\nconst workingHoursp1 = document.createElement(\"p\");\nconst workingHoursp2 = document.createElement(\"p\");\nworkingHours.classList.add(\"workingHours\");\nworkingHoursH1.classList.add(\"workingHoursH1\");\nworkingHoursp1.classList.add(\"workingHoursp1\");\nworkingHoursp2.classList.add(\"workingHoursp2\");\n\nconst location = document.createElement(\"div\");\nconst locationH1 = document.createElement(\"h1\");\nconst locationH3 = document.createElement(\"h3\");\nlocation.classList.add(\"location\");\nlocationH1.classList.add(\"locationH1\");\nlocationH3.classList.add(\"locationH3\");\n\n//apending\ntaps.append(home, menu, contact);\nhomeScreen.append(rightSide, middleSide, leftSide);\nrightSide.append(\n  aboutGamer,\n  aboutGamerH1,\n  aboutGamerH3,\n\n  todaysOffer,\n  todaysOfferH1,\n  todaysOfferimg\n);\nmiddleSide.append(homeImg);\nleftSide.append(\n  workingHours,\n  workingHoursH1,\n  workingHoursp1,\n  workingHoursp2,\n\n  location,\n  locationH1,\n  locationH3\n);\n\nfragment.append(taps, homeScreen);\n\ncontent.appendChild(fragment);\n\n\n//# sourceURL=webpack://y/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;