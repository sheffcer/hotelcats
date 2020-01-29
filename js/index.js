let navToggle = document.querySelector(".nav-toggle");
let navLinks = document.querySelectorAll(".main-nav__link");
let modal = document.querySelector('.modal-cart');
let modalShadow = document.querySelector('.modal-cart__shadow');
let modalButton = document.querySelector('.modal-cart .btn');
let modalClose = document.querySelector('.modal-cart__close');
let modalButtons = document.querySelectorAll(".btn--room");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

modalButtons.forEach(button => {
  button.addEventListener("click", () => {
    modalShadow.style.cssText = 'display:block';
    modal.style.cssText = 'display:block';
  });
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

modalButton.addEventListener('click', function () {
  modalShadow.style.cssText = 'display:none';
  modal.style.cssText = 'display:none';

});

modalClose.addEventListener('click', function () {
  modalShadow.style.cssText = 'display:none';
  modal.style.cssText = 'display:none';
})

$("#rooms").owlCarousel({
  // items: 5,
  merge: true,
  loop: true,
  // margin: 10,
  lazyLoad: true,
  autoplay: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true,
      loop: true
    },
    320: {
      items: 1,
      nav: false,
      dots: true
    },
    // 480: {
    //     items: 2,
    //     nav: false,
    //     dots: false
    // },
    768: {
      items: 1,
      nav: false,
      dots: true
    },
    1366: {
      items: 1,
      nav: false,
      loop: true
    }
  }
});

$("#reviews").owlCarousel({
  // items: 5,
  merge: true,
  loop: true,
  margin: 10,
  lazyLoad: true,
  autoplay: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true,
      loop: true
    },
    320: {
      items: 1,
      nav: false,
      dots: true
    },
    // 480: {
    //     items: 2,
    //     nav: false,
    //     dots: false
    // },
    768: {
      items: 2,
      nav: false,
      dots: true
    },
    1366: {
      items: 3,
      nav: false,
      loop: true
    }
  }
});
