const run = document.getElementById("font-size-control");
const fontValue = document.getElementById("text");

const change = (e) => {
    let numberValue = Number(e.target.value);
    fontValue.style.fontSize = numberValue + "px";
}
run.addEventListener('input', change);