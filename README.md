# 🛍️ E-Commerce Application

Welcome to the ultimate e-commerce experience! This MERN-stack project has everything you'd want for a slick, user-friendly shopping platform. Built with a powerful backend (Node.js, Express, and MongoDB) and a polished frontend using EJS and Tailwind CSS, it's designed for both users and admins alike to enjoy a seamless online shopping experience. Let’s dive into what it has to offer! 🎉

## ✨ Features

- 🔒 **User Authentication:** Sign up, log in, or log out with ease.
- 🛒 **Product Management:** Add, edit, and delete products like a pro.
- 🛍️ **Shopping Cart:** Because who shops for just one thing?
- 🔧 **Admin Panel:** Manage users, orders, and inventory all in one place.
- 📸 **Image Upload:** Upload product images with Multer.
- 🛡️ **JWT-based Authorization:** Keep your account safe and secure.
- ✨ **Flash Messages:** Stay informed with real-time feedback.

## 💻 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB + Mongoose ODM
- **Frontend:** EJS, Tailwind CSS
- **Authentication:** JWT, Bcrypt for extra security
- **File Upload:** Multer
- **Other Cool Tools:** Cookie-parser, Express-session, Connect-flash


## 🚀 Installation Guide

### 1. Clone the Repository

```bash
git clone https://github.com/Kajal-Deore/ecom
cd ecom
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set up Environment Variables

Create a `.env` file in the root directory with the following:

```plaintext
JWT_KEY=your_jwt_secret
EXPRESS_SESSION_SECRET=your_session_secret
```

### 4. Start the App

```bash
nodemon app.js
```

Once it's running, head over to [http://localhost:3000](http://localhost:3000) and start exploring!

## 🗂️ Project Structure

Here's a quick breakdown:

- **app.js** - The main entry point for the app
- **routes/** - Organizes all application routes
- **models/** - Database models live here
- **middlewares/** - Custom functions to make things easy
- **controllers/** - Where the routing magic happens
- **config/** - All configuration files in one place
- **public/** - Static files (CSS, images, etc.)
- **views/** - EJS templates for dynamic pages

## 📬 Questions?

Reach out via [your GitHub profile](https://github.com/Kajal-Deore) or [your Linkedin profile](https://www.linkedin.com/in/kajal-deore) if you have any questions or issues. Happy coding! 🎉
