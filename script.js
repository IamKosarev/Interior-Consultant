const buttons = document.querySelector(".buttons")
const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click", () => {
  buttons.classList.toggle("hide")
  hamburger.classList.toggle("close")
})
