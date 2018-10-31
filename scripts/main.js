const changePage = event => {
  if (!event.target.closest('[data-url]')) return;

  // get page identity
  const pageURL = event.target.closest('[data-url]').getAttribute('data-url');

  // hide current page
  const currentPage = document.querySelector('.page-show');
  currentPage.classList.remove('page-show');

  // show new page
  const newPage = document.querySelector('.page-' + pageURL);
  newPage.classList.add('page-show');
};

document.addEventListener('click', function(event) {
  changePage(event);
});
