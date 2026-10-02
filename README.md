# ShopEasy - E-Commerce Website

## Project Overview

ShopEasy is a full-stack e-commerce web application developed using React.js, Node.js, Express.js and MongoDB.

The application allows users to register, login, browse products, search products, filter and sort products, view product details, add products to cart and complete the checkout process.

---

## Technologies Used

### Frontend

- React.js
- Vite
- Redux Toolkit
- React Router DOM
- Axios
- Bootstrap
- JavaScript
- HTML
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- REST API
- bcryptjs
- CORS
- dotenv

### Tools

- Visual Studio Code
- Git
- GitHub
- MongoDB Atlas
- Postman

---

## Features

### User Authentication

- User Registration
- User Login
- Password Hashing
- User data stored in MongoDB

### Product Management

- Product Listing
- Product Details
- Product Category
- Brand
- Color
- Size
- Product Price
- Product Stock
- Product Popularity

### Product Search

- Search products by name
- Search by brand
- Search by category
- Auto-suggestions
- Last search caching using Local Storage

### Product Filters

Users can filter products by:

- Category
- Brand
- Color
- Size

### Product Sorting

Products can be sorted by:

- Price: Low to High
- Price: High to Low
- Popularity: Low to High
- Popularity: High to Low

### Cart

- Add product to cart
- Increase quantity
- Decrease quantity
- Remove product
- Clear cart
- Cart item count
- Total amount calculation

### Checkout

- Delivery information form
- Order summary
- Place order
- Order success message
- Cart cleared after successful purchase

### Lazy Loading

- Product images use lazy loading
- Additional products load while scrolling
- Load More functionality

---

## Project Structure

```text
EcommerceProject
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Filter.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── Sort.jsx
│   │   │
│   │   ├── pages
│   │   │   ├── Cart.jsx
│   │   │   ├── Checkout.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   ├── ProductList.jsx
│   │   │   └── Register.jsx
│   │   │
│   │   ├── redux
│   │   │   ├── cartSlice.js
│   │   │   ├── productSlice.js
│   │   │   └── store.js
│   │   │
│   │   ├── services
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend
│   ├── controllers
│   │   ├── authController.js
│   │   └── productController.js
│   │
│   ├── models
│   │   ├── User.js
│   │   └── Product.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── productRoutes.js
│   │
│   ├── middleware
│   ├── .env
│   ├── .gitignore
│   ├── server.js
│   └── package.json
│
├── TEST_CASES.md
└── README.md