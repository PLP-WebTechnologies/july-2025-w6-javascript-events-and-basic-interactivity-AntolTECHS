// === Light/Dark Mode Toggle ===
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// === Counter Button Game ===
let count = 0;
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');

incrementBtn.addEventListener('click', () => {
  count++;
  counterDisplay.textContent = count;
});

// === FAQ Toggle ===
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle('show');
  });
});

// === Dropdown Menu ===
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownContent = document.getElementById('dropdownContent');

dropdownBtn.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});

window.addEventListener('click', (e) => {
  if (!e.target.matches('#dropdownBtn')) {
    dropdownContent.classList.remove('show');
  }
});

// === Tabbed Interface ===
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    button.classList.add('active');
    document.getElementById(button.dataset.tab).classList.add('active');
  });
});

// === Form Validation ===
const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const successMessage = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  document.querySelectorAll('.error-message').forEach(span => span.textContent = '');
  successMessage.textContent = '';

  if (nameInput.value.trim() === '') {
    nameInput.nextElementSibling.textContent = 'Name is required.';
    valid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailInput.nextElementSibling.textContent = 'Enter a valid email.';
    valid = false;
  }

  if (passwordInput.value.length < 6) {
    passwordInput.nextElementSibling.textContent = 'Password must be at least 6 characters.';
    valid = false;
  }

  if (valid) {
    successMessage.textContent = 'Form submitted successfully!';
    form.reset();
  }
});
