import { funds } from './support-export/support-funds';
import { markupCardFund } from './support-export/markup-support';
import Swiper from 'swiper';

const supportList = document.querySelector('.support-list');
const supportBtn = document.querySelector('.support-button');

let position = 0;

const addLeadingZero = value => {
  return String(value).padStart(2, '0');
};

const markupSetFunds = funds
  .map((el, i) => {
    position = addLeadingZero(i + 1);

    return markupCardFund(el, position);
  })
  .join('');

supportList.innerHTML = markupSetFunds;

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  spaceBetween: 20,
  slidesPerView: 'auto',
  rewind: true,

  navigation: {
    nextEl: '.support-button',
  },

  touchEventsTarget: 'container',
});

swiper.update();

// Ініціалізуємо змінну для зберігання стану кнопки
let isLastSlide = false;

supportBtn.addEventListener('click', () => {
  const lastIndex = swiper.slides.length - 1;

  if (isLastSlide) {
    swiper.slideTo(0);
    isLastSlide = false;
  } else {
    swiper.slideTo(lastIndex);
    isLastSlide = true;
  }
});
