// === Part 1: Event Handling ===

// Light/Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Counter Button
let count = 0;
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');

incrementBtn.addEventListener('click', () => {
  count++;
  counterDisplay.textContent = count;
});

// FAQ Toggle
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle('show');
  });
});

// === Part 2: Form Validation ===
const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const successMessage = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission
  let valid = true;

  // Clear previous messages
  document.querySelectorAll('.error-message').forEach(span => span.textContent = '');
  successMessage.textContent = '';

  // Name validation
  if (nameInput.value.trim() === '') {
    nameInput.nextElementSibling.textContent = 'Name is required.';
    valid = false;
  }

  // Email validation (simple regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailInput.nextElementSibling.textContent = 'Enter a valid email.';
    valid = false;
  }

  // Password validation (min 6 chars)
  if (passwordInput.value.length < 6) {
    passwordInput.nextElementSibling.textContent = 'Password must be at least 6 characters.';
    valid = false;
  }

  if (valid) {
    successMessage.textContent = 'Form submitted successfully!';
    form.reset();
  }
});
