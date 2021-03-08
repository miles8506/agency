const navbar_icon = document.querySelector('.navbar-mobile');
const navbar_wrap = document.querySelector('.navbar-mobile-wrap')
navbar_icon.addEventListener('click', function () {
  navbar_wrap.classList.toggle('current');
})