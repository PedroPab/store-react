/**
 * this funcion calculate total price of a new order
 * @param {Array} listProducts cartProducts 
 * @returns {number} Total price
 */
export const totalPrice = (listProducts) => {

  const total = listProducts.reduce((accumulator, currentValue) => {
    const price = currentValue.price ?? 0
    return accumulator + price
  }, 0)
  return total
}