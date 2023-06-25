const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const mainUl = document.querySelector("#ingredients");
ingredients.forEach(elem => {
  let items = document.createElement("li");
  items.textContent = elem;
  items.classList.add("item");
  mainUl.append(items);
});
console.log(mainUl);




