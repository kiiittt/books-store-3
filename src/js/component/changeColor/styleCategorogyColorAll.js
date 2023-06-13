export function changeCategoryAllColor(selectedCategory) {
  const allCategories = document.querySelectorAll('.category_button');
  const categoryAll = document.querySelector('.category_all');

  allCategories.forEach(category => {
    const isSelectedCategory = category.textContent === selectedCategory;

    category.style.fontWeight = isSelectedCategory ? '700' : '400';
    category.style.lineHeight = isSelectedCategory ? '1.33' : '1.12';
    category.style.textTransform = isSelectedCategory ? 'uppercase' : 'none';
    category.style.color = isSelectedCategory
      ? 'var(--color-of-categoryAll-text)'
      : 'var(--color-of-category-text)';
  });

  categoryAll.style.fontWeight = '700';
  categoryAll.style.lineHeight = '1.33';
  categoryAll.style.textTransform = 'uppercase';
  categoryAll.style.color = 'var(--color-of-categoryAll-text)';
}
