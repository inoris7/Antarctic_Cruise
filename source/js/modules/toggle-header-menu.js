const mainHeader = document.querySelector('.main-header');
const navigationMenu = document.querySelector('.main-header__nav');
const menuToggleButton = document.querySelector('.main-header__menu-button');
const body = document.querySelector('body');
const headerLinks = document.querySelectorAll('.navigation__link');

if (mainHeader && navigationMenu && menuToggleButton) {

  mainHeader.classList.remove('main-header--opened');
  navigationMenu.classList.remove('navigation--opened');
  mainHeader.classList.add('main-header--closed');
  navigationMenu.classList.add('navigation--closed');

  mainHeader.addEventListener('click', (evt) => {
    if (evt.target.id === 'main-header') {
      evt.stopPropagation();
      mainHeader.classList.remove('main-header--opened');
      navigationMenu.classList.remove('navigation--opened');
      mainHeader.classList.add('main-header--closed');
      navigationMenu.classList.add('navigation--closed');
      body.classList.remove('page__body--menu-opened');
    }
  });

  const setMenuToggle = (evt) => {
    evt.preventDefault();
    mainHeader.classList.toggle('main-header--opened');
    navigationMenu.classList.toggle('navigation--opened');
    mainHeader.classList.toggle('main-header--closed');
    navigationMenu.classList.toggle('navigation--closed');
    body.classList.toggle('page__body--menu-opened');
  };

  menuToggleButton.addEventListener('click', setMenuToggle);

  headerLinks.forEach((el) => {
    el.addEventListener('click', () => {
      mainHeader.classList.remove('main-header--opened');
      navigationMenu.classList.remove('navigation--opened');
      mainHeader.classList.add('main-header--closed');
      navigationMenu.classList.add('navigation--closed');
      body.classList.remove('page__body--menu-opened');
    });
  });
}
