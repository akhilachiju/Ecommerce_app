// Unified responsive container for all sections
export const container = `
  max-w-[1280px] 
  mx-auto 
  px-4 sm:px-6 md:px-8
`;

// Navbar Container
export const navbarContainer = `
  flex items-center justify-between
  py-3 sm:py-4
  ${container}
`;

// Navigation Links (Desktop)
export const navLinks = `
  hidden md:flex space-x-6 lg:space-x-10
`;

// Icon Group (right-side icons)
export const iconGroup = `
  flex items-center space-x-4 sm:space-x-6
`;

// Logo Sizing
export const logoImage = `
  w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
  cursor-pointer
`;

// Colors & Hover Effects
export const colors = {
  primary: "text-black hover:text-green-600 transition-colors duration-200",
  black: "text-black",
};

// Cursor Utilities
export const cursors = {
  pointer: "cursor-pointer",
};

// Mobile Menu
export const mobileMenu = `
  md:hidden bg-white border-t border-gray-200 shadow-lg
  transition-all duration-300 ease-in-out transform
`;

// Button Styles
export const button = `
  bg-black text-white font-medium
  px-6 py-3 rounded-full
  hover:bg-green-600 transition-colors duration-300
`;

// Features Section
export const featureCard = `
  flex flex-col items-center text-center p-4
`;
export const featureIcon = "w-12 h-12 mb-4";
export const featureTitle = "font-bold text-gray-900 mb-2";
export const featureDesc = "text-gray-600 text-sm";

// Breakpoints (Tailwind default aliases)
export const breakpoints = {
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  "2xl": "2xl",
};
