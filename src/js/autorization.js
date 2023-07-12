import {
  openSignUp,
  userInfo,
  btnProfile,
  hederBurger,
  closeModal,
  authModal,
  btnSubmit,
  btnSignUp,
  btnSignIn,
  formInputAdd,
  inputName,
  mobileMenu,
  singBtnOut,
  signOutButton,
  settingsUser,
  passwordInput,
  checkAuthOpen,
  iconLookPasswork,
  iconEye,
  iconEyeSlash,
  svgEye,
  formInputName,
  userEmail,
  userPassword,
  authForm
} from './component/auth-file/variables';

passwordInput.addEventListener('input', e => {
  passwordInputToggle(e);
});

function hideElement(element) {
  element.classList.add('is-hidden');
}

function showElement(element) {
  element.classList.remove('is-hidden');
}

function passwordInputToggle(e) {
  const valuePassword = e.target.value;

  if (valuePassword !== '') {
    iconLookPasswork.classList.add('icon-look-off');
    iconEye.classList.remove('icon-eye-off');
    showElement(checkAuthOpen);
  } else {
    iconLookPasswork.classList.remove('icon-look-off');
    iconEye.classList.add('icon-eye-off');
    hideElement(checkAuthOpen);
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
      showElement(signOutButton);
      showElement(settingsUser);
      break;
    case screenBig:
      btnProfile.classList.remove('is-hidden-menu');
      singBtnOut.classList.add('is-hidden-menu');
      break;
    case screenSmall:
      hideElement(signOutButton);
      hideElement(settingsUser);
      btnProfile.classList.add('is-hidden-menu');
      break;
  }
};

function openModal() {
  showElement(authModal);
}

function closeIsModal() {
  hideElement(authModal);
}

function backdropClose() {
  hideElement(authModal);
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
