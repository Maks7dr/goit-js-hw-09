const formData = { email: '', message: '' };
const registerForm = document.querySelector('.feedback-form');
registerForm.addEventListener('submit', event => {
  event.preventDefault();
  formData.email = event.target.elements.email.value.trim();
  formData.message = event.target.elements.message.value.trim();
  if (formData.email === '' || formData.message === '') {
    return console.log('Fill please all fields');
  }
  console.log(formData);
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
});
if (localStorage.getItem('feedback-form-state')) {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  formData.email = savedData.email || '';
  formData.message = savedData.message || '';
  registerForm.elements.email.value = formData.email;
  registerForm.elements.message.value = formData.message;
}

registerForm.addEventListener('input', () => {
  formData.email = registerForm.elements.email.value.trim();
  formData.message = registerForm.elements.message.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});
