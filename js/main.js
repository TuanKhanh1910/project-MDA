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
