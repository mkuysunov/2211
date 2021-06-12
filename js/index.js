const toogleBtn = document.querySelector('.toggle-btn');
const header = document.querySelector('header');
const header_menu_links = document.querySelector('.header-menu').querySelectorAll('a');
const copyrightCurrentDate = document.querySelector('.copyright-current-date');

function handleToggleBtn() {
  toogleBtn.classList.toggle('toggle-btn_active');
  header.classList.toggle('header_active');
}

toogleBtn.onclick = handleToggleBtn;

header_menu_links.forEach((link) => {
  link.onclick = handleToggleBtn;
});

copyrightCurrentDate.innerHTML = new Date().getFullYear();
