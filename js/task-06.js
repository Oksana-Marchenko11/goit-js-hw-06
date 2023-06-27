const inputPlace = document.getElementById("validation-input");
const strLength = Number(inputPlace.dataset.length);
console.log(strLength);
const dataIn = (e) => {
    let numberValue = e.target.value.trim();
    let inputValLength = numberValue.length;

    if (strLength !== inputValLength) {
        console.log('invalid');
        inputPlace.classList.add('invalid');
        inputPlace.classList.remove('valid');
    } else {
        console.log('valid');
        inputPlace.classList.add('valid');
        inputPlace.classList.remove('invalid')
    }
};

inputPlace.addEventListener('blur', dataIn);