const openSignUp = document.querySelector('.btn-signup');
const userInfo = document.querySelector('.user-info');
const btnProfile = document.querySelector('.btn-profile');
const hederBurger = document.querySelector('#open-button-menu');
const closeModal = document.querySelector('.modal-close-js');
const authModal = document.querySelector('.auth-modal-js');
const btnSubmit = document.querySelector('.form--btn-submit');
const btnSignUp = document.querySelector('.form__btn-sign-up');
const btnSignIn = document.querySelector('.form__btn-sign-in');
const formInputAdd = document.querySelector('.form-add');
const inputName = document.querySelector('.form-input-name');
const mobileMenu = document.querySelector('.mobile-menu');
const singBtnOut = document.querySelector('.sign-out-btn-js');
const signOutButton = document.querySelector('#signOutButton');
const passwordInput = document.querySelector('.input-password-js');
const checkAuthOpen = document.querySelector('.input-psw-open');
const iconLookPasswork = document.querySelector('.icon-lock-auth');
const iconEye = document.querySelector('.icon-eye');
const iconEyeSlash = document.querySelector('.icon-eye-slash');
const svgEye = document.querySelector('.svg-eye');
const formInputName = document.querySelector('.form-input-name');
const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');
const authForm = document.querySelector('form#authForm');

passwordInput.addEventListener('input', e => {
  passwordInputToggle(e);
});

function passwordInputToggle(e) {
  const valuePassword = e.target.value;

  if (valuePassword !== '') {
    iconLookPasswork.classList.add('icon-look-off');
    iconEye.classList.remove('icon-eye-off');
    checkAuthOpen.classList.remove('is-hidden');
  } else {
    iconLookPasswork.classList.remove('icon-look-off');
    checkAuthOpen.classList.add('is-hidden');
    iconEye.classList.add('icon-eye-off');
  }
}

// чекбоскс на перевірку пароля
checkAuthOpen.onclick = togglaPassword;

function togglaPassword() {
  if (checkAuthOpen.checked) {
    passwordInput.type = 'text';
    iconEye.classList.add('icon-eye-off');
    iconEyeSlash.classList.remove('icon-eye-off-slash');
  } else {
    passwordInput.type = 'password';
    iconEye.classList.remove('icon-eye-off');
    iconEyeSlash.classList.add('icon-eye-off-slash');
  }
}

const dropSingUp = () => {
  openSignUp.classList.toggle('is-hidden-x');
  userInfo.classList.toggle('is-hidden-x');

  const screenSmall = window.screen.availWidth < 768;
  const screenBig = window.screen.availWidth > 768;
  const headerBurgerTrueOrFalse = hederBurger.classList.contains('icon-close');

  switch (true) {
    case screenSmall && headerBurgerTrueOrFalse:
      btnProfile.classList.remove('is-hidden-menu');
      singBtnOut.classList.remove('is-hidden-menu');
      signOutButton.classList.remove('is-hidden');
      break;
    case screenBig:
      btnProfile.classList.remove('is-hidden-menu');
      singBtnOut.classList.add('is-hidden-menu');
      break;
    case screenSmall:
      signOutButton.classList.add('is-hidden');
      btnProfile.classList.add('is-hidden-menu');
      break;
  }
};

function openModal() {
  authModal.classList.remove('is-hidden');
}

function closeIsModal() {
  authModal.classList.add('is-hidden');
}

function backdropClose() {
  authModal.classList.add('is-hidden');
}

function onBtnSignIn() {
  btnSignUp.classList.remove('active');
  btnSignIn.classList.add('active');
  btnSubmit.textContent = 'Sign In';
  formInputAdd.innerHTML = '';
}

function onBtnSignUp() {
  btnSignIn.classList.remove('active');
  btnSignUp.classList.add('active');
  btnSubmit.textContent = 'Sign Up';
  formInputAdd.innerHTML = `
	<div class="form-input">
		<input type="text" 
		class="form-input-name input-auth" 
		placeholder="Name" 
		name="name" 
		required />
	</div>
 `;
}

const formSubmit = e => {
  e.preventDefault();
  validateInputs();
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerHTML = message;
  inputControl.classList.remove('success');
  inputControl.classList.add('error');
};

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerHTML = '';
  inputControl.classList.remove('error');
  inputControl.classList.add('success');
};

const isValidEmail = email => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const userNameValue = formInputName.value.trim();
  const userEmailValue = userEmail.value.trim();
  const userPasswordValue = userPassword.value.trim();

  if (userNameValue === '') {
    setError(formInputName, 'Username is required.');
  } else {
    setSuccess(formInputName);
  }

  if (userEmailValue === '') {
    setError(userEmail, 'Email is required.');
  } else if (!isValidEmail(userEmailValue)) {
    setError(userEmail, 'Provide a valid email address.');
  } else {
    setSuccess(userEmail);
  }

  if (userPasswordValue === '') {
    setError(userPassword, 'Password is required.');
  } else if (userPasswordValue.length < 8) {
    setError(userPassword, 'Password must be at least 8 characters.');
  } else {
    setSuccess(userPassword);
  }
};

authForm.addEventListener('submit', formSubmit);
hederBurger.addEventListener('click', dropSingUp);
btnSubmit.addEventListener('submit', backdropClose);
btnSignIn.addEventListener('click', onBtnSignIn);
btnSignUp.addEventListener('click', onBtnSignUp);
openSignUp.addEventListener('click', openModal);
closeModal.addEventListener('click', closeIsModal);