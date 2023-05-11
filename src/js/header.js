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

/* Dark and Light themes */

const themToggleBtn = document.querySelector('.theme-toggle-button');

const toggleTheme = (btn, theme = null) => {
  const currentTheme = document.documentElement.getAttribute('theme');

  if (theme === 'dark' || !currentTheme || currentTheme === 'dark') {
    document.documentElement.setAttribute('theme', 'light');
  } else {
    document.documentElement.setAttribute('theme', 'dark');
  }
};

themToggleBtn.addEventListener('click', () => toggleTheme(themToggleBtn));

if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  toggleTheme(themToggleBtn, 'dark');
}

/* Active class for main and mobile menu */

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.main-menu-tablet-list a, .main-menu-mobile-list a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('current');
      }
})

