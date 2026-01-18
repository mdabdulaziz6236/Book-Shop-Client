# 📚 Book Shop Management System

A full-stack web application designed to manage a digital book inventory. Users can browse books, view details, and authorized administrators can add new books to the collection using a secure mock authentication system.

## 🚀 Live Demo
- **Frontend (Client):** https://book-shop-client-one.vercel.app
- **Backend (Server):** https://book-shop-server-three.vercel.app

---

## ✨ Features & Explanations

### 1. 🔐 Mock Authentication
- A secure login system using hardcoded credentials and **HTTP-only Cookies**.
- **Middleware Protection:** Prevents unauthorized access to private routes (like `/add-items`). If a user tries to access these pages without logging in, they are redirected to the login page.

### 2. 📖 Book Management (CRUD)
- **View Books:** Users can browse the entire collection of books fetched from the MongoDB database.
- **Add Books:** Admins can add new books with details like title, author, price, category, rating, and image URL.

### 3. 👁️ Live Preview System
- The "Add Book" page features a **Real-time Preview Card**. As you type in the form, the book card updates instantly, showing exactly how it will look to the users.

### 4. 🎨 Modern & Responsive UI
- Built with **Next.js** and **Tailwind CSS**.
- **Dark/Light Mode:** Fully supported theme switching.
- **Responsive Navbar:** Includes a dynamic login/logout state and mobile-friendly menu.

---

## 🛠️ Tech Stack

- **Frontend:** Next.js (App Router), Tailwind CSS, DaisyUI, React Hot Toast.
- **Backend:** Express.js, MongoDB (Native Driver).
- **Authentication:** Custom Mock Auth (Cookie-based).
- **Deployment:** Vercel (Serverless).

---

## 🔗 Route Summary (API Endpoints)

| Method | Endpoint      | Description                 | Access       |
| :----- | :------------ | :-------------------------- | :----------- |
| `GET`  | `/`           | Server health check         | Public       |
| `GET`  | `/items`      | Fetch all books             | Public       |
| `GET`  | `/items/:id`  | Fetch a single book details | Public       |
| `POST` | `/items`      | Add a new book to DB        | Public (API) |

---

## ⚙️ Setup & Installation Instructions

Follow these steps to run the project locally.

### 1. Clone the Repository
```bash
git clone https://github.com/mdabdulaziz6236/Book-Shop-Client
cd <project-folder-name>
