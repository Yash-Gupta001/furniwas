"use strict";

var loginForm = document.querySelector('.header .login-form');

document.querySelector('#login-btn').onclick = function () {
  loginForm.classList.toggle('active');
  navbar.classList.remove('active');
};

var navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = function () {
  navbar.classList.toggle('active');
  loginForm.classList.remove('active');
};

window.onscroll = function () {
  loginForm.classList.remove('active');
  navbar.classList.remove('active');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

window.onload = function () {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};
//# sourceMappingURL=script.dev.js.map
