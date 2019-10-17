const pizza1 = "Vegetarian Pizza"
const pizza2 = "Hawaiian Pizza"
const pizza3 = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:

alert(`Hey! Happy to serve your pizza. On our menu we have
${pizza1}, ${pizza2}, ${pizza3}`);

let orderName = prompt(`Enter the name of the pizza you want to order today. On our menu we have
${pizza1}, ${pizza2}, ${pizza3}`);

const checkOrderName = (orderName) => {
  if (orderName === pizza1 || orderName === pizza2 || orderName === pizza3) {
    return true
  } else {
    return false
  }
}

if (checkOrderName(orderName)) {
  let orderQuantity = prompt(`How many ${orderName} do you want?`)
} else {
  alert("This pizza is not in the menu!")
}

const totalCost = (orderQuantity) => {
  orderQuantity * pizzaPrice
}
if (orderQuantity >= 1 && orderQuantity <= 2) {
  alert(`Great, I 'll get started on your ${orderName} right away, it will cost you ${totalCost} kr. It will take 10 minutes`)
} else if (orderQuantity >= 3 && orderQuantity <= 5) {
  alert(`Great, I 'll get started on your ${orderName} right away, it will cost you ${totalCost} kr. It will take 15 minutes`)
} else {
  alert(`Great, I 'll get started on your ${orderName} right away, it will cost you ${totalCost} kr. It will take 20 minutes`)
}

// let totalCost = (orderQuantity * pizzaPrice)

//Put your Javscript code here: