let navToggle = document.querySelector(".nav-toggle");
let navLinks = document.querySelectorAll(".main-nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});
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
