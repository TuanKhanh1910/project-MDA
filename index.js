export default function ParallaxModule() {
  function setPositionCircle() {
    var circleContainer = document.querySelector(".hbn-circle");
    if (circleContainer) {
      var circleItems = document.querySelectorAll(".hbn-circle-item");
      var radius = circleContainer.clientWidth / 2;
      var angle = 360 / circleItems.length;
      Array.from(circleItems).forEach(function (item, index) {
        var itemAngle = angle * index;
        var itemPositionX =
          radius + radius * Math.cos((itemAngle * Math.PI) / 180);
        var itemPositionY =
          radius + radius * Math.sin((itemAngle * Math.PI) / 180);

        item.style.left = itemPositionX - item.clientWidth / 2 + "px";
        item.style.top = itemPositionY - item.clientHeight / 2 + "px";
      });
    }
  }
  setPositionCircle();
  window.addEventListener("resize", () => {
    setPositionCircle();
  });

  const parallax = document.querySelectorAll(".prl-img");

  if (parallax) {
    new Ukiyo(parallax, {
      scale: 1.4, // 1~2 is recommended
      speed: 1.4, // 1~2 is recommended
      willChange: true, // This may not be valid in all cases
      wrapperClass: "ukiyo-wrapper",
      externalRAF: false,
    });
  }
}
