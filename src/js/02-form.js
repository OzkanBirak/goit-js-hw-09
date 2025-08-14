const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

function readStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { email: '', message: '' };
  } catch {
    return { email: '', message: '' };
  }
}

function writeStorage(value) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}

function restoreFormFromStorage() {
  const { email, message } = readStorage();
  if (typeof email === 'string') emailInput.value = email;
  if (typeof message === 'string') messageTextarea.value = message;
}

restoreFormFromStorage();

form.addEventListener('input', () => {
  const data = {
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim(),
  };
  writeStorage(data);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();
  const message = messageTextarea.value.trim();

  if (!email || !message) {
    alert('Lütfen her iki alanı da doldurun.');
    return;
  }

  const payload = { email, message };
  console.log(payload);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
