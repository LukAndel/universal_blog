/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./resources/js/welcome.js ***!
  \*********************************/
var signInBtn = document.getElementById("signIn");
var signUpBtn = document.getElementById("signUp");
var fistForm = document.getElementById("form1");
var secondForm = document.getElementById("form2");
var container = document.querySelector(".container");
signInBtn.addEventListener("click", function () {
  container.classList.remove("right-panel-active");
});
signUpBtn.addEventListener("click", function () {
  container.classList.add("right-panel-active");
});
/******/ })()
;
//# sourceMappingURL=welcome.js.map