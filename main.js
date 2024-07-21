import {
  test1,
  test2,
  test3,
  test4,
  test5,
  test6,
  test7,
  test8,
  test9,
  test10,
  test11,
  waitResult,
  result,
} from './markups';
import {
  validation,
  changeProgress,
  hideSidebar,
  showSidebar,
  scrollTop,
  changeFinalHeaderTitleComplete,
  changeFinalHeaderTitleStart,
  fetchData,
  createMarkup,
  hideElement,
  showElement,
  returnToHomePage,
  goToInfo,
} from './services';

const URL = 'https://swapi.dev/api/people/1/';

const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');
const sidebarCloseButton = document.querySelector('.button-close');
const buttonScrollTop = document.querySelector('.button-scroll__top');
const sitePage = document.querySelector('.site-page');
const testPage = document.querySelector('.test_page');
const progress = document.querySelector('.progress');
const progressSuccess = document.querySelector('.progress-success');
const testWrapper = document.querySelector('.test-first');
const headerContent = document.querySelector('.header-content');
const sideBarHome = document.querySelector(
  '.sidebar-menu__link[data-side="home"]',
);
const sideBarInfo = document.querySelector(
  '.sidebar-menu__link[data-side="info"]',
);
const sideBarTest = document.querySelector(
  '.sidebar-menu__link[data-side="test"]',
);

let CURRENT_TEST = 0;

const tests = [
  test1,
  test2,
  test3,
  test4,
  test5,
  test6,
  test7,
  test8,
  test9,
  test10,
  test11,
  waitResult,
  result,
];

const ALL_TEST = tests.length - 2;

function startTest() {
  sitePage.classList.add('hidden');
  testPage.classList.remove('hidden');
  buttonScrollTop.classList.add('hidden');

  testWrapper.innerHTML = tests[CURRENT_TEST];
  validation(testWrapper);
  headerContent.classList.remove('hidden');
  changeProgress(CURRENT_TEST, ALL_TEST, progressSuccess);

  if (CURRENT_TEST === tests.length - 1) {
    hideElement(progress);
    const phoneButton = document.querySelector('.result-phone');
    const resultMarkup = document.querySelector('.result-markup');

    phoneButton.addEventListener('click', async () => {
      resultMarkup.innerHTML = `
        <span class="text-white">Loading...</span>
      `;

      try {
        const res = await fetchData(URL);
        console.log(res);
        resultMarkup.innerHTML = createMarkup(res);
      } catch (error) {
        resultMarkup.innerHTML = `
          <span>${error.message}</span>
        `;
      }
    });
  }
}

function handleBodyClick(e) {
  if (!e.target.classList.contains('button-start-test')) {
    return;
  }
  startTest();
}

function handleSubmit(e) {
  if (!e.target.classList.contains('button')) {
    return;
  }
  e.preventDefault();

  if (CURRENT_TEST < tests.length - 1) {
    CURRENT_TEST++;
    changeProgress(CURRENT_TEST, ALL_TEST, progressSuccess);
    testWrapper.innerHTML = tests[CURRENT_TEST];
    validation(testWrapper);
  }

  if (CURRENT_TEST === ALL_TEST) {
    setTimeout(() => {
      CURRENT_TEST++;
      testWrapper.innerHTML = tests[CURRENT_TEST];

      hideElement(progress);
      changeFinalHeaderTitleComplete(headerContent);

      const phoneButton = document.querySelector('.result-phone');
      const resultMarkup = document.querySelector('.result-markup');

      phoneButton.addEventListener('click', async () => {
        resultMarkup.innerHTML = `
          <span class="text-white">Loading...</span>
        `;

        try {
          const res = await fetchData(URL);
          console.log(res);
          resultMarkup.innerHTML = createMarkup(res);
        } catch (error) {
          resultMarkup.innerHTML = `
            <span>${error.message}</span>
          `;
        }
      });
    }, 2000);
  }
}

burger.addEventListener('click', () => showSidebar(sidebar));
sidebarCloseButton.addEventListener('click', () => hideSidebar(sidebar));
buttonScrollTop.addEventListener('click', scrollTop);
document.body.addEventListener('click', handleBodyClick);
testPage.addEventListener('click', handleSubmit);

sideBarHome.addEventListener('click', (event) =>
  returnToHomePage({
    event,
    sitePage,
    testPage,
    progress,
    buttonScrollTop,
    headerContent,
    sidebar,
  }),
);

sideBarInfo.addEventListener('click', (event) =>
  goToInfo({
    event,
    CURRENT_TEST,
    allTests: tests.length - 1,
    startTest,
    sidebar,
    sideBarInfo,
  }),
);

sideBarTest.addEventListener('click', (e) => {
  e.preventDefault();
  startTest();
  hideSidebar(sidebar);
});
