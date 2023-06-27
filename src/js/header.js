import ThemeToggle from './utils/DetectDarkMode/detectDarkMode'

const themeToggle = new ThemeToggle();
/* Mobile menu open */
(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    booksRow1: document.querySelector('[data-background-books__row1]'),
    booksRow2: document.querySelector('[data-background-books__row2]'),
    booksRow3: document.querySelector('[data-background-books__row3]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
    refs.booksRow1.classList.toggle('roll-left-open');
    refs.booksRow2.classList.toggle('roll-right-open');
    refs.booksRow3.classList.toggle('roll-left-open');
  }
})();

/* Change icon burger*/
document.getElementById('open-button-menu').addEventListener(
  'click',
  function (e) {
    var target = e.target;

    target.classList.toggle('icon-burger');
    target.classList.toggle('icon-close');
  },
  false
);

//Сторінка на якій ми перебуваємо
const activePage = document
  .querySelector('.main-menu-tablet-list')
  .querySelectorAll('a');
const activePageMobile = document
  .querySelector('.main-menu-mobile-list')
  .querySelectorAll('a');

if (document.querySelector('.active-page') === null) {
  for (let index = 0; index < activePage.length; index++) {
    activePage[index].classList.toggle('current');
    activePageMobile[index].classList.toggle('current');
  }
}


document
  .getElementById('open-button-menu')
  .addEventListener('click', function () {
    const expanded = this.getAttribute('aria-expanded');
    const newExpandedValue = expanded === 'true' ? 'false' : 'true';
    this.setAttribute('aria-expanded', newExpandedValue);

    if (newExpandedValue === 'true') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
