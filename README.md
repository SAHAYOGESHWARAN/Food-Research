# Food Research

**Food Research** is a full-stack web application designed to facilitate food-related research and data analysis. This platform allows users to explore, create, and manage food ingredients, recipes, and research insights efficiently.

## 🌐 Live Demo

👉 [Click here to view the live application](https://food-research-ten.vercel.app)

---

## 📖 Overview

The primary goal of this project is to provide a system for researchers, students, or food enthusiasts to:
- Register and log in to the system
- Create and manage ingredients
- Add and manage food recipes
- Analyze food data for research or diet planning purposes

---

## ✨ Features

- ✅ User Registration & Login
- ✅ Create, Read, Update, Delete (CRUD) functionality for ingredients
- ✅ Add food recipes with dynamic input
- ✅ Responsive and user-friendly design
- ✅ REST API integration
- ✅ MongoDB database for storing data
- ✅ Secure backend authentication
- ✅ Deployment-ready structure

---

## 🛠️ Tech Stack

**Frontend**
- HTML5, CSS3
- JavaScript (ES6)
- React.js

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

**Deployment**
- Frontend: Vercel
- Backend: Render / Railway (configurable)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- npm
- MongoDB (local or cloud like MongoDB Atlas)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/SAHAYOGESHWARAN/Food-Research.git

# 2. Navigate to the project directory
cd Food-Research

# 3. Install backend dependencies
npm install

# (Optional) If frontend is separate
# cd client
# npm install

# 4. Set up environment variables
# Create a `.env` file in the root directory with the following:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000

# 5. Start the server
npm start

| Method | Endpoint             | Description                 |
| ------ | -------------------- | --------------------------- |
| POST   | /api/register        | Register a new user         |
| POST   | /api/login           | Login with user credentials |
| POST   | /api/ingredient      | Add new ingredient          |
| GET    | /api/ingredients     | Get all ingredients         |
| PUT    | /api/ingredient/\:id | Update an ingredient        |
| DELETE | /api/ingredient/\:id | Delete an ingredient        |
🤝 Contributing
Contributions are welcome!
Feel free to fork the repository, make changes, and submit a pull request. Please ensure your changes are well-tested and documented.

📄 License
This project is licensed under the MIT License.
See the LICENSE file for details.

👨‍💻 Author
Saha Yogeshwaran
🔗 LinkedIn
📂 GitHub Profile
