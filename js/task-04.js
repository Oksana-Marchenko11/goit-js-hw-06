let spamvalue = document.querySelector('#value');
const minus = document.querySelector('button[data-action="decrement"]');
const plus = document.querySelector('button[data-action="increment"]');


let counterValue = 0;
// let counterValue = Number(spamvalue.innerHTML); якщо б у span було б інше число (не нуль)
const incr = () => {
    counterValue++;
    spamvalue.innerHTML = counterValue;
};
const decr = () => {
    counterValue--;
    spamvalue.innerHTML = counterValue;
};
plus.addEventListener("click", incr);
minus.addEventListener("click", decr);

