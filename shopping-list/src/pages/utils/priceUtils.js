export const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
};

export const calculateItemPrice = (price, quantity) => {
  return (price * quantity).toFixed(2);
};