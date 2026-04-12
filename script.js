document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const box = document.querySelector(".box");
  const colorButton = document.getElementById("changeColor");
  const toggleButton = document.getElementById("toggleImage");

  // FIXED: correct variable name
  colorButton.addEventListener("click", () => {
    box.style.backgroundColor = "blue";
  });

  let toggled = false;

  toggleButton.addEventListener("click", () => {
    if (toggled) {
      gallery.src = "assets/images/image1.jpg";
      toggled = false;
    } else {
      gallery.src = "assets/images/image2.jpg"; // use a real image
      toggled = true;
    }
  });

  // FIXED: missing parenthesis
  console.log("Page loaded!");
});
