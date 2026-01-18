import { toast } from 'react-toastify';

export const showToast = {
  success: (message) => toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
  }),
  
  error: (message) => toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
  }),
  
  info: (message) => toast.info(message, {
    position: "top-right",
    autoClose: 4000,
  }),
  
  warning: (message) => toast.warning(message, {
    position: "top-right",
    autoClose: 4000,
  })
};

export const cartToasts = {
  added: (productName) => showToast.success(`${productName} added to cart!`),
  removed: (productName) => showToast.info(`${productName} removed from cart`),
  wishlistAdded: (productName) => showToast.success(`${productName} added to wishlist!`),
  wishlistRemoved: (productName) => showToast.info(`${productName} removed from wishlist`),
};
