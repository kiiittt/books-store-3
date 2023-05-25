import { funds } from './support-export/support-funds'

const supportList = document.querySelector('.support-list');
const supportBtn = document.querySelector('.support-button');

let position = 0;
let page = 0;
let perPage = 0;

getPage();

window.addEventListener('resize', () => {
  clearFunds();
  position = 0;
  page = 0;
  getPage();
});

supportBtn.addEventListener('click', onShowMoreFunds);

function getPage() {
  if (window.innerWidth < 768) {
    perPage = 4;
  } else {
    perPage = 6;
  }
  const fundsElements = getArrayElements(page, perPage, funds);
  supportMarkup(fundsElements);
}

function getArrayElements(currentPage, pageSize, array) {
  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  return array.slice(startIndex, endIndex);
}

function supportMarkup(array) {
  const markup = array.map(({ title, url, img, img2x }) => {
    position += 1;
    const fundNumber = addLeadingZero(position);
    return `
      <li class="support-list-item"> 
        <span class="fund-number">${fundNumber}</span>
        <a class="fund-link" href="${url}" target="_blank">
          <img class="fund-logo" srcset="${img} 1x, ${img2x} 2x" src="${img}" alt="${title}"/>
        </a>
      </li>`;
  }).join('');

  supportList.innerHTML = markup;
}

function clearFunds() {
  supportList.innerHTML = '';
}

function onShowMoreFunds() {
  if (page + 1 < Math.ceil(funds.length / perPage)) {
    page += 1;
  } else {
    page = 0;
    position = 0;
  }
  clearFunds();
  getPage();
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}