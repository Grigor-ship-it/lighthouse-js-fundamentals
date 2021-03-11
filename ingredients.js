const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let x = 0
while (x <= ingredients.length) {
console.log(ingredients[x])
x++
if (x === 8) {
break;
} }


for (var y = 0; y < ingredients.length; y++) {
console.log(ingredients[y]);
} 

for (var i = ingredients.length - 1; i >= 0; i--) {
    console.log(ingredients[i]);
}
