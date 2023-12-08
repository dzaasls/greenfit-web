// Toggle class active untuk hamburger recipe
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger recipe di klik
document.querySelector('#hamburger-recipe').onclick = () => {
  navbarNav.classList.toggle('active');
};

//toggle klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-recipe');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
