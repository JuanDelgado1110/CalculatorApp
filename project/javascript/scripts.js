const themeButton = document.getElementById("themeButton");
const body = document.body;

themeButton.addEventListener("click", () => {
  if (body.classList.length == 0) {
    body.classList.add("theme2");
  } else if (body.classList[0] === "theme2") {
    body.classList.replace("theme2", "theme3");
  } else if (body.classList[0] === "theme3") {
    body.classList.toggle("theme3");
  }
});
