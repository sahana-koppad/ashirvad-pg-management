<div align="center">

# 🏠 Ashirvad PG Management System

**A full-stack, real-time management platform for paying guest (PG) accommodations.**

Built to replace manual registers and scattered spreadsheets with a centralized dashboard for rooms, residents, payments, complaints, and notices.

[![Java](https://img.shields.io/badge/Java-Backend-orange?logo=openjdk)](#technology-stack)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-REST%20API-6DB33F?logo=springboot)](#technology-stack)
[![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react)](#technology-stack)
[![MySQL](https://img.shields.io/badge/MySQL-Database-4479A1?logo=mysql)](#technology-stack)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)

[Live Demo](#) · [Report Bug](https://github.com/sahana-koppad/ashirvad-pg-management/issues) · [Request Feature](https://github.com/sahana-koppad/ashirvad-pg-management/issues)

</div>

---

## 📌 Overview

**Ashirvad PG Management System** is a full-stack web application built to digitize and streamline the day-to-day operations of a paying guest accommodation — from tracking room and bed occupancy to managing residents, rent payments, complaints, and notices, all from a single real-time dashboard.

The project follows a clean **layered architecture** (Controller → Service → Repository) on the backend and a **component-driven** structure on the frontend, with a fully documented REST API connecting the two.

> Built to solve a real, everyday operational problem — not a tutorial clone — with an architecture designed to scale toward production features like role-based auth, payments, and reporting.

---

## 🎯 The Problem

Running a PG manually typically means:

- ❌ No easy way to track which beds are vacant vs. occupied
- ❌ Repeated, error-prone manual updates to registers
- ❌ Resident complaints going unlogged or unresolved
- ❌ Resident information scattered across notebooks/spreadsheets
- ❌ No single view of occupancy, rent status, or notices

**Ashirvad PG Management System solves this** with a centralized, real-time dashboard that brings rooms, residents, payments, complaints, and notices together in one place.

---

## ✨ Key Features

### 📊 Real-Time Dashboard
At-a-glance visibility into PG operations:
- Total rooms, residents & beds
- Occupied vs. available beds
- Live occupancy percentage
- Total and open complaints
- Active notices

### 🛏️ Room Management
Full CRUD for room inventory — room type, monthly rent, total beds, and live bed availability.

### 👥 Resident Management
Centralized resident records — contact details, assigned room, rent amount, and payment status.

### 📢 Complaint Management
End-to-end complaint lifecycle — registration, priority tagging, status tracking, resolution, and removal.

### 📋 Notice Management
Quick, dated notices to keep all residents informed, with easy removal of outdated notices.

### 🔐 Authentication
Signup, login, logout, and protected routes on the frontend, architected to plug in **Spring Security + JWT** for production-grade auth.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Backend** | Java, Spring Boot, Spring Web, Spring Data JPA, Bean Validation, Maven, Lombok |
| **Database** | MySQL |
| **Frontend** | React, Vite, JavaScript, React Router, Axios, Bootstrap, CSS animations |
| **API** | RESTful architecture (JSON over HTTP) |

---

## 🏗️ System Architecture

The backend follows a clean, layered architecture that separates concerns and keeps business logic decoupled from data access:

```
React Frontend
      │
      │  REST API (Axios)
      ▼
  Controller Layer
      │
  Service Layer
      │
  Repository Layer
      │
  MySQL Database
```

- **Controller** — handles HTTP requests/responses and input validation
- **Service** — encapsulates business logic
- **Repository** — manages persistence via Spring Data JPA
- **Frontend** — consumes REST endpoints and renders a responsive, real-time UI

---

## 📂 Project Structure

```
ashirvad-pg-management/
│
├── backend/
│   ├── pom.xml
│   └── src/
│       ├── main/
│       │   ├── java/com/ashirvad/pg/
│       │   │   ├── config/
│       │   │   ├── controller/
│       │   │   ├── entity/
│       │   │   ├── repository/
│       │   │   ├── service/
│       │   │   └── exception/
│       │   └── resources/
│       │       └── application.properties
│       └── test/
│
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── assets/
│       ├── App.jsx
│       ├── App.css
│       ├── index.css
│       └── main.jsx
│
├── README.md
└── .gitignore
```

---

## 🔌 REST API Reference

<details>
<summary><strong>Room Management</strong></summary>

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/rooms` | Get all rooms |
| `GET` | `/api/rooms/{id}` | Get a room by ID |
| `POST` | `/api/rooms` | Add a new room |
| `PUT` | `/api/rooms/{id}` | Update room details |
| `DELETE` | `/api/rooms/{id}` | Delete a room |

</details>

<details>
<summary><strong>Resident Management</strong></summary>

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/residents` | Get all residents |
| `GET` | `/api/residents/{id}` | Get a resident by ID |
| `POST` | `/api/residents` | Add a new resident |
| `PUT` | `/api/residents/{id}` | Update resident details |
| `DELETE` | `/api/residents/{id}` | Delete a resident |

</details>

<details>
<summary><strong>Complaint Management</strong></summary>

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/complaints` | Get all complaints |
| `GET` | `/api/complaints/{id}` | Get a complaint by ID |
| `POST` | `/api/complaints` | Register a new complaint |
| `PUT` | `/api/complaints/{id}` | Update complaint status |
| `DELETE` | `/api/complaints/{id}` | Delete a complaint |

</details>

<details>
<summary><strong>Notice Management</strong></summary>

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/notices` | Get all notices |
| `GET` | `/api/notices/{id}` | Get a notice by ID |
| `POST` | `/api/notices` | Create a new notice |
| `PUT` | `/api/notices/{id}` | Update a notice |
| `DELETE` | `/api/notices/{id}` | Delete a notice |

</details>

<details>
<summary><strong>Dashboard</strong></summary>

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/dashboard/summary` | Get real-time occupancy & summary stats |

</details>

---

## 🚀 Getting Started

### Prerequisites

- Java 17+ and Maven
- Node.js 18+ and npm
- MySQL 8+

### 1. Clone the repository

```bash
git clone https://github.com/sahana-koppad/ashirvad-pg-management.git
cd ashirvad-pg-management
```

### 2. Set up the database

```sql
CREATE DATABASE ashirvad_pg;
```

### 3. Configure the backend

Update `backend/src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ashirvad_pg
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

server.port=8080
```

> ⚠️ **Never commit real database credentials to GitHub.** Use environment variables or a `.env`/`application-local.properties` file excluded via `.gitignore`.

### 4. Run the backend

```bash
cd backend
mvn spring-boot:run
```

Backend runs at → `http://localhost:8080`

### 5. Run the frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at → `http://localhost:5173`

---

## ✅ Project Status

| Feature | Status |
|---|---|
| Real-time PG dashboard | ✅ Complete |
| Room & bed tracking | ✅ Complete |
| Resident management | ✅ Complete |
| Payment status tracking | ✅ Complete |
| Complaint management | ✅ Complete |
| Notice management | ✅ Complete |
| Occupancy calculation | ✅ Complete |
| REST API integration | ✅ Complete |
| MySQL integration | ✅ Complete |
| Frontend authentication | ✅ Complete |
| Validation & exception handling | ✅ Complete |
| Responsive UI | ✅ Complete |
| Spring Security + JWT | 🔜 Planned |

---

## 🗺️ Roadmap

- [ ] Secure backend authentication with Spring Security + JWT
- [ ] Role-based access (Admin / Staff)
- [ ] Resident payment history & online rent payment
- [ ] Automated room/bed allocation
- [ ] Email & SMS notifications
- [ ] Complaint image uploads
- [ ] Search, filtering & pagination
- [ ] Monthly income reports & analytics
- [ ] Resident check-in / check-out workflow
- [ ] Cloud deployment (AWS / Render / Railway)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👩‍💻 Author

**Sahana Koppad**

[![GitHub](https://img.shields.io/badge/GitHub-sahana--koppad-181717?logo=github)](https://github.com/sahana-koppad)

**Repository:** [github.com/sahana-koppad/ashirvad-pg-management](https://github.com/sahana-koppad/ashirvad-pg-management)

---

<div align="center">

If this project helped you or you find it interesting, consider giving it a ⭐!

</div>
