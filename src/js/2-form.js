const formData = {
  email: '',
  message: '',
};

const localStorageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const objLocalStorage = JSON.parse(localStorage.getItem(localStorageKey)) ?? '';

let email = objLocalStorage.email !== undefined ? objLocalStorage.email : '';
let message =
  objLocalStorage.message !== undefined ? objLocalStorage.message : '';

form.elements.email.value = email;
form.elements.message.value = message;

form.addEventListener('input', saveToLocalStorage);

function saveToLocalStorage(event) {
  event.preventDefault();

  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

form.addEventListener('submit', () => {
  event.preventDefault();
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }
  localStorage.removeItem(localStorageKey);
  form.reset();
});
