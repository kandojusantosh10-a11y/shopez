# shopez
Ecommerce Website as a part of smart bridge internship
# SHOPEZ - E-Commerce Web Application

## Project Overview

SHOPEZ is a full-stack E-Commerce Web Application developed using the MERN stack technologies. The application allows users to browse products, add products to a shopping cart, place orders, and manage their shopping experience through a modern and user-friendly interface.

The project demonstrates core e-commerce functionalities such as product management, user authentication, shopping cart operations, checkout processing, and order management.

---

## Features

### User Features

* User Registration
* User Login Authentication
* Browse Products
* View Product Details
* Add Products to Cart
* Remove Products from Cart
* Checkout Process
* View Order History
* Responsive User Interface

### Admin Features

* Product Management
* Order Management
* Inventory Tracking

---

## Technology Stack

### Frontend

* React.js
* React Router DOM
* Axios
* JavaScript
* HTML5
* CSS3

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Tools

* Visual Studio Code
* Git
* GitHub
* MongoDB Atlas
* Postman

---

## Project Structure

```text
SHOPEZ
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── config
│   └── server.js
│
└── README.md
```

---

## Modules

### Home Module

Displays the landing page of the application with featured sections and promotional content.

### Products Module

Displays all available products with images, descriptions, pricing information, and stock availability.

### Cart Module

Allows users to add products to their cart and review selected items before checkout.

### Login Module

Handles user authentication and secure login functionality.

### Checkout Module

Collects shipping information and allows users to place orders.

### Orders Module

Displays user order history and order status information.

---

## Database Collections

### Users

Stores user information including:

* Name
* Email
* Password

### Products

Stores product information including:

* Product Name
* Brand
* Description
* Price
* Image
* Stock Quantity

### Cart

Stores cart information including:

* User
* Product
* Quantity

### Orders

Stores order information including:

* User
* Products
* Total Price
* Order Status

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate to Project

```bash
cd shopez
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

### Install Backend Dependencies

```bash
cd ../server
npm install
```

---

## Environment Variables

Create a `.env` file inside the server folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## Run Frontend

```bash
cd client
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Run Backend

```bash
cd server
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

## API Endpoints

### User APIs

```http
POST /api/users/register
POST /api/users/login
```

### Product APIs

```http
GET /api/products
POST /api/products
```

### Cart APIs

```http
GET /api/cart
POST /api/cart
DELETE /api/cart/:id
```

### Order APIs

```http
GET /api/orders
POST /api/orders
```

---

## Future Enhancements

* Payment Gateway Integration
* Product Search and Filtering
* Wishlist Functionality
* User Profile Management
* Admin Dashboard Analytics
* Product Reviews and Ratings
* Order Tracking System

---

## Conclusion

SHOPEZ is a modern e-commerce web application developed using React.js, Node.js, Express.js, and MongoDB. The project demonstrates the implementation of full-stack web development concepts, RESTful APIs, database integration, authentication, shopping cart management, and order processing in a real-world e-commerce environment.