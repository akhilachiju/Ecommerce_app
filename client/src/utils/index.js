// Price calculation utilities
export const calculateDiscountedPrice = (originalPrice, discountPercentage = 0) => {
  const discount = (originalPrice * discountPercentage) / 100;
  return (originalPrice - discount).toFixed(2);
};

export const formatPrice = (price) => {
  return `$${parseFloat(price).toFixed(2)}`;
};

// Product utilities
export const getStockStatus = (stock) => {
  if (stock === 0) return { status: 'out-of-stock', message: 'Out of Stock', color: 'text-red-500' };
  if (stock <= 5) return { status: 'low-stock', message: `Only ${stock} left!`, color: 'text-orange-500' };
  return { status: 'in-stock', message: `${stock} in stock`, color: 'text-green-600' };
};

export const generateStarRating = (rating, maxStars = 5) => {
  return Array.from({ length: maxStars }, (_, i) => ({
    filled: i < Math.round(rating),
    index: i
  }));
};

// Share functionality
export const shareProduct = async (product) => {
  const shareData = {
    title: product.title,
    text: `Check out this product: ${product.title}`,
    url: `${window.location.origin}/product/${product.id}`,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return { success: true };
    } catch (err) {
      console.error('Share failed:', err.message);
      return { success: false, error: err.message };
    }
  } else {
    try {
      await navigator.clipboard.writeText(shareData.url);
      return { success: true, message: 'Product link copied to clipboard!' };
    } catch {
      return { success: false, error: 'Failed to copy link' };
    }
  }
};

// Array utilities
export const removeDuplicates = (array, key) => {
  if (!key) return [...new Set(array)];
  return array.filter((item, index, self) => 
    index === self.findIndex(t => t[key] === item[key])
  );
};

export const groupBy = (array, key) => {
  return array.reduce((groups, item) => {
    const group = item[key];
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(item);
    return groups;
  }, {});
};

// String utilities
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const capitalizeFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Validation utilities
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateRequired = (value) => {
  return value !== null && value !== undefined && value.toString().trim() !== '';
};

// Local storage utilities
export const getFromStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error reading from localStorage: ${error}`);
    return defaultValue;
  }
};

export const setToStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Error writing to localStorage: ${error}`);
    return false;
  }
};

export const removeFromStorage = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Error removing from localStorage: ${error}`);
    return false;
  }
};
