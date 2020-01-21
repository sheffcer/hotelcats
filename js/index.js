let navToggle = document.querySelector('.nav-toggle');
let navLinks = document.querySelectorAll('.main-nav__link')

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
  })
})
