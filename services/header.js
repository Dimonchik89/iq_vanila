function changeFinalHeaderTitleComplete(parent) {
  const headerTitle = parent.querySelector('.header-title');
  headerTitle.classList.add('header-title__xl');
  headerTitle.textContent = 'Готово!';
}

function changeFinalHeaderTitleStart(parent) {
  const headerTitle = parent.querySelector('.header-title');
  headerTitle.classList.remove('header-title__xl');
  headerTitle.textContent = 'ТЕСТ НА ОПРЕДЕЛЕНИЕ IQ';
}

export { changeFinalHeaderTitleComplete, changeFinalHeaderTitleStart };
