const form = document.querySelector('form');
const email = document.getElementById('email');
const Fullname = document.getElementById('fullname');
const textArea = document.getElementById('textarea');
function savedData() {
  const formData = {
    fullname: Fullname.value,
    email: email.value,
    textarea: textArea.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

form.addEventListener('submit', savedData);

// get the item from the local storage 
window.addEventListener('load', () => {
  const dataStorage = JSON.parse(localStorage.getItem('formData'));
  if (dataStorage) {
    email.value = dataStorage.email;
    Fullname.value = dataStorage.fullname;
    textArea.value = dataStorage.textarea;
  }
});