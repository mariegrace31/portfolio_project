const hamburger = document.getElementById ('hamburger');
const closing = document.getElementById('closingIcon');
const links = document.querySelectorAll('.mobileLinks');
const menu = document.querySelector('.nav-menu');
const body = document.querySelector('body');

// menu mobile function

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  body.classList.toggle('active');
});

closing.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// this funcition is for mobile functionality
links.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.toggle('active');
    body.classList.toggle('active');
  });
});