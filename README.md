# Course Management App

A modern web application built with **Next.js**, **Firebase Authentication**, and **TailwindCSS**.  
Users can log in using Email/Password or Google, manage courses, and access protected pages.  
Admins can add, update, and manage courses through a clean and responsive dashboard.

---

## 🚀 Features

- User Authentication (Email + Google)
- Client-side protected routes using a custom AuthContext
- Add, View, and Manage Courses
- Responsive UI with TailwindCSS
- Firebase-powered auth system
- Fast routing using the Next.js App Router (app directory)

---

## 📦 Installation & Setup

### 1. Clone the project

```bash
git clone gitUrl
cd my-app
Install dependencies
npm install

Firebase Configuration

Create a file:

/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

Start development server
npm run dev

Project Structure (Simplified)
app/
 ├── login/
 ├── signup/
 ├── add-course/
 ├── manage-course/
 ├── layout.js
 ├── page.js
context/
 └── AuthContext.js
lib/
 └── firebase.js
components/
 └── ProtectedRoute.jsx
 └── Navbar.jsx
 └── Footer.jsx
 └── and others
