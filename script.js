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
      gallery.src = "assets/images/sonic looking up.png";
      toggled = false;
    } else {
      gallery.src = "assets/images/sonics.jpg"; // image
      toggled = true;
    }
  });

  // FIXED: missing parenthesis
  console.log("Page loaded!");
});
  // FIXED: missing parenthesis
  console.log("Page loaded!");
});
