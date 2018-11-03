// mobile full height
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const changePage = event => {
  if (!event.target.closest('[data-url]')) return;

  event.preventDefault();

  // get page location
  const pageURL = event.target.closest('[data-url]').getAttribute('data-url');

  // update active nav link
  const activeNav = document.querySelector('.nav-item.active');
  const activeLocation = activeNav
    .querySelector('.nav-link')
    .getAttribute('data-url');

  if (activeLocation !== pageURL) {
    // remove current active nav
    activeNav.classList.remove('active');

    // set new nav
    const newNav = document.querySelector(
      '.nav-link[data-url=' + pageURL + ']'
    );
    newNav.parentNode.classList.add('active');
  }

  // hide current page
  const currentPage = document.querySelector('.page-show');
  currentPage.classList.remove('page-show');

  // show new page
  const newPage = document.querySelector('.page-' + pageURL);
  newPage.classList.add('page-show');
};

document.addEventListener('click', event => {
  changePage(event);
});

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
