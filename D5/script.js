let clicked = false;

function changeText() {
  if (clicked) {
    document.getElementById("text").innerText = "Aspiring Software Engineer";
  } else {
    document.getElementById("text").innerText = "You clicked the button!";
  }
  clicked = !clicked;
}