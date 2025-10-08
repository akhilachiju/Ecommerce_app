// Responsive Breakpoints (Tailwind uses these by default)
export const breakpoints = {
  sm: "sm",   // ≥640px
  md: "md",   // ≥768px
  lg: "lg",   // ≥1024px
  xl: "xl",   // ≥1280px
  "2xl": "2xl", // ≥1536px
};

// Navbar Container — spacing & layout for the top navigation
export const navbarContainer = `
  flex items-center justify-between
  px-4 sm:px-6 md:px-10 lg:px-16
  py-3 sm:py-4
`;

// Navigation Links (Desktop)
export const navLinks = `
  hidden md:flex space-x-6 lg:space-x-10
`;

// Icon Group (notification, wishlist, cart, menu icons)
export const iconGroup = `
  flex items-center space-x-4 sm:space-x-6
`;

// Logo Image sizing (responsive)
export const logoImage = `
  w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
  cursor-pointer
`;

// Centralized Colors & Hover Effects
export const colors = {
  primary: "text-black hover:text-green-600 transition-colors duration-200",
  black: "text-black",
};

// Cursor Utilities
export const cursors = {
  pointer: "cursor-pointer",
};

// Mobile Menu Animation
export const mobileMenu = `
  md:hidden bg-white border-t border-gray-200 shadow-lg
  transition-all duration-300 ease-in-out transform
`;
