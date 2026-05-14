// Data para los slides del Hero
const heroSlidesData = [
  {
    title: "¡Bienvenido a mi sitio!",
    text: "Este texto aparece sobre el video.",
    videoSrc: "/assets/slogan-video.mp4"
  },
  {
    title: "Segundo Slide",
    text: "Este es el texto del segundo slide.",
    videoSrc: "/assets/slogan-video.mp4"
  },
  {
    title: "Tercer Slide",
    text: "Este es el texto del tercer slide.",
    videoSrc: "/assets/slogan-video.mp4"
  }
];

const heroWrapper = document.getElementById('hero-wrapper');
if (heroWrapper) {
  heroSlidesData.forEach(slide => {
    const slideHTML = `
      <div class="swiper-slide">
        <div class="video-wrapper">
          <video class="background-video" autoplay muted loop playsinline>
            <source src="${slide.videoSrc}" type="video/mp4">
          </video>
          <div class="content">
            <h1>${slide.title}</h1>
            <p>${slide.text}</p>
          </div>
        </div>
      </div>
    `;
    heroWrapper.insertAdjacentHTML('beforeend', slideHTML);
  });
}

// Initialize Hero Swiper
const heroSwiper = new Swiper('.hero-swiper', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'slide',
  fadeEffect: {
    crossFade: true
  },
  speed: 1000,
  // Disable global grab cursor
  grabCursor: true,
  // Allow dragging only from slide-content area
  touchEventsTarget: 'wrapper',
  simulateTouch: false,
  allowTouchMove: true,
  // Custom touch handling
  on: {
    touchStart: function (swiper, event) {
      const target = event.target;
      const slideContent = target.closest('.slide-content');

      // Only allow dragging if touch started on slide-content
      if (!slideContent) {
        swiper.allowTouchMove = false;
      } else {
        swiper.allowTouchMove = true;
      }
    },
    touchEnd: function (swiper) {
      // Re-enable touch move after touch ends
      swiper.allowTouchMove = true;
    }
  }
});

// Initialize Services Swiper
const servicesSwiper = new Swiper('.services-swiper', {
  loop: true,
  autoHeight: true,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: true,
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'slide',
  fadeEffect: {
    crossFade: true
  },

  speed: 1000,
  // Disable global grab cursor
  grabCursor: true,
  // Allow dragging only from slide-content area
  touchEventsTarget: 'wrapper',
  simulateTouch: false,
  allowTouchMove: true,
  // Custom touch handling
  on: {
    touchStart: function (swiper, event) {
      const target = event.target;
      const slideContent = target.closest('.slide-content-services');

      // Only allow dragging if touch started on slide-content
      if (!slideContent) {
        swiper.allowTouchMove = false;
      } else {
        swiper.allowTouchMove = true;
      }
    },
    touchEnd: function (swiper) {
      // Re-enable touch move after touch ends
      swiper.allowTouchMove = true;
    }
  }
});


