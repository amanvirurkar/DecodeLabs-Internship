const themeBtn = document.getElementById("themeBtn");
const infoBtn = document.getElementById("infoBtn");
const extraBox = document.getElementById("extraBox");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const darkOn = document.body.classList.contains("dark");
    themeBtn.textContent = darkOn ? "Light Mode" : "Dark Mode";
});

infoBtn.addEventListener("click", () => {
    extraBox.classList.toggle("show");
    const open = extraBox.classList.contains("show");
    infoBtn.textContent = open ? "Hide details" : "Why students like it";
});

const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm");
const successBox = document.getElementById("formSuccess");

function showError(input, message) {
    const group = input.closest('.form-group');
    const errorEl = group.querySelector('.error');
    errorEl.textContent = message;
    input.classList.add('input-error');
}

function clearError(input) {
    const group = input.closest('.form-group');
    const errorEl = group.querySelector('.error');
    errorEl.textContent = '';
    input.classList.remove('input-error');
}

function validEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    successBox.hidden = true;
    let valid = true;
    if (!nameInput.value.trim()) {
        showError(nameInput, 'Name is required');
        valid = false;
    } else {
        clearError(nameInput);
    }
    if (!emailInput.value.trim()) {
        showError(emailInput, 'Email is required');
        valid = false;
    } else if (!validEmail(emailInput.value.trim())) {
        showError(emailInput, 'Enter a valid email');
        valid = false;
    } else {
        clearError(emailInput);
    }
    if (!passwordInput.value) {
        showError(passwordInput, 'Password is required');
        valid = false;
    } else if (passwordInput.value.length < 8) {
        showError(passwordInput, 'Password must be at least 8 characters');
        valid = false;
    } else {
        clearError(passwordInput);
    }
    if (!confirmInput.value) {
        showError(confirmInput, 'Please confirm your password');
        valid = false;
    } else if (confirmInput.value !== passwordInput.value) {
        showError(confirmInput, 'Passwords do not match');
        valid = false;
    } else {
        clearError(confirmInput);
    }
    if (valid) {
        successBox.hidden = false;
        form.reset();
        [nameInput, emailInput, passwordInput, confirmInput].forEach(i => clearError(i));
        setTimeout(() => {
            successBox.hidden = true;
        }, 3500);
    }
});

[nameInput, emailInput, passwordInput, confirmInput].forEach((input) => {
    input.addEventListener('input', () => {
        if (input.classList.contains('input-error')) {
            clearError(input);
        }
    });
});
