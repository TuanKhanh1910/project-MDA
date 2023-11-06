import SearchModule from "./SearchModule.js";
export default function SwiperModule() {
  function functionSlider(
    element,
    isLoop,
    isCenter,
    betWeenInit,
    autoplay,
    effects,
    breakpoint
  ) {
    const swiperSlider = document.querySelectorAll(element);
    if (swiperSlider) {
      swiperSlider.forEach((item) => {
        const swiper = item.querySelector(".swiper");
        const pagi = item.querySelector(".swiper-pagination");
        const next = item.querySelector(".swiper-next");
        const prev = item.querySelector(".swiper-prev");
        var slide = new Swiper(swiper, {
          watchSlidesProgress: true,
          speed: 1200,
          autoplay: autoplay,
          pagination: {
            el: pagi,
            type: "bullets",
            clickable: true,
          },
          grabCursor: true,
          navigation: {
            nextEl: next,
            prevEl: prev,
          },
          // slidesPerGroup: 2,
          centeredSlides: isCenter,
          loop: isLoop,
          spaceBetween: betWeenInit,
          effect: effects,
          fadeEffect: {
            crossFade: true,
          },
          breakpoints: breakpoint,
        });
      });
    }
  }

  const hbnSlides = document.querySelectorAll(".hbn-slider .swiper-slide");
  const hbnCircle = document.querySelector(".hbn-circle");
  const hbnCircleItems = document.querySelectorAll(".hbn-circle-item");

  var hbnSlider = new Swiper(".hbn-slider .swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    // loopedSlides: 6,
    loop: false,
    autoplay: {
      delay: 7000,
    },
    pagination: {
      el: ".hbn-slider .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".hbn-slider .swiper-next",
      prevEl: ".hbn-slider .swiper-prev",
    },
    speed: 1600,
    effect: "coverflow",
    grabCursor: true,
    parallax: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0.05,
      depth: 0,
      stretch: 0,
      modifier: 1,
      slideShadows: !1,
    },
    on: {
      init: function (e) {
        if (e.realIndex == 0) {
          hbnCircle.style = `transform: rotate(-90deg)`;
        }
        let swiper = this;
        for (let i = 0; i < swiper.slides.length; i++) {
          $(swiper.slides[i])
            .find(".hbn-img")
            .attr({
              "data-swiper-parallax": 0.9 * swiper.width,
              "data-swiper-paralalx-opacity": 0.1,
            });
        }
        let index = swiper.activeIndex;
        $(swiper.slides).removeClass("active");
        $(swiper.slides[index]).addClass("active");
        document
          .querySelectorAll(".hbn-slider .swiper-slide")[0]
          .classList.add("is-active");
      },
      resize: function () {
        this.update();
      },
      slideChange: function (e) {
        let rotate = (360 / hbnSlides.length) * e.realIndex * -1 + -90;
        $(".hbn-circle-item.active").removeClass("active");
        hbnCircleItems[e.realIndex].classList.add("active");
        if (e.realIndex == 0) {
          hbnCircle.style = `transform: rotate(-90deg)`;
        } else {
          hbnCircle.style = `transform: rotate(${rotate}deg)`;
        }

        $(".hbn-slider .swiper-slide.is-active").removeClass("is-active");
      },
      reachEnd: function (e) {
        console.log(e);
      },
    },
  });
  if (hbnCircleItems) {
    hbnCircleItems.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        hbnSlider.slideTo(index);
      });
    });
  }
  hbnSlider.on("transitionEnd", function (e) {
    document
      .querySelectorAll(".hbn-slider .swiper-slide")
      [e.realIndex].classList.add("is-active");
  });
}
