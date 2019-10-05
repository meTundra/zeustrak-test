var button = document.querySelector('.js-button');
var menu = document.querySelector('.js-menu');

button.addEventListener('click', function () {
  menu.classList.toggle('js-show');
});

document.addEventListener('click', function (evt) {
  if (!evt.target.classList.contains('main-nav__link') && !evt.target.classList.contains('js-button') && menu.classList.contains('js-show')) {
    menu.classList.remove('js-show');
  }
});
