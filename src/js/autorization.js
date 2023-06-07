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


const dropSingUp = () => {
    openSignUp.classList.toggle('is-hidden-x');
    userInfo.classList.toggle('is-hidden-x');
}

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

hederBurger.addEventListener('click', dropSingUp);
btnSubmit.addEventListener('click', backdropClose);
btnSignIn.addEventListener('click', onBtnSignIn);
btnSignUp.addEventListener('click', onBtnSignUp);
openSignUp.addEventListener('click', openModal);
closeModal.addEventListener('click', closeIsModal);
