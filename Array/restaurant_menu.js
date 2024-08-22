const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

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