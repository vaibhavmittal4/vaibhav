window.addEventListener("scroll", () => {
  let scrollMeter = window.scrollY;
  console.log(scrollMeter);

  if (scrollMeter > 733) {
    aboutSectionAnimate();
  }
});

function aboutSectionAnimate() {
  let AboutAnimateRight = document.getElementsByClassName("AboutAnimateRight");
  let AboutAnimateLeft = document.getElementsByClassName("AboutAnimateLeft");

  for (i = 0; i < AboutAnimateLeft.length; i++) {
    AboutAnimateLeft.classList.add("fadeInLeft");
  }
}
