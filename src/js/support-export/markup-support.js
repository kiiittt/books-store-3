export const markupCardFund = (
  { title, url, img, img2x },
  position
) => `  <li class="support-list-item swiper-slide"> 
        <span class="fund-number">${position}</span>
        <a class="fund-link" href="${url}" target="_blank">
          <img class="fund-logo" srcset="${img} 1x, ${img2x} 2x" src="${img}" alt="${title}" loading="lazy" />
        </a>
      </li>`;
