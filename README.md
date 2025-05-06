# 🧩 Worncom E-Commerce Backend

Welcome to the **Worncom E-Commerce Backend**! This API is built with **Node.js** and **Express** to power the Worncom online store. It handles user authentication, product management, cart operations, and order placement with payment gateway integrations like **Stripe** and **Razorpay**.

---

## 🚀 Key Features

- **User Authentication** – Login, register, and manage user accounts.
- **Admin Panel** – Secure routes for admins to manage products and orders.
- **Product Management** – Create, read, and delete products.
- **Cart Management** – Add, update, and remove items from the cart.
- **Order Management** – Place, track, and manage customer orders.
- **Payment Integrations** – Support for **Stripe** and **Razorpay** payments.
- **Cloud Storage** – Integrated with **Cloudinary** for storing product images.

---

## 🧾 Tech Stack

- **Backend Framework:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JWT (JSON Web Token)
- **Payment Gateways:** Stripe, Razorpay
- **Cloud Storage:** Cloudinary
- **File Upload:** Multer
- **Utilities:** Bcrypt for hashing, dotenv for environment variables

---

## 📁 Project Structure

```bash
backend/
├── config/
│   ├── cloudinary.js          # Cloudinary configuration
│   └── mongodb.js             # MongoDB database connection
│
├── controllers/
│   ├── cart.controller.js     # Cart management logic
│   ├── order.controller.js    # Order management logic
│   ├── product.controller.js  # Product CRUD operations
│   └── user.controller.js     # User authentication & profile logic
│
├── middleware/
│   ├── adminAuth.js           # Middleware for admin authentication
│   ├── auth.js                # Middleware for user authentication
│   └── multer.js              # File upload logic with Multer
│
├── models/
│   ├── order.model.js         # Order data model
│   ├── productModel.js        # Product data model
│   └── user.model.js          # User data model
│
├── routes/
│   ├── cartRoutes.js          # Cart-related API routes
│   ├── orderRoutes.js         # Order-related API routes
│   ├── productRoute.js        # Product-related API routes
│   └── userRoute.js           # User-related API routes
│
├── .env                       # Environment variables (MongoDB, Cloudinary, Payment Keys)
├── .gitignore                 # Git ignore file
├── package-lock.json          # Lock file for dependencies
├── package.json               # Project metadata and dependencies
└── server.js                  # Entry point for the server
```

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add the following:

```env
MONGODB_URI=<your-mongodb-uri>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_SECRET_KEY=<your-cloudinary-secret-key>
CLOUDINARY_NAME=<your-cloudinary-name>
JWT_SECRET=<your-jwt-secret-key>
ADMIN_EMAIL=<admin-email>
ADMIN_PASSWORD=<admin-password>
STRIPE_SECRET_KEY=<your-stripe-secret-key>
RAZORPAY_KEY_SECRET=<your-razorpay-secret-key>
RAZORPAY_KEY_ID=<your-razorpay-key-id>
```

### 4. Run the Server

For development:

```bash
npm run server
```

For production:

```bash
npm start
```

Your backend API will be available at `http://localhost:5000`.

---

## 🔧 API Routes

### **User Routes**

- **POST /api/user/login** – Login a user
- **POST /api/user/register** – Register a new user
- **POST /api/user/admin** – Admin login

### **Product Routes**

- **GET /api/product/list** – Get all products
- **POST /api/product/remove** – Remove a product (Admin only)
- **POST /api/product/single** – Get a single product

### **Cart Routes**

- **POST /api/cart/get** – Get a user's cart
- **POST /api/cart/add** – Add product to cart
- **POST /api/cart/update** – Update cart item quantity

### **Order Routes**

- **POST /api/order/list** – List all orders (Admin only)
- **POST /api/order/status** – Update order status (Admin only)
- **POST /api/order/place** – Place an order (user)
- **POST /api/order/stripe** – Place an order with Stripe (user)
- **POST /api/order/razorpay** – Place an order with Razorpay (user)
- **POST /api/order/userorders** – Get all user orders
- **POST /api/order/verifyStripe** – Verify Stripe payment
- **POST /api/order/verifyRazorPay** – Verify Razorpay payment

---

## ⚡ Dependencies

- **bcrypt**: Hash passwords securely
- **cloudinary**: Image hosting service for products
- **cors**: Enable cross-origin requests
- **dotenv**: Manage environment variables
- **express**: Web framework for building APIs
- **jsonwebtoken**: Handle JWT authentication
- **mongoose**: MongoDB ODM
- **multer**: Middleware for handling file uploads
- **razorpay**: Razorpay integration for payment
- **stripe**: Stripe integration for payment
- **validator**: Input validation

---

## 💡 Future Enhancements

- 📈 **Analytics**: Integrate order and product analytics.
- 🔐 **Admin Authentication**: Enhance admin login with multi-factor authentication (MFA).
- 🏷️ **Product Categories**: Add filtering and categorization for products.

---

## 👨‍💻 Contributing

We welcome contributions! Please fork the repo and submit a pull request with your changes. For major changes, please open an issue to discuss them first.

---

## 📬 Contact

If you have any questions or feedback, feel free to reach out through the repository’s issues or contact us directly.

---

Thanks for using **Worncom E-Commerce Backend**! 🚀
