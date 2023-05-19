const hamburger = document.getElementById('hamburger');
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

// validation form

const form = document.querySelector('.form');
const email = document.getElementById('email');
const errorMessage = document.querySelector('.error');
const regex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g;

function validationForm(e) {
  e.preventDefault();
  if (regex.test(email.value)) {
    form.submit();
    form.reset();
  } else {
    errorMessage.innerText = 'Email should be in lowercase';
  }
}

form.addEventListener('submit', (e) => {
  validationForm(e);
});