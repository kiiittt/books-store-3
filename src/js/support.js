const funds = [
    {
        title: 'Save the Children',
        url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
        img: 'https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund1.png',
        img2x: 'https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund1%402x.png',
    },
    {
        title: 'Project HOPE',
        url: 'https://www.projecthope.org/country/ukraine/',
        img: 'https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund2.png',
        img2x: 'https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund2%402x.png',
    },
    {
        title: 'UNITED24',
        url: 'https://u24.gov.ua/uk',
        img: 'https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund3.png',
        img2x: 'https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund3%402x.png',
    },
    {
        title: 'International Medical Corps',
        url: 'https://internationalmedicalcorps.org/country/ukraine/',
        img: 'https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund4.png',
        img2x: 'https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund4%402x.png',
    },
    {
        title: 'Medicins Sans Frontieres',
        url: 'https://www.msf.org/ukraine',
        img: 'https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund5.png',
        img2x: 'https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund5%402x.png',
    },
    {
        title: 'RAZOM',
        url: 'https://www.razomforukraine.org/',
        img: 'https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund6.png',
        img2x: 'https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund6%402x.png',
    },
    {
        title: 'Action against hunger',
        url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
        img: 'https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund7.png',
        img2x: 'https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund7%402x.png',
    },
    {
        title: 'World vision',
        url: 'https://www.wvi.org/emergencies/ukraine',
        img: 'https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund8.png',
        img2x: 'https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund8%402x.png',
    },
    {
        title: 'Serhiy Prytula Charity Foundation',
        url: 'https://prytulafoundation.org/en',
        img: 'https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund9.png',
        img2x: 'https://funds-imgs.s3.eu-north-1.amazonaws.com/Fund9%402x.png',
    },
]

const supportList = document.querySelector('.support-list');
const supportBtn = document.querySelector('.support-button');

let position = 0;
let page = 0;
let perPage = 0;

getPage();

window.addEventListener('resize', (e) => {
    clearFunds();
    position = 0;
    page = 0;
    getPage();
});

supportBtn.addEventListener('click', onShowMoreFunds);

function getPage() {
    if (window.screen.availWidth < 768) {
        perPage = 4;
    } else {
        perPage = 6;
    }
    let fundsElements = getArrayElements(page, perPage, funds);
    supportMarkup(fundsElements);
}

function getArrayElements(currentPage, pageSize, array) {
    if ((currentPage * pageSize + pageSize) <= array.length) {
        return array.slice(currentPage * pageSize, currentPage * pageSize + pageSize);
    } else {
        return array.slice(currentPage * pageSize);
    }
}

function supportMarkup(array) {
    const markup = array.map(({ title, url, img, img2x }) => {
        position += 1;
        return `
            <li class="support-list-item"> 
                <span class="fund-number">0${position}</span>
                <a class="fund-link" href="${url}" target="_blank">
                    <img class="fund-logo" srcset="${img} 1x, ${img2x} 2x" src="${img}" alt="${title}"/>
                </a>
            </li>`
    }).join('');
    
    supportList.innerHTML = markup;
}

function clearFunds() {
    supportList.innerHTML = '';
}

function onShowMoreFunds() {
    if ((page + 1) < Math.ceil(funds.length/perPage)) {
        page += 1;
    } else {
        page = 0;
        position = 0;
    }
    clearFunds();
    getPage();
}