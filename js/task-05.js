const inputField = document.getElementById("name-input");
const spanName = document.getElementById("name-output");

const updateName = (e) => {
    let str = e.target.value.trim();
    spanName.innerHTML = str === '' ? 'Anonimous' : str;
};

inputField.addEventListener('input', updateName);

