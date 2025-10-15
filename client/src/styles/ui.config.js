
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
  px-4 py-2 rounded-full
  hover:bg-green-600 transition-colors duration-300
`;

// Features Section
export const featureCard = `
  flex flex-col items-center text-center p-4
`;
export const featureIcon = "w-12 h-12 mb-4";
export const featureTitle = "font-bold text-gray-900 mb-2";
export const featureDesc = "text-gray-600 text-sm";

// Category Section Styles
export const categoryCard = `
  flex flex-col items-center
`;

export const categoryImage = `
  relative group overflow-hidden rounded-xl shadow-sm 
  hover:shadow-lg transition duration-300 w-full
`;

export const categoryImgStyle = `
  w-full h-full object-cover 
  transition-transform duration-500 group-hover:scale-110
`;

export const verticalTag = `
  absolute top-0 left-0 h-full bg-black/60 
  text-white flex items-center justify-center px-2
`;

export const horizontalTag = `
  absolute bottom-0 left-0 w-full bg-black/60 
  text-white text-center py-2
`;

export const categoryTagText = `
  text-lg font-semibold
`;

// Contact Section
export const contactSection = `pt-18 pb-30 bg-gray-50`;
export const contactHeader = `text-center mb-12`;
export const contactTitle = `py-3 text-3xl md:text-4xl font-bold text-gray-900`;
export const contactSubtitle = `text-gray-600 mt-2`;

// Contact Info Card
export const contactCard = `flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm`;
export const contactIconStyle = `w-12 h-12 mt-1`;
export const contactInfoText = `space-y-1 text-gray-700`;

// FAQ Section
export const faqSection = `mt-8`;
export const faqTitle = `text-xl font-bold mb-4`;
export const faqItem = `border border-gray-200 rounded-md`;
export const faqButton = `w-full text-left px-4 py-2 flex justify-between items-center bg-gray-100 hover:bg-gray-200`;
export const faqAnswer = `px-4 py-2 text-gray-700`;

// Contact Form
export const contactForm = `space-y-4 bg-white p-6 rounded-lg shadow-sm`;
export const formLabel = `block text-gray-700 mb-1`;
export const formInput = `w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500`;

// Section Wrapper
export const section = `
  py-16 m-6 bg-white
`;

// Section Title
export const sectionTitle = `
  text-3xl md:text-4xl font-bold text-gray-900 mb-4
`;

// Section Description
export const sectionDesc = `
  text-gray-600 mb-6 max-w-2xl mx-auto
`;

// Card (for Mission, Vision, Values)
export const infoCard = `
  p-6 bg-gray-50 rounded-xl shadow-sm text-center
`;

// Card Title
export const cardTitle = `
  text-xl font-bold mb-2
`;

// Card Text
export const cardText = `
  text-gray-600
`;

// Subsection Title (Our Story)
export const subsectionTitle = `
  text-3xl font-bold text-gray-900 mb-6 text-center
`;

// Subsection Description
export const subsectionText = `
  text-gray-600 text-center max-w-3xl mx-auto
`;

export const productCard = `
  bg-white rounded-2xl shadow-sm hover:shadow-lg 
  transition-all duration-300 overflow-hidden group
`;
export const productImage = `
  w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110
`;
export const productInfo = `p-5 flex flex-col justify-between space-y-3`;

