function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector(".change-color");
const spanElem = document.querySelector(".color");

const color = () => {
  let result = getRandomHexColor();
  document.body.style.backgroundColor = result;
  spanElem.textContent = result;
}

btn.addEventListener('click', color);