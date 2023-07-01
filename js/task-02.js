const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const mainUl = document.querySelector("#ingredients");
// ingredients.forEach(elem => {
//   let items = document.createElement("li");
//   items.textContent = elem;
//   items.classList.add("item");
//   mainUl.append(items);
// });

let newItems = ingredients.map(ingredient => {
  let items = document.createElement("li");
  items.textContent = ingredient;
  items.classList.add("item")
  return items;
});
mainUl.append(...newItems);





