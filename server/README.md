# E-Commerce Server

Node.js and Express backend for the e-commerce application with MongoDB database.

## Implemented Features

### Product Management
- GET /api/products - Fetch all products with filtering by category
- GET /api/products/:id - Get single product details
- Product Stock Management - Track inventory levels atomically
- Product Sync System - Automatic synchronization from external APIs (DummyJSON)
- Product Categories - Filter products by category
- QR Code Generation - Generate QR codes for products
- Product Details - Comprehensive product information including:
  - Title, description, pricing
  - Images and thumbnail
  - Stock and sold quantity
  - Ratings and reviews
  - Specifications (dimensions, weight)
  - Warranty and shipping information

### Order Processing
- POST /api/orders - Process purchases
  - Automatic stock deduction
  - Atomic inventory updates
  - Order validation
  - Price calculation
- Order Tracking - Track order status and details
- Stock Validation - Verify sufficient stock before confirming orders

### Authentication (Placeholder)
- POST /api/auth/login - Login endpoint (to be implemented)
- POST /api/auth/register - Registration endpoint (to be implemented)

### Data Sync
- Product Synchronization - Scheduled sync from external product APIs
- Sync Logging - Track all sync operations and history
- Cron Jobs - Automated scheduling for periodic tasks

## Project Structure

```
server/
├── models/
│   ├── Product.js          # Product schema with inventory & sync fields
│   └── SyncLog.js          # Tracks product sync history
├── routes/
│   ├── products.js         # Product endpoints
│   ├── orders.js           # Order processing endpoints
│   └── auth.js             # Authentication endpoints (placeholder)
├── middleware/             # Custom middleware (if any)
├── utils/
│   ├── scheduler.js        # Cron jobs for data sync
│   ├── seedData.js         # Database seeding script
│   └── syncProducts.js     # Product sync from external APIs
├── config/                 # Configuration files
├── server.js               # Main Express app
└── package.json            # Dependencies
```

## Database Models

### Product Model
```javascript
{
  title: String,
  description: String,
  price: Number,
  category: String,
  stock: Number,          // DB source of truth
  soldQuantity: Number,
  images: [String],
  thumbnail: String,
  rating: Number,
  reviews: [{
    rating: Number,
    comment: String,
    reviewerName: String,
    reviewerEmail: String,
    date: Date
  }],
  brand: String,
  tags: [String],
  warrantyInformation: String,
  shippingInformation: String,
  returnPolicy: String,
  isActive: Boolean,
  externalId: Number,     // External API ID
  lastSyncedAt: Date,
  timestamps: true
}
```

### SyncLog Model
- Tracks all product synchronization events
- Records timestamps and sync status

## Setup Instructions

### Prerequisites
- Node.js (v14+)
- MongoDB (local or cloud)
- npm or yarn

### Installation

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file with:
MONGODB_URI=mongodb://localhost:27017/ecommerce
PORT=5000
```

### Running the Server

```bash
# Development with nodemon
npm run dev

# Production
npm start

# Seed database with initial data
npm run seed

# Sync products from external API
npm run sync
```

## API Endpoints

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get product by ID |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/orders` | Create order (process purchase) |

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | User login (TODO) |
| POST | `/api/auth/register` | User registration (TODO) |

## Technologies Used

- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (to be implemented)
- **Password Hashing**: bcryptjs
- **Validation**: Built-in schema validation
- **Scheduling**: node-cron for automatic tasks
- **Environment**: dotenv for configuration

## Dependencies

```json
{
  "bcryptjs": "^2.4.3",           // Password hashing
  "cors": "^2.8.5",               // Cross-origin requests
  "dotenv": "^16.3.1",            // Environment variables
  "express": "^4.18.2",           // Web framework
  "jsonwebtoken": "^9.0.2",       // JWT authentication
  "mongodb": "^7.0.0",            // Database driver
  "mongoose": "^8.0.0",           // ODM
  "node-cron": "^4.2.1"           // Task scheduling
}
```

## Dev Dependencies

- **nodemon**: Auto-restart server on file changes

## Future Enhancements

- User authentication and JWT tokens
- Payment gateway integration (Razorpay/Stripe)
- Admin panel for product management
- Order tracking and notifications
- User reviews and ratings submission
- Discount and coupon system
- Wishlist functionality
- Real-time inventory updates
- Order history and analytics

## Known Issues / TODO

- Authentication endpoints are placeholders
- Payment gateway not yet integrated
- User model not yet created
- Admin routes not implemented

## Support

For issues or questions about the backend, please refer to the main README.md

