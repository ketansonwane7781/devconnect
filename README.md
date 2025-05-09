# 💼 DevConnect - Full Stack Developer Networking Platform

![MERN Stack](https://img.shields.io/badge/MERN-Fullstack-blue?style=for-the-badge&logo=react)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)

> DevConnect is a full-stack web application that allows developers to connect, build profiles, and interact. Built using the **MERN** stack (MongoDB, Express, React, Node.js).

---

## 🚀 Features

- 🔐 User Authentication with JWT
- 🧑 Profile Management (view, update)
- 📊 Dashboard for registered users
- 🌐 Public Profiles by ID
- 💾 Secure API routes
- ⚛️ Redux for state management
- 🧭 React Router Navigation

---

## 🛠 Tech Stack

| Frontend   | Backend       | Database | Tools & Libs         |
|------------|---------------|----------|-----------------------|
| React      | Node.js       | MongoDB  | Express, Mongoose     |
| Redux      | Express.js    | Mongoose | JWT, React Router DOM |

---

## 📁 Folder Structure

devconnect/
├── frontend/
│ ├── public/
│ │ └── index.html
│ └── src/
│ ├── components/
│ │ └── Navbar.js
│ ├── pages/
│ │ ├── Home.js
│ │ ├── Login.js
│ │ ├── Register.js
│ │ ├── Dashboard.js
│ │ └── Profile.js
│ ├── redux/
│ │ ├── store.js
│ │ └── userSlice.js
│ ├── App.js
│ └── index.js
├── backend/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ ├── authController.js
│ │ └── userController.js
│ ├── middleware/
│ │ └── authMiddleware.js
│ ├── models/
│ │ └── User.js
│ ├── routes/
│ │ ├── authRoutes.js
│ │ └── userRoutes.js
│ ├── .env
│ ├── server.js
├── screenshots/
│ ├── landing.png
│ ├── login.png
│ ├── register.png
│ ├── dashboard.png
│ └── profile.png
├── README.md
└── package.json


---

## 🛠️ How to Run the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/ketansonwane7781/devconnect.git
cd devconnect

### 2. Set up the Backend

cd backend
npm install

✅ Create a .env file inside backend/ and add:

PORT=5000
MONGO_URI=mongodb://localhost:27017/devconnect
JWT_SECRET=your_jwt_secret

Then start the server:
npm start

### 3. Set up the Frontend

cd ../frontend
npm install
npm start

🌐 App Usage
Visit http://localhost:3000 to access the app

Register a new account

Login to access the Dashboard

Edit your profile

View your or other developers' profiles via /profile/:id

🏠 Landing Page

🔐 Login Page

📝 Register Page

📊 Dashboard

👤 Profile Page


🧠 Learning Objectives
Build a full stack web app from scratch

Use Redux for state management

Implement token-based authentication

Handle protected routes in frontend and backend

🗃️ Version Control
Use the following commands to push your code:

bash
Copy code
git init
git remote add origin https://github.com/<your-username>/devconnect.git
git checkout -b main
git add .
git commit -m "initial commit"
git push -u origin main

📬 Contact
Built with ❤️ by Ketan Sonawane

