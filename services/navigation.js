import { hideSidebar } from './sidebar';
import { showElement } from './styleHelper';

function returnToHomePage({
  event,
  sitePage,
  testPage,
  progress,
  buttonScrollTop,
  headerContent,
  sidebar,
}) {
  event.preventDefault();
  sitePage.classList.remove('hidden');
  testPage.classList.add('hidden');

  buttonScrollTop.classList.remove('hidden');
  showElement(progress);
  headerContent.classList.add('hidden');
  hideSidebar(sidebar);
}

function goToInfo({
  event,
  CURRENT_TEST,
  allTests,
  startTest,
  sidebar,
  sideBarInfo,
}) {
  event.preventDefault();

  if (CURRENT_TEST === allTests) {
    startTest();
    hideSidebar(sidebar);
  } else {
    const buttonText = sideBarInfo.textContent;
    sideBarInfo.innerHTML = 'для начала пройдите тест';
    setTimeout(() => {
      sideBarInfo.innerHTML = buttonText;
    }, 2000);
  }
}

export { returnToHomePage, goToInfo };
