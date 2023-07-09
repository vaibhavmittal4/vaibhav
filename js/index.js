


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
