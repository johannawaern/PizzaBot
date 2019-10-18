const pizza1 = "Vegetarian Pizza"
const pizza2 = "Hawaiian Pizza"
const pizza3 = "Pepperoni Pizza"

const pizzaPrice = 80

alert(`Hey! Happy to serve your pizza. On our menu we have
${pizza1}, ${pizza2}, ${pizza3}`);

let orderName = prompt(`Enter the name of the pizza you want to order today. On our menu we have
${pizza1}, ${pizza2}, ${pizza3}`);

const checkOrderName = (orderNameInput) => {
    return orderNameInput === pizza1 || orderNameInput === pizza2 || orderNameInput === pizza3
  }
  // Sometimes the argument name can have the same name as the variable outside the function, 
  // but JS knows to distinguish and will ignore the outside variable. Makes it confusing to use same names.

//  const checkOrderName = orderName => {
// if (orderName === pizza1 || orderName === pizza2 || orderName === pizza3) {
//     return true;
//   } else {
//     return false;
//   }

// Set the variable outside the function.
// You want to fill null with something - userinput.
let orderQuantity = null

if (checkOrderName(orderName)) {
  orderQuantity = prompt(`How many ${orderName} do you want?`)
} else {
  alert("This pizza is not on the menu!")
    //With return it will not read further.
    //Nice to do: Later change - keep asking user for correct name?
}

const totalCost = (orderQuantityInput) => {
  return orderQuantityInput * pizzaPrice
}

const cookingTime = (orderQuantityInput) => {
  if (orderQuantityInput === 1 || orderQuantityInput === 2) {
    return 10;
  } else if (orderQuantityInput >= 3 && orderQuantityInput <= 5) {
    return 15;
  } else {
    return 20;
  }
}

alert(
  `Great, I ’ll get started on your ${orderName} right away, it will cost you ${totalCost(
      orderQuantity
    )} kr. It will take ${cookingTime(orderQuantity)} minutes`)