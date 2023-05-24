const container = document.querySelector('.container');

const scrollUpButton = document.createElement('div');
scrollUpButton.classList.add('scroll-up_hidden');

const trackScroll = () => {
  const scrollOffset = window.pageYOffset;
  const windowHeight = document.documentElement.clientHeight;

  if (scrollOffset > windowHeight) {
    scrollUpButton.classList.add('scroll-up');
  } else {
    scrollUpButton.classList.remove('scroll-up');
  }
};

const scrollToTop = () => {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -65);
    setTimeout(scrollToTop, 0);
  }
};

scrollUpButton.addEventListener('click', scrollToTop);
window.addEventListener('scroll', trackScroll);

container.appendChild(scrollUpButton);
