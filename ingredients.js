var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var counter = 0;

// Write a while loop that prints out the contents of ingredients:
while (counter < 8) {
  console.log(ingredients[counter]);
  counter++;
}

// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < 8; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
var countDown = 7
while (countDown > -1) {
  console.log(ingredients[countDown]);
  countDown--;
}