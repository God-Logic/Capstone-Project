// eslint-disable-next-line func-names
document.querySelector('.hamburger').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.dropdown-menu').classList.toggle('active');
});

document.querySelectorAll('.dropdown-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.hamburger').classList.remove('active');
    document.querySelector('.dropdown-menu').classList.remove('active');
  });
});
