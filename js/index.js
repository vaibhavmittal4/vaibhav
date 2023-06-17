let boxes = document.getElementsByClassName("boxes");
let navbarr = document.getElementById("navbar");
console.log(navbarr);
let i = 1;

function dismantleImage() {
  boxes[0].style.height = "60%";
  boxes[0].style.width = "60%";

  boxes[1].style.height = "60%";
  boxes[1].style.width = "60%";
  boxes[1].style.margin = "0 0 0 50px";

  boxes[2].style.height = "60%";
  boxes[2].style.width = "60%";
  boxes[2].style.margin = "50px 0 0 0";

  boxes[3].style.height = "60%";
  boxes[3].style.width = "60%";
  boxes[3].style.margin = "50px 0 0 50px";

  // boxes[0].style.transform = "translate(-40px, -60px) rotate(-15deg)";

  // boxes[1].style.transform = "translate(40px, -100px) rotate(25deg)";

  // boxes[2].style.transform = "translate(-40px, 80px) rotate(15deg)";

  // boxes[2].style.background = "red";

  // boxes[3].style.transform = "translate(40px, 80px) rotate(-15deg)";
}

function assembleImage() {
  boxes[0].style.height = "100%";
  boxes[0].style.width = "100%";

  boxes[1].style.height = "100%";
  boxes[1].style.width = "100%";
  boxes[1].style.margin = "0";

  boxes[2].style.height = "100%";
  boxes[2].style.width = "100%";
  boxes[2].style.margin = "0";

  boxes[3].style.height = "100%";
  boxes[3].style.width = "100%";
  boxes[3].style.margin = "0";
}

setInterval(() => {
  i++;

  dismantleImage();

  setTimeout(() => {
    for (j = 0; j <= 3; j++) {
      boxes[j].style.background = `url('/images/slider${i}.jpg')`;
      boxes[j].style.backgroundSize = "cover";
    }
  }, 1000);

  setTimeout(assembleImage, 1000);

  if (i == 5) {
    i = 1;
  }
}, 5000);
