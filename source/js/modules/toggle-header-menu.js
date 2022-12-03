const mainHeader = document.querySelector('.main-header');
const navigationMenu = document.querySelector('.main-header__nav');
const menuToggleButton = document.querySelector('.main-header__menu-button');

if (mainHeader && navigationMenu && menuToggleButton) {
  mainHeader.classList.remove('main-header--opened');
  navigationMenu.classList.remove('navigation--opened');
  mainHeader.classList.add('main-header--closed');
  navigationMenu.classList.add('navigation--closed');

  const setMenuToggle = (evt) => {
    evt.preventDefault();
    mainHeader.classList.toggle('main-header--opened');
    navigationMenu.classList.toggle('navigation--opened');
    mainHeader.classList.toggle('main-header--closed');
    navigationMenu.classList.toggle('navigation--closed');
  };

  menuToggleButton.addEventListener('click', setMenuToggle);
}
