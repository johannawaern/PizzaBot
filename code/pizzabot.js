const startOrdering = () => {
  const pizza1 = "Vegetarian Pizza";
  const pizza2 = "Hawaiian Pizza";
  const pizza3 = "Pepperoni Pizza";

  const pizzaPrice = 80;

  alert(`Hey! Happy to serve your pizza. On our menu we have
${pizza1}, ${pizza2}, ${pizza3}`);

  let orderName = prompt(`Enter the name of the pizza you want to order today. On our menu we have
${pizza1}, ${pizza2}, ${pizza3}`);

  const checkOrderName = orderNameInput => {
    return (
      orderNameInput === pizza1 ||
      orderNameInput === pizza2 ||
      orderNameInput === pizza3
    );
  };

  let orderQuantity = null;
  if (checkOrderName(orderName)) {
    orderQuantity = prompt(`How many ${orderName} do you want?`);
  } else {
    alert("This pizza is not in the menu!");
  }

  const totalCost = orderQuantityInput => {
    return orderQuantityInput * pizzaPrice;
  };

  const cookingTime = orderQuantityInput => {
    if (orderQuantityInput === 1 || orderQuantityInput === 2) {
      return 10;
    } else if (orderQuantity > 2 && orderQuantity < 6) {
      return 15;
    } else {
      return 20;
    }
  };

  document.getElementById("order-button").style.display = "none";

  document.getElementById("order-confirmation").innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost you ${totalCost(orderQuantity)} kr. It will take ${cookingTime(orderQuantity)} minutes. See you soon!`;
};

document.getElementById("order-button").onclick = startOrdering;