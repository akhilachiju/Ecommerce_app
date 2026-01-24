# E-Commerce Web Application

A modern, full-stack eCommerce platform built with React + Vite (frontend) and Node.js + Express (backend), featuring responsive product browsing, shopping cart management, and secure order processing with MongoDB database.

---

## Project Overview

This is a complete e-commerce solution with:
- **Frontend**: Modern React app with Tailwind CSS
- **Backend**: Node.js REST API with MongoDB
- **Database**: MongoDB for data persistence
- **Architecture**: Full separation of concerns (client/server)

---

## What's Implemented

### Core Features
- Product catalog with detailed pages
- Category filtering and search
- Shopping cart with add/remove items
- Order placement and processing
- Stock management and validation
- Product QR code generation
- Responsive design (mobile-first)
- Toast notifications
- Error handling & loading states

### Backend (Server)
- Express.js REST API
- MongoDB with Mongoose
- Product CRUD operations
- Inventory management
- Order processing with stock validation
- Data synchronization from external APIs
- Cron job scheduling
- Authentication (TODO)
- Payment gateway (TODO)

### Frontend (Client)
- React 19 with Vite
- Tailwind CSS responsive UI
- Context API state management
- Dynamic product browsing
- Shopping cart functionality
- Product search & filtering
- Lazy image loading
- Error boundaries & suspense
- User authentication (TODO)
- Payment integration (TODO)

---

## Project Structure

```
ecommerce_app/
├── server/                          # Backend (Node.js + Express + MongoDB)
│   ├── models/
│   │   ├── Product.js               # Product schema
│   │   └── SyncLog.js               # Sync tracking
│   ├── routes/
│   │   ├── products.js              # Product endpoints
│   │   ├── orders.js                # Order processing
│   │   └── auth.js                  # Auth (placeholder)
│   ├── utils/
│   │   ├── seedData.js              # Database seeding
│   │   ├── syncProducts.js          # API sync
│   │   └── scheduler.js             # Cron jobs
│   ├── server.js                    # Express app
│   └── package.json
│
├── client/                          # Frontend (React + Vite + Tailwind)
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/              # Reusable components
│   │   │   └── layout/              # Layout components
│   │   ├── pages/                   # Page components
│   │   ├── context/                 # State management
│   │   ├── routes/                  # Route config
│   │   ├── services/                # API calls
│   │   ├── hooks/                   # Custom hooks
│   │   ├── utils/                   # Utilities
│   │   ├── assets/                  # Static files
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
└── README.md                        # Main documentation (this file)
```

---

## Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.1.1 | UI library |
| Vite | 7.1.7 | Build tool |
| Tailwind CSS | 4.1.13 | Styling |
| React Router | 7.9.3 | Routing |
| Axios | Latest | HTTP client |
| react-toastify | 11.0.5 | Notifications |
| react-icons | 5.5.0 | Icons |
| qrcode | 1.5.4 | QR generation |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| Express.js | 4.18.2 | Web framework |
| Node.js | 14+ | Runtime |
| MongoDB | 7.0.0 | Database |
| Mongoose | 8.0.0 | ODM |
| bcryptjs | 2.4.3 | Password hashing |
| JWT | 9.0.2 | Authentication |
| node-cron | 4.2.1 | Task scheduling |
| CORS | 2.8.5 | Cross-origin |

### Development
| Tool | Purpose |
|------|---------|
| ESLint | Code linting |
| nodemon | Server auto-reload |
| Vite | Fast dev server |

---

## Quick Start

### Prerequisites
- Node.js v14+ and npm
- MongoDB (local or cloud instance)
- Git

### Installation

#### 1. Clone Repository
```bash
git clone <repository-url>
cd ecommerce_app
```

#### 2. Backend Setup
```bash
cd server
npm install

# Create .env file
echo "MONGODB_URI=mongodb://localhost:27017/ecommerce" > .env
echo "PORT=5000" >> .env
```

#### 3. Frontend Setup
```bash
cd ../client
npm install
```

### Running the Application

#### Terminal 1 - Backend
```bash
cd server
npm run dev    # Development with nodemon
# OR
npm start      # Production
```
Server runs on: `http://localhost:5000`

#### Terminal 2 - Frontend
```bash
cd client
npm run dev    # Development with hot reload
```
Frontend runs on: `http://localhost:5173`

