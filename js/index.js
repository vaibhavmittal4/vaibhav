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


function on(){
  console.log(window.scrollY);
}



// Get the navbar


const navbar = document.getElementsByClassName("wrapper");





function myFunction() {
  if (window.scrollY >= 54) {
    navbar.style.position="fixed";
    navbar.style.top="0px";
    // header.style.display="none"
  } else {
    navbar.style.position="static";
    navbar.style.top="50px";
  }
}




var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
var window_height = $window.height();
var window_top_position = $window.scrollTop();
var window_bottom_position = (window_top_position + window_height);

$.each($animation_elements, function() {
var $element = $(this);
var element_height = $element.outerHeight();
var element_top_position = $element.offset().top;
var element_bottom_position = (element_top_position + element_height);

//check to see if this current container is within viewport
if ((element_bottom_position >= window_top_position) &&
(element_top_position <= window_bottom_position)) {
$element.addClass('in-view');
} else {
$element.removeClass('in-view');
}
});
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
