var colorInput1 = document.querySelector(".color1");
var colorInput2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var body = document.querySelector("body");
var button = document.querySelector("#random");

// Set background colors from the random generated colors from getRandomColor function.
setRandomColor = () => {
  var randomColor1 = getRandomColor();
  var randomColor2 = getRandomColor();
  colorInput1.value = randomColor1;
  colorInput2.value = randomColor2;
  body.style.background = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
  h3.textContent = `${body.style.background};`
};

// Set background colors to users input from the color picker.
gradient = () => {
  body.style.background = `linear-gradient(to right, ${colorInput1.value}, ${colorInput2.value})`;
  h3.textContent = `${body.style.background};`
};

// Generate a random color
getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Events
window.addEventListener("load", setRandomColor);
colorInput1.addEventListener("input", gradient);
colorInput2.addEventListener("input", gradient);
button.addEventListener("click", setRandomColor);
