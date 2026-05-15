# TASIK – Task Manager App

> A complete Full Stack Web Application built during the Veltrix IT Solutions Internship.

![TASIK](https://img.shields.io/badge/TASIK-Task%20Manager-7c3aed?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?style=for-the-badge)
![Deployed](https://img.shields.io/badge/Deployed-Live-success?style=for-the-badge)

---

## 🔗 Live Demo

| | URL |
|---|---|
| **Frontend** | https://tasik-git-main-muneeb-i78s-projects.vercel.app |
| **Backend API** | https://veltrix-internship.onrender.com |

---

## 📌 Features

- ✅ User Registration & Login
- ✅ JWT Authentication with auto logout on expiry
- ✅ Add, Edit, Delete, View Tasks
- ✅ Filter tasks by Active / Inactive
- ✅ Responsive design (Mobile + Desktop)
- ✅ Glassmorphism UI with animated background
- ✅ Session verification on every page load
- ✅ Toast notifications

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Authentication | JWT (JSON Web Tokens) |
| Password Security | bcryptjs |
| Frontend Hosting | Vercel |
| Backend Hosting | Render |

---

## 📁 Project Structure

```
Final_Project/
├── config/
│   └── db.js              ← MongoDB connection
├── middleware/
│   └── auth.js            ← JWT auth middleware
├── models/
│   ├── User.js            ← Users schema
│   └── Data.js            ← Tasks schema
├── routes/
│   ├── authRoutes.js      ← Register, Login, Me
│   └── dataRoutes.js      ← CRUD endpoints
├── frontend/
│   ├── index.html         ← Login & Register page
│   └── dashboard.html     ← Dashboard page
├── .env                   ← Environment variables (not pushed)
├── .gitignore
├── server.js              ← Main Express server
└── package.json
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description | Protected |
|---|---|---|---|
| POST | /api/auth/register | Register new user | ❌ |
| POST | /api/auth/login | Login user | ❌ |
| GET | /api/auth/me | Get current user | ✅ |
| POST | /api/data | Create task | ✅ |
| GET | /api/data | Get all tasks | ✅ |
| PUT | /api/data/:id | Update task | ✅ |
| DELETE | /api/data/:id | Delete task | ✅ |

---

## 🗄 Database Structure

**Users Collection:**
```json
{
  "name": "Muneeb Ijaz",
  "email": "muneeb@gmail.com",
  "password": "hashed_password",
  "role": "user",
  "createdAt": "2025-05-10"
}
```

**Data Collection:**
```json
{
  "title": "My Task",
  "description": "Task description",
  "category": "Work",
  "status": "active",
  "createdBy": "user_id_reference",
  "createdAt": "2025-05-10"
}
```

---

## ⚙️ Run Locally

```bash
# Clone the repo
git clone https://github.com/muneeb-i78/Veltrix_internship.git

# Go to project folder
cd Veltrix_internship/Final_Project

# Install dependencies
npm install

# Create .env file
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
PORT=3000

# Start server
node server.js

# Open frontend
Open Final_Project/frontend/index.html with Live Server
```

---

## 👨‍💻 Developer

**Muneeb Ijaz**
- GitHub: [@muneeb-i78](https://github.com/muneeb-i78)
- Internship: Veltrix IT Solutions

---

## 📄 License
This project was built as part of the Veltrix IT Solutions Internship Program.
