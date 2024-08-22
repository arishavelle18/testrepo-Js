const breakfastMenu = ['Pancakes-$12', 'Eggs Benedict-$22.99', 'Oatmeal$21.99', 'Frittata$15'];
const mainCourseMenu = ['Steak-$12', 'Pasta-$122', 'Burger-$11', 'Salmon-$134'];
const dessertMenu = ['Cake-$134', 'Ice Cream-$13', 'Pudding-$12', 'Fruit Salad-$1343'];

// yung join kaya meron para maconvert into string
const breakfastMenuItemsHtml = breakfastMenu.map((item,index) => {
    return `<p>Item ${index + 1}: ${item}</p>`;
}).join("");

console.log(breakfastMenuItemsHtml);
document.getElementById("breakfastMenuItems").innerHTML = breakfastMenuItemsHtml;

//pag foreach no return need mag initialize ng paglalagyan
let mainCourseItem = "";
mainCourseMenu.forEach((item,index) =>{
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});

console.log(mainCourseItem);
document.getElementById("maincourseMenuItems").innerHTML = mainCourseItem;

//forloop
let dessertItem ="";
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
console.log(dessertItem);
document.getElementById("dessertMenuItems").innerHTML = dessertItem;