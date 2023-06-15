import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js';

// Конфігурація Firebase для вашого веб-додатку
const firebaseConfig = {
  apiKey: 'AIzaSyD8Kd3K0g3O4pf6MJ2ISuj7niFF7gY68-M',
  authDomain: 'authentication-f6359.firebaseapp.com',
  projectId: 'authentication-f6359',
  storageBucket: 'authentication-f6359.appspot.com',
  messagingSenderId: '490964966849',
  appId: '1:490964966849:web:f93da1cfe963d7548da340',
};

// Ініціалізуємо Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const authForm = document.querySelector('form#authForm');
const signUpButton = document.querySelector('#signUpButton');
const signOutButton = document.querySelector('#signOutButton');
const userBtnInfo = document.querySelector('.user-info');
const signUpBtn = document.querySelector('.btn-signup');
const modalWindow = document.querySelector('.modal-js');
const backdropAuth = document.querySelector('.backdrop-auth');
const formBtnSubmit = document.querySelector('.form--btn-submit');
const btnProfile = document.querySelector('.btn-profile');

// Перевірка стану аутентифікації
const checkAuthState = () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      userBtnInfo.querySelector('span').nextSibling.textContent =
        user.displayName;
      signUpBtn.classList.add('is-hidden');
      userBtnInfo.classList.remove('is-hidden');
    } else {
      signUpBtn.classList.remove('is-hidden');
      userBtnInfo.classList.add('is-hidden');
    }
  });
};

checkAuthState();

// Функція для реєстрації користувача
const userSignUp = (name, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userSignUpCreate => {
      const user = userSignUpCreate.user;
      console.log(user);
      backdropAuth.classList.add('is-hidden');
      modalWindow.classList.add('is-hidden');
      return updateProfile(auth.currentUser, {
        displayName: name,
      });
    })
    .then(() => {
      userBtnInfo.querySelector('span').nextSibling.textContent =
        auth.currentUser.displayName;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
};

// Функція для входу користувача
const userSignIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(userSignUpCreate => {
      backdropAuth.classList.add('is-hidden');
      modalWindow.classList.remove('is-hidden');
      console.log(userSignUpCreate);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
};

// Функція для виходу користувача
const userSignOut = () => {
  signOut(auth)
    .then(() => {
      signOutButton.classList.remove('is-hidden');
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
};

// Обробка подання форми користувача
function handleFormSubmit(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;
  const userEmail = email.value.trim();
  const userPassword = password.value.trim();

  if (formBtnSubmit.textContent.toLowerCase() === 'sign up') {
    const { name } = e.currentTarget.elements;
    const userName = name.value.trim();
    userSignUp(userName, userEmail, userPassword);
  } else if (formBtnSubmit.textContent.toLowerCase() === 'sign in') {
    userSignIn(userEmail, userPassword);
  } else {
    alert('Something went wrong');
  }
}

// Функція для відкриття і закриття профілю для виходу зі сторінки
const profileUser = () => {
  const screenSmall = window.screen.availWidth < 768;
  if (!screenSmall) {
    signOutButton.classList.toggle('is-hidden');
  }
};

signUpButton.onclick = () => {
  userSignUp();
};

signOutButton.onclick = () => {
  userSignOut();
};

authForm.onsubmit = handleFormSubmit;

btnProfile.addEventListener('click', profileUser);