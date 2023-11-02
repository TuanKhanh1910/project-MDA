let icon__bar = document.getElementById("icon__bar");
let header__overlay = document.getElementById("header__overlay");
let header__mobile = document.getElementById("header__mobile");
icon__bar.onclick = function () {
  icon__bar.classList.toggle("active");
  header__overlay.classList.toggle("open");
  header__mobile.classList.toggle("open");
};
$(document).ready(function () {
  $(".mobile__menu-link").click(function () {
    $(this).parent().toggleClass("change");
    $(this).parent().children("#mobile__drop-menu").slideToggle();
  });
});

$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $("#header__MDA").addClass("sticky");
    } else {
      $("#header__MDA").removeClass("sticky");
    }
  });
});

// };
$(document).ready(function () {
  $(".training-item-content").click(function () {
    $(this).parent().toggleClass("active");
  });
});
const banner = document.querySelector(".banner");

if (banner) {
  let swiper = new Swiper(banner.querySelector(".swiper"), {
    // Optional parameters
    // loop: true,
    // effect: "fade",
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    // If we need pagination
    pagination: {
      el: banner.querySelector(".swiper-pagination"),
    },
  });
  swiper.on("slideChange", function (e) {
    const boxItems = document.querySelectorAll(".box-item");
    const boxItemsActive = document.querySelectorAll(".box-item.active");
    // const boxCircle = document.getElementById("box");
    const swiperSlides = document.querySelectorAll(".swiper .swiper-slide");
    console.log("boxItems: ", boxItems);

    // Loại bỏ lớp active khỏi tất cả các phần tử box-item
    boxItems.forEach((item) => {
      item.classList.remove("active");
    });

    // Thêm lớp active cho phần tử box-item hiện đang hoạt động
    boxItems[this.activeIndex].classList.add("active");
    let rotate = (360 / swiperSlides.length) * e.realIndex + -90;

    // if (e.realIndex == 0) {
    //   document.getElementById("box").style = `transform: rotate(0deg) `;
    // } else {
    //   document.getElementById("box").style = `transform: rotate(${rotate}deg)`;
    // }
    if (e.realIndex == 0) {
      document.getElementById("box").style = `transform: rotate(0deg) `;
    } else if (e.realIndex == 1) {
      document.getElementById("box").style = `transform: rotate(69.5deg)`;
    } else {
      document.getElementById("box").style = `transform: rotate(227.5deg)`;
    }
    // let rotate = (360 / swiperSlides.length) * e.realIndex * -1 + -90;
    // console.log("rotate: ", rotate);
    // console.log("swiperSlides.length: ", swiperSlides.length);

    // document.getElementById("box").style.transform.rotate = `(${rotate}deg)`;
  });
}

const feeling = document.querySelector(".feeling");
if (feeling) {
  let swiper = new Swiper(feeling.querySelector(".mySwiper"), {
    // Optional parameters
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 30,
    mousewheel: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });
}

const mdaEvent = document.querySelector(".event");
if (mdaEvent) {
  console.log("mdaEvent: ", mdaEvent);
  let swiper = new Swiper(mdaEvent.querySelector(".mySwiper"), {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    mousewheel: true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      500: {
        slidesPerView: 1,
      },
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });
}
