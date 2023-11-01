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
// document.querySelectorAll(".mobile__menu-link").forEach((link) => {
//   link.addEventListener("click", function () {
//     this.parentNode.classList.toggle("change");

//     const menu = this.parentNode.querySelector("#mobile__drop-menu");
//     menu.style.display = menu.style.display === "block" ? "none" : "block";
//   });
// });

$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $("#header__MDA").addClass("sticky");
    } else {
      $("#header__MDA").removeClass("sticky");
    }
  });
});

// let training_item = document.getElementById("training-item");
// training_item.onclick = () => {
//   training_item.classList.toggle("active");
// };
$(document).ready(function () {
  $(".training-item-content").click(function () {
    $(this).parent().toggleClass("active");
  });
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  // loop: true,
  effect: "coverflow",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
// swiper.on("slideChange", function () {
//   // Loại bỏ lớp active khỏi tất cả các phần tử box-item
//   $("#box-item").removeClass("active");

//   // Thêm lớp active cho phần tử box-item hiện đang hoạt động
//   $(this.slides[this.activeIndex]).find("#box-item").addClass("active");
// });
swiper.on("slideChange", function () {
  $("#box-img").parent().toggleClass("active");
});

// $(document).ready(function () {
//   // Khởi tạo Swiper
//   const swiper = new Swiper(".swiper");

//   // Thêm sự kiện slidechange cho Swiper
// });
