const toogleBtn = document.querySelector('.toggle-btn');
const header = document.querySelector('header');

toogleBtn.onclick = function () {
  toogleBtn.classList.toggle('toggle-btn_active');
  header.classList.toggle('header_active');
};

function paralax(e) {
  this.querySelectorAll('.header-elements').forEach((element) => {
    const speed = element.getAttribute('data-speed');
    const x = (window.innerWidth - e.pageX * speed) / 100;
    element.style.transform = `translateX(${x}px)`;
  });
}

document.addEventListener('mousemove', paralax);
