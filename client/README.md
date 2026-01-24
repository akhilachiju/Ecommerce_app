# E-Commerce Client

React and Vite and Tailwind CSS frontend for the e-commerce application with responsive UI and dynamic product browsing.

## Implemented Features

### Product Browsing
- Home Page - Hero section with featured products
- Shop Page - Browse all products with category filtering
- Product Details - Detailed product view with:
  - Product images gallery with inline quantity controls
  - QR code generation for product sharing
  - Product specifications and details
  - Customer reviews and ratings
  - Related products
- Search Functionality - Search products by name/keyword
- Category Filtering - Filter products by category
- Product Cards - Display product with image, price, rating

### Shopping Cart
- Cart Management - Add/remove items from cart
- Quantity Adjustment - Adjust product quantities
- Cart Persistence - Cart data saved in Context API
- Cart Summary - View total price and item count
- Cart Page - Dedicated shopping cart view
- Wishlist - Add items to wishlist (TODO: implementation)

### Checkout and Orders
- Place Order - Order placement page
- Order History - View previous orders
- Order Tracking - Track order status
- Checkout Flow - Multi-step checkout process (TODO: payment integration)

### UI/UX Features
- Responsive Design - Mobile-first responsive layout
- Lazy Image Loading - Optimize image loading performance
- Search Bar - Dynamic product search
- Navigation - Multi-level navigation with routing
- Error Handling - Error boundary for error management
- Loading States - Suspense wrapper for async components
- Toast Notifications - User feedback via react-toastify
- Breadcrumb Navigation - Easy navigation tracking

### Pages
- Home - Landing page with featured products and hero
- Shop - All products with filters
- Product Details - Single product view
- Cart - Shopping cart management
- Wishlist - Saved items (TODO)
- Place Order - Checkout page
- Orders - Order history
- Contact - Contact page
- Privacy - Privacy policy page
- Login - User login (TODO)
- **Notifications** - User notifications page

## Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── common/              # Shared components
│   │   │   ├── About.jsx
│   │   │   ├── BestSeller.jsx
│   │   │   ├── CartItem.jsx
│   │   │   ├── ErrorBoundary.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── LazyImage.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductImageGallery.jsx
│   │   │   ├── ProductInfo.jsx
│   │   │   ├── ProductTabs.jsx
│   │   │   ├── QuantityAdjuster.jsx
│   │   │   ├── ScrollToTop.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── SuspenseWrapper.jsx
│   │   ├── layout/               # Layout components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   └── ui/                  # UI components (if any)
│   ├── pages/                    # Page components
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Cart.jsx
│   │   ├── Wishlist.jsx
│   │   ├── PlaceOrder.jsx
│   │   ├── Orders.jsx
│   │   ├── Contact.jsx
│   │   ├── Privacy.jsx
│   │   ├── Login.jsx
│   │   ├── Notification.jsx
│   │   └── index.js
│   ├── context/                  # State management
│   │   ├── context.jsx           # Global context
│   │   └── shopContext.jsx       # Shop/cart context
│   ├── routes/                   # Route configurations
│   ├── services/                 # API services
│   ├── hooks/                    # Custom React hooks
│   ├── styles/                   # Global styles
│   ├── utils/                    # Utility functions
│   ├── assets/                   # Static assets
│   ├── App.jsx                   # Root component
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global CSS
├── public/                        # Static files
├── index.html                    # HTML entry point
├── vite.config.js                # Vite configuration
├── tailwind.config.js            # Tailwind configuration
├── eslint.config.js              # ESLint configuration
└── package.json                  # Dependencies
```

## Key Components Breakdown

### Common Components
- **ProductCard** - Displays individual product
- **ProductImageGallery** - Image gallery with inline quantity controls
- **ProductTabs** - Product specifications and details
- **QuantityAdjuster** - Adjust product quantity
- **CartItem** - Shopping cart item display
- **SearchBar** - Search functionality
- **LazyImage** - Optimized image loading
- **Hero** - Hero section on home page
- **BestSeller** - Best selling products showcase
- **ErrorBoundary** - Error handling wrapper
- **SuspenseWrapper** - Loading state wrapper

### Layout Components
- **Navbar** - Navigation bar
- **Header** - Page header
- **Footer** - Footer section
- **Layout** - Main layout wrapper

## Setup Instructions

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Create .env.local (optional, for future features)
# VITE_API_URL=http://localhost:5000/api
```

### Running the Client

```bash
# Development with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm preview

# Run ESLint
npm run lint
```

## Technologies Used

- **Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.13
- **Routing**: React Router DOM 7.9.3
- **HTTP Client**: Axios
- **UI Notifications**: react-toastify 11.0.5
- **Icons**: react-icons 5.5.0
- **QR Codes**: qrcode 1.5.4 (for product sharing)
- **Linting**: ESLint with React plugins

## Dependencies

```json
{
  "@tailwindcss/vite": "^4.1.13",     // Tailwind CSS
  "qrcode": "^1.5.4",                  // QR code generation
  "react": "^19.1.1",                  // React library
  "react-dom": "^19.1.1",              // React DOM
  "react-icons": "^5.5.0",             // Icon library
  "react-router-dom": "^7.9.3",        // Routing
  "react-toastify": "^11.0.5",         // Toast notifications
  "tailwindcss": "^4.1.13"             // CSS framework
}
```

## UI/UX Features

- **Responsive Design** - Works on mobile, tablet, desktop
- **Tailwind CSS** - Utility-first CSS framework
- **Image Optimization** - Lazy loading for performance
- **Loading States** - Smooth loading indicators
- **Error Handling** - Graceful error boundaries
- **Toast Notifications** - User feedback system
- **Smooth Scrolling** - Scroll to top functionality

## Pages Overview

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Landing page with featured products |
| Shop | `/shop` | Browse all products |
| Product Details | `/product/:id` | Single product details |
| Cart | `/cart` | Shopping cart |
| Place Order | `/place-order` | Checkout |
| Orders | `/orders` | Order history |
| Wishlist | `/wishlist` | Saved items |
| Contact | `/contact` | Contact information |
| Privacy | `/privacy` | Privacy policy |
| Login | `/login` | User authentication (TODO) |

## State Management

- **Context API** - Global state management
- **shopContext.jsx** - Shopping cart and product state
- **context.jsx** - Global app context

## API Integration

Frontend communicates with backend APIs:
- `GET /api/products` - Fetch all products
- `GET /api/products/:id` - Get single product
- `POST /api/orders` - Place order
- `GET /api/orders` - Get order history (TODO)

## Future Enhancements

- User authentication (login/register)
- Payment gateway integration
- Order tracking and notifications
- Wishlist functionality
- Product reviews and ratings submission
- User account management
- Dark mode support
- Advanced filtering and sorting
- Product recommendations

## Known Issues / TODO

- Authentication not yet implemented
- Payment gateway not integrated
- Wishlist functionality incomplete
- Order tracking incomplete
- User account features pending

## Performance Optimizations

- Lazy image loading with `LazyImage` component
- Code splitting with React Router
- Suspense boundaries for async components
- Optimized re-renders with Context API
- Production-ready Vite build

## Support

For issues or questions about the frontend, please refer to the main README.md
