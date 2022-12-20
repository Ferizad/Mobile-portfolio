const hamburger = document.querySelector('.hamburger_img');
const closeHamburgerBtn = document.querySelector('.close_hamburger');
const modalMenuContainer = document.querySelector('.modal_menu_container');

const openMobileMenu = (e) => {
  e.preventDefault();
  modalMenuContainer.classList.remove('hide1');
};

const closeMobileMenu = (e) => {
  e.preventDefault();
  modalMenuContainer.classList.add('hide1');
};

hamburger.addEventListener('click', openMobileMenu);
closeHamburgerBtn.addEventListener('click', closeMobileMenu);