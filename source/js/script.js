(function() {
  const header = `
     <header class="page__header  main-header">
      <div class="main-header__logo-container  content">
        <a class="main-header__logo  logo" href="#">
          Лого
        </a>
      </div>

      <nav class="main-nav">
        <div class="content">
          <button class="main-nav__button  js-button">
            <span class="visually-hidden">Открыть меню</span>
          </button>
          <ul class="main-nav__list  js-menu">
            <li>
              <a class="main-nav__link" href="#">О компании</a>
            </li>
            <li>
              <a class="main-nav__link" href="#">Услуги</a>
            </li>
            <li>
              <a class="main-nav__link" href="#">О продукте</a>
            </li>
            <li>
              <a class="main-nav__link" href="#">Контакты</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    `;

  const footer = `
    <footer class="main-footer">
      <div class="main-footer__content  content">
        <a class="main-footer__link" href="tel:+79999999999">+7 (999) 999 99 99</a>
      </div>
    </footer>
  `;

  const switches = {
    'about-company': 0,
    'services': 1,
    'about-product': 2,
    'contacts': 3
  };
  const body = document.querySelector('.page');
  const currentPage = switches[body.id];

  body.insertAdjacentHTML('afterbegin', header);
  body.insertAdjacentHTML('beforeend', footer);
  const links = document.querySelectorAll('.main-nav__link');
  const button = document.querySelector('.js-button');
  const menu = document.querySelector('.js-menu');

  links[currentPage].classList.add('main-nav__link--active');

  button.addEventListener('click', () => {
    menu.classList.toggle('js-show');
  });

  document.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('main-nav__link') && !evt.target.classList.contains('js-button') && menu.classList.contains('js-show')) {
      menu.classList.remove('js-show');
    }
  });
})();
