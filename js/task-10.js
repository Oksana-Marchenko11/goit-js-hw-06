function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnPlus = document.querySelector('[data-create]');
const btnMinus = document.querySelector('[data-destroy]');
const divboxes = document.getElementById('boxes');

btnPlus.addEventListener('click', createBoxes);
btnMinus.addEventListener('click', destroyBoxes);

let size = 30;

function createBoxes() {
  let amount = document.querySelector('input').value;
  for (amount; amount > 0; amount--) {
    // let div = document.createElement("div");
    // div.style.width = `${size}px`;
    // div.style.height = `${size}px`;
    // div.style.backgroundColor = getRandomHexColor();
    // divboxes.appendChild(div);
    divboxes.innerHTML += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()} ">hello</div>`;
    size += 10;
  }
}

function destroyBoxes() {
  size = 30;
  divboxes.innerHTML = "";
}