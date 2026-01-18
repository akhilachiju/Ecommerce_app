export const cartUtils = {
  calculateTotal: (items) => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
  
  calculateItemCount: (items) => {
    return items.reduce((count, item) => count + item.quantity, 0);
  },
  
  findItemIndex: (items, productId) => {
    return items.findIndex(item => item.id === productId);
  },
  
  updateItemQuantity: (items, productId, quantity) => {
    const index = cartUtils.findItemIndex(items, productId);
    if (index !== -1) {
      const updatedItems = [...items];
      updatedItems[index].quantity = quantity;
      return updatedItems;
    }
    return items;
  },
  
  removeItem: (items, productId) => {
    return items.filter(item => item.id !== productId);
  }
};

export default cartUtils;
