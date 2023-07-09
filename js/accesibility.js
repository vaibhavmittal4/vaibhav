


const toggleButton = document.getElementById("menu-toggle");
const accessibilityMenu = document.getElementById("accessibility-menu");
const highlightLinks = document.getElementById("highlight-links");
const increaseText = document.getElementById("increase-text");
const decreaseText = document.getElementById("decrease-text");
const adjustableText = document.getElementsByClassName("adjustable_text");
const grayscale = document.getElementById("grayscale");
const highContrast = document.getElementById("high-contrast");


const grayscaleElements = document.getElementsByClassName("grayscale");
const contrastElements = document.getElementsByClassName("high-contrast");
var textSizeLimit = 0;
var grayscaleToggle = false;
var contrastToggle = false;

toggleButton.addEventListener("click", () => {
  accessibilityMenu.classList.toggle("active-menu");
});

highlightLinks.addEventListener("click", () => {
  let anchorTags = document.getElementsByTagName("a");
  for (i = 0; i < anchorTags.length; i++) {
    anchorTags[i].classList.toggle("highlight-links");
  }
});

increaseText.addEventListener("click", () => {
  if (textSizeLimit < 3) {
    for (i = 0; i < adjustableText.length; i++) {
      var currentFontSize = parseInt($(adjustableText[i]).css("font-size"));
      currentFontSize = currentFontSize.toFixed(2);
      currentFontSize = currentFontSize.toString();
      var newArray = currentFontSize.split(".");
      var newFontSize = Number(newArray[0]) + 2;
      adjustableText[i].style.fontSize = newFontSize + "." + newArray[1] + "px";
      textSizeLimit++;
    }
  } else {
    return;
  }
});

decreaseText.addEventListener("click", () => {
  if (textSizeLimit > -1) {
    for (i = 0; i < adjustableText.length; i++) {
      var currentFontSize = parseInt($(adjustableText[i]).css("font-size"));
      currentFontSize = currentFontSize.toFixed(2);
      currentFontSize = currentFontSize.toString();
      var newArray = currentFontSize.split(".");
      var newFontSize = Number(newArray[0]) - 2;
      adjustableText[i].style.fontSize = newFontSize + "." + newArray[1] + "px";
      textSizeLimit--;
    }
  } else {
    return;
  }
});



grayscale.addEventListener("click", () => {
  if (grayscaleToggle == false) {
    for (i = 0; i < grayscaleElements.length; i++) {
      grayscaleElements[i].style.filter = "grayscale(100%)";
      
    }
    grayscaleToggle = true;
  } else {
    for (i = 0; i < grayscaleElements.length; i++) {
      grayscaleElements[i].style.filter = "grayscale(0%)";
    }
    grayscaleToggle = false;
  }
});

highContrast.addEventListener("click", () => {
  if (contrastToggle == false) {
    for (i = 0; i < grayscaleElements.length; i++) {
      contrastElements[i].style.filter = "contrast(200%)";
    }
    contrastToggle = true;
  } else {
    for (i = 0; i < grayscaleElements.length; i++) {
      contrastElements[i].style.filter = "contrast(100%)";
    }
    contrastToggle = false;
  }
});


reset.addEventListener("click", () => {
  let anchorTags = document.getElementsByTagName("a");
  for (i = 0; i < anchorTags.length; i++) {
    anchorTags[i].classList.remove("highlight-links");
  }

  for (i = 0; i < contrastElements.length; i++) {
    contrastElements[i].style.filter = "contrast(100%)";
  }
  contrastToggle = false;
  for (i = 0; i < grayscaleElements.length; i++) {
    grayscaleElements[i].style.filter = "grayscale(0%)";
  }
  grayscaleToggle = false;

  if (textSizeLimit > 0) {
    while (textSizeLimit > 0) {
      for (i = 0; i < adjustableText.length; i++) {
        var currentFontSize = parseInt($(adjustableText[i]).css("font-size"));
        currentFontSize = currentFontSize.toFixed(2);
        currentFontSize = currentFontSize.toString();
        var newArray = currentFontSize.split(".");
        var newFontSize = Number(newArray[0]) - 2;
        adjustableText[i].style.fontSize =
          newFontSize + "." + newArray[1] + "px";
        textSizeLimit--;
      }
    }
  } else {
    while (textSizeLimit < 0) {
      for (i = 0; i < adjustableText.length; i++) {
        var currentFontSize = parseInt($(adjustableText[i]).css("font-size"));
        currentFontSize = currentFontSize.toFixed(2);
        currentFontSize = currentFontSize.toString();
        var newArray = currentFontSize.split(".");
        var newFontSize = Number(newArray[0]) + 2;
        adjustableText[i].style.fontSize =
          newFontSize + "." + newArray[1] + "px";
        textSizeLimit++;
      }
    }
  }
});
