// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
var favourite_pizza = ["pepperoni", "chicken", "veg"];
for (var _i = 0, favourite_pizza_1 = favourite_pizza; _i < favourite_pizza_1.length; _i++) {
    var pizzas = favourite_pizza_1[_i];
    console.log(pizzas);
}
console.log("\n");
for (var _a = 0, favourite_pizza_2 = favourite_pizza; _a < favourite_pizza_2.length; _a++) {
    var pizzas = favourite_pizza_2[_a];
    console.log(" I really like ".concat(pizzas, ", pizza!"));
}
console.log("\n I really love pizza!");
