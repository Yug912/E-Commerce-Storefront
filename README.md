# 🛍️ ShopIt — Full-Stack E-Commerce Platform

> A production-ready e-commerce web application built with the **MERN Stack** as part of a 1.5-month internship project. Features real products, secure authentication, cart & wishlist management, admin dashboard, dark mode, and a fully responsive UI.

<br/>

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-v5-007FFF?style=for-the-badge&logo=mui&logoColor=white)

---

## 📸 Preview

| Home Page | Product Page | Dark Mode |
|---|---|---|
| Animated hero, category cards | Sale badges, hover effects | Full dark theme |

---

## ✨ Features

### 🛒 Shopping
- **118+ Real Products** across 8 categories (Clothing, Shoes, Electronics, Books, Jewelry, etc.)
- **Product Cards** with sale badges, original vs discounted pricing, and hover overlay
- **Search Bar** — live search across name, brand, category, and description
- **Pagination** — 12 products per page with MUI Pagination controls
- **Product Detail Page** with image, price, rating, and description

### 👤 User Authentication
- JWT-based **Login / Register**
- **Forgot Password** with email reset link
- **Update Profile** — change name, email, phone, address
- Protected routes for cart, wishlist, checkout

### 🛍️ Cart & Wishlist
- Add / remove items from cart
- Quantity management
- Move items between cart and wishlist
- Persistent across sessions (backend synced)

### 💳 Checkout
- One-click checkout flow
- Order summary with item breakdown
- Thank You confirmation screen (test mode)

### 🌙 UI & Experience
- **Dark Mode** toggle — persists across sessions via localStorage
- **Animated Hero Section** with floating emojis and gradient background
- **Fully Responsive** — works on mobile, tablet, and desktop
- **Toast Notifications** for all actions
- **Professional Footer** with quick links, categories, and contact info

### 🔧 Admin Panel
- Separate admin login at `/admin/login`
- View all **users** and **products**
- Manage individual user/product details
- **Charts & Analytics** using Recharts

### 📄 Pages
| Page | Route |
|------|-------|
| Home | `/` |
| Login | `/login` |
| Register | `/register` |
| Cart | `/cart` |
| Wishlist | `/wishlist` |
| Checkout | `/checkout` |
| Product Detail | `/Detail/type/:cat/:id` |
| Category | `/product/type/:cat` |
| About Us | `/about` |
| Contact Us | `/contact` |
| Admin Home | `/admin/home` |

---

## 🏗️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **React.js 18** | Component-based UI framework |
| **React Router v6** | Client-side routing |
| **Material UI (MUI v5)** | UI component library |
| **Axios** | HTTP requests to backend API |
| **React Toastify** | Toast notifications |
| **React Icons** | Icon library |
| **Recharts** | Admin analytics charts |
| **Context API** | Global state management |

### Backend
| Technology | Purpose |
|---|---|
| **Node.js** | JavaScript runtime |
| **Express.js** | REST API framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | MongoDB object modeling |
| **JWT** | Authentication tokens |
| **Bcrypt** | Password hashing |
| **Nodemailer** | Forgot password emails |
| **CORS** | Cross-origin resource sharing |

---

## 📁 Project Structure

```
E-Commerce-Storefront-main/
│
├── src/                          # React frontend
│   ├── Auth/                     # Login, Register, ForgotPassword
│   ├── Admin/                    # Admin panel pages & auth
│   ├── Components/               # Reusable UI components
│   │   ├── Card/                 # ProductCard with sale badge & hover
│   │   ├── Carousel/             # Homepage banner carousel
│   │   ├── Checkout/             # CheckoutForm with Thank You dialog
│   │   ├── Footer/               # Site-wide footer
│   │   └── SearchBar/            # Live product search
│   ├── Context/                  # Context API (cart, wishlist, darkMode)
│   ├── Navigation/               # Desktop & Mobile navigation
│   ├── Pages/                    # Route-level pages
│   │   ├── Home/                 # Hero homepage
│   │   ├── About/                # About Us page
│   │   ├── Contact/              # Contact Us page
│   │   ├── Cart/                 # Cart page
│   │   ├── Detail/               # Product detail page
│   │   └── WhisList/             # Wishlist page
│   └── App.js                    # Root component & routes
│
├── backend/                      # Node.js + Express API
│   ├── routes/                   # API route handlers
│   │   ├── auth.js               # Login, Register, JWT
│   │   ├── cart.js               # Cart CRUD
│   │   ├── wishlist.js           # Wishlist CRUD
│   │   ├── product.js            # Product fetch & filter
│   │   ├── review.js             # Product reviews
│   │   ├── forgotPassword.js     # Email reset flow
│   │   └── Admin/                # Admin-only routes
│   ├── models/                   # Mongoose schemas
│   ├── middleware/               # Auth & API middleware
│   ├── controller/               # Route controllers
│   ├── seed.js                   # Database seeder (118+ products)
│   └── index.js                  # Express app entry point
│
└── package.json                  # Frontend dependencies
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v16+
- MongoDB (local or Atlas)
- npm

### 1. Clone the repository
```bash
git clone https://github.com/Yug912/E-Commerce-Storefront.git
cd E-Commerce-Storefront-main
```

### 2. Setup the Backend
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
EMAIL=your_email@gmail.com
PASSWORD=your_email_app_password
```

Start the backend server:
```bash
node index.js
```
> Backend runs on **http://localhost:5000**

### 3. Seed the Database (first time only)
```bash
cd backend
node seed.js
```
This populates MongoDB with 118+ real products across all categories.

### 4. Setup the Frontend
```bash
# From the project root
npm install
npm start
```
> Frontend runs on **http://localhost:3000**

---

## 🔑 Admin Access

Register a new account and manually set `isAdmin: true` in MongoDB, or use the `/admin/register` route.

| Route | Description |
|---|---|
| `/admin/login` | Admin login |
| `/admin/home` | Dashboard with users & products |

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login & get JWT |
| GET | `/api/product/getproduct` | Get all products |
| GET | `/api/product/getproduct/:type` | Get products by category |
| GET | `/api/cart/getcart` | Get user's cart |
| POST | `/api/cart/addtocart` | Add item to cart |
| DELETE | `/api/cart/deletecart/:id` | Remove from cart |
| GET | `/api/wishlist/getwishlist` | Get user's wishlist |
| POST | `/api/wishlist/addtowishlist` | Add to wishlist |
| POST | `/api/user/forgotpassword` | Send reset email |

---

## 👨‍💻 Developer

**Yug Thakral**
- 🎓 Full Stack Developer Intern
- 💼 [LinkedIn](https://www.linkedin.com/in/yug-thakral)
- 🐙 [GitHub](https://github.com/Yug912)

---

## 📝 License

This project was built as an internship demonstration project.

---

> ⭐ If you found this helpful, consider giving it a star on GitHub!
