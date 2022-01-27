const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function () {
  navbar.classList.toggle('navbar-scroll', window.scrollY > 0);
});
