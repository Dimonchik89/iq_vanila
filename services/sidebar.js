import { lock, unlock } from 'tua-body-scroll-lock';

function showSidebar(element) {
  element.classList.add('show');
  lock(element, { overflowType: 'clip' });
}

function hideSidebar(element) {
  element.classList.remove('show');
  unlock(element);
}

export { showSidebar, hideSidebar };
