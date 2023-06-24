const mainList = document.querySelector("#categories");
const mainItems = mainList.children;
console.log('Number of categories: ', mainItems.length);

const item = document.querySelectorAll(".item");

item.forEach(e => {
    console.log("Category: ", e.firstElementChild.textContent);
    console.log("Elements: ", e.lastElementChild.children.length);
});