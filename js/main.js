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

// jQuery(document).ready(function () {
//   const tabBtns = $(".training-item");
//   const tabBannels = $(".training-bottom");
//   let activeTab = tabBannels;
//   let activeBannel = tabBtns;
//   tabBtns.click(function () {
//     jQuery(".active").removeClass("active");
//     jQuery(this).addClass("active");
//     if (activeTab === activeBannel) {
//       // Thêm class open cho tabBannel tương ứng với tabBtn đang được click
//       activeBannel = jQuery(this).closest(".training-bottom");
//       activeBannel.addClass("open");

//       // Xóa class active và open khỏi tabBtn và tabBannel đang được active
//       if (activeTab) {
//         activeBannel.removeClass("open");
//       }
//     }
//   });
// });

let tabLinks = document.querySelectorAll(".training-item");
let tabContent = document.querySelectorAll(".training-bottom");

tabLinks.forEach(function (el) {
  el.addEventListener("click", openTabs);
});

function openTabs(el) {
  let btn = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
  let electronic = btn.dataset.electronic; // lấy giá trị trong data-electronic
  console.log("electronic: ", electronic);

  tabContent.forEach(function (el) {
    el.classList.remove("open");
  });
  tabLinks.forEach(function (el) {
    el.classList.remove("active");
  });

  btn.classList.add("active");
  document.querySelector("#" + electronic).classList.add("open");
}

const banner = document.querySelector(".banner");

if (banner) {
  let swiper = new Swiper(banner.querySelector(".swiper"), {
    // Optional parameters
    // loop: true,
    // effect: "fade",
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
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

    // Loại bỏ lớp active khỏi tất cả các phần tử box-item
    boxItems.forEach((item) => {
      item.classList.remove("active");
    });

    // Thêm lớp active cho phần tử box-item hiện đang hoạt động
    boxItems[this.activeIndex].classList.add("active");
    let rotate = (360 / swiperSlides.length) * e.realIndex + -90;

    if (e.realIndex == 0) {
      document.getElementById("box").style = `transform: rotate(0deg) `;
    } else if (e.realIndex == 1) {
      document.getElementById("box").style = `transform: rotate(69.5deg)`;
    } else {
      document.getElementById("box").style = `transform: rotate(227.5deg)`;
    }
  });
}

const feeling = document.querySelector(".feeling");
if (feeling) {
  let swiperLeft = new Swiper(feeling.querySelector(".mySwiperLeft"), {
    // Optional parameters

    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
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
  });
}
const guest = document.querySelector(".guest");
if (guest) {
  let swiper = new Swiper(guest.querySelector(".mySwiperGuest"), {
    slidesPerView: 7,
    // spaceBetween: 60,

    grid: {
      rows: 2,
    },
    // spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

const slider = document.querySelector(".slider");
if (slider) {
  let swiper = new Swiper(slider.querySelector(".swiper"), {
    slidesPerView: 1.3,
    // Optional parameters
    // direction: 'vertical',
    // loop: true,

    // If we need pagination
    // pagination: {
    //   el: ".swiper-pagination",
    // },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
}

Fancybox.bind("[data-fancybox]", {
  infinite: false,
  keyboard: {
    Escape: "close",
    Delete: "close",
    Backspace: "close",
    PageUp: "next",
    PageDown: "prev",
    ArrowUp: "next",
    ArrowDown: "prev",
    ArrowLeft: "prev",
    ArrowRight: "next",
  },
  on: {
    ready: function (fancybox) {
      console.log(`fancybox ${fancybox.id} is ready`);
    },
  },
});
