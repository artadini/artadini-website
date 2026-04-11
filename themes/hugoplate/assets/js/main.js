// main script
(function () {
  "use strict";

  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.closest(".nav-item").classList.toggle("active");
    });
  });

  // Testimonial Slider
  // ----------------------------------------
  const testimonialSlider = document.querySelector(".testimonial-slider");

  if (testimonialSlider) {
    const testimonialSlidesCount =
      testimonialSlider.querySelectorAll(".swiper-slide").length;
    const shouldLoopTestimonials = testimonialSlidesCount > 3;

    new Swiper(".testimonial-slider", {
      spaceBetween: 24,
      loop: shouldLoopTestimonials,
      pagination: {
        el: ".testimonial-slider-pagination",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      },
    });
  }
})();