#### Database Setup (Optional)
```bash
cd server
npm run seed   # Seed initial products
npm run sync   # Sync from external API
```

---

## API Endpoints

### Products
```
GET    /api/products        - Get all products
GET    /api/products/:id    - Get product by ID
```

### Orders
```
POST   /api/orders          - Place order (process purchase)
```

### Authentication (TODO)
```
POST   /api/auth/login      - User login
POST   /api/auth/register   - User registration
```

---

## Detailed Component Documentation

For detailed documentation, refer to:
- **[Server README](./server/README.md)** - Backend architecture & API details
- **[Client README](./client/README.md)** - Frontend components & features

---

## Recent Updates

### Latest Commit: UI Enhancements (#10)
- Enhanced product image gallery with inline quantity controls
- Dynamic QR code generation for products
- Fixed frontend data fetching and loading issues
- Fixed backend API response format for frontend compatibility

---

## Data Flow

```
┌─────────────────┐
│   React App     │
├─────────────────┤
│  Components     │
│  Context API    │
│  React Router   │
└────────┬────────┘
         │ Axios
         ↓
┌─────────────────┐
│  Express API    │
├─────────────────┤
│  Routes         │
│  Controllers    │
│  Middleware     │
└────────┬────────┘
         │ Mongoose
         ↓
┌─────────────────┐
│    MongoDB      │
├─────────────────┤
│  Products       │
│  Orders         │
│  SyncLogs       │
└─────────────────┘
```

---

## Database Schema

### Products Collection
- Comprehensive product information
- Stock management (inventory source of truth)
- Reviews and ratings
- Sync tracking from external APIs

### SyncLogs Collection
- Tracks all data synchronization events
- Timestamps and status
- Historical record of syncs

### Orders Collection (TODO)
- Customer information
- Order items and pricing
- Payment status
- Delivery tracking

### Users Collection (TODO)
- User authentication
- Profile information
- Order history

---

## Current Development Focus

### Phase 1: Foundation (Complete)
- Product catalog
- Shopping cart
- Order placement
- Responsive UI

### Phase 2: Coming Next (In Progress)
- User authentication
- Payment gateway integration
- Order tracking

### Phase 3: Future Enhancements
- Admin dashboard
- User reviews and ratings
- Wishlist functionality
- Advanced filtering
- Email notifications

---

## Known Issues and TODOs

### Backend
- [ ] Implement user authentication
- [ ] Add payment gateway (Razorpay/Stripe)
- [ ] Create User model
- [ ] Add admin routes
- [ ] Input validation middleware
- [ ] Error handling middleware

### Frontend
- [ ] Implement login/register pages
- [ ] Payment checkout flow
- [ ] User account management
- [ ] Wishlist functionality
- [ ] Order tracking page
- [ ] Dark mode support

---

## Security Considerations

- CORS enabled
- Environment variables for sensitive data
- JWT authentication (TODO)
- Input validation (TODO)
- Password hashing ready (bcryptjs)
- HTTPS in production

---

## Performance Optimizations

- Lazy image loading
- Code splitting with React Router
- Suspense boundaries for async
- Tailwind CSS optimization
- Vite fast build tool
- MongoDB indexing

---

## Contributing

1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Commit: `git commit -m "Add your feature"`
4. Push: `git push origin feature/your-feature`
5. Create a Pull Request

---

## Commit History

Latest commits:
```
86203d2 - Merge pull request #10 from akhilachiju/ui-enhancements
9620fa8 - Enhance product image gallery with inline quantity controls
cd2caa4 - Add dynamic QR code generation for products
422a093 - Fix frontend data fetching and loading issues
8b2f748 - Fix backend API response format for frontend compatibility
```

---

## Support and Contact

For issues, questions, or suggestions:
1. Check existing issues on GitHub
2. Create a new issue with detailed description
3. Include error logs and environment info

---

## License

This project is private. All rights reserved.

---

## Next Steps

1. **Setup**: Follow the Quick Start guide above
2. **Explore**: Check server and client READMEs for details
3. **Develop**: Start working on Phase 2 features (Auth & Payment)
4. **Test**: Use Postman for API testing, browser DevTools for frontend
5. **Deploy**: When ready, deploy to production environments

---

**Last Updated**: January 24, 2026
**Branch**: main
**Status**: Active Development
