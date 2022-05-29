const resistorPrice = 0.6

function resistorCost(price, amount) {
  return amount > 50 ? price * amount * 0.8 : price * amount;
}

export {resistorPrice, resistorCost}