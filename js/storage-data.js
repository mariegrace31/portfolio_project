const email =document.getElementById('email');
const Fullname= document.getElementById('fullname');
const textArea=document.getElementById('textarea');
function savedData() {
  const formData = {
    fullname: Fullname.value,
    email: email.value,
    textarea: textArea.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

form.addEventListener('submit', savedData);