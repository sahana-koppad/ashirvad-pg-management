# Ashirvad PG Management System

A full-stack, real-time management platform for paying guest (PG) accommodations.

Built to replace manual registers and scattered spreadsheets with a centralized dashboard for rooms, residents, payments, complaints, and notices.

Repository: https://github.com/sahana-koppad/ashirvad-pg-management

---

## Overview

Ashirvad PG Management System is a full-stack web application built to digitize and streamline the day-to-day operations of a paying guest accommodation, from tracking room and bed occupancy to managing residents, rent payments, complaints, and notices, all from a single real-time dashboard.

The project follows a clean layered architecture (Controller, Service, Repository) on the backend and a component-driven structure on the frontend, with a fully documented REST API connecting the two.

The system was built to address a real, everyday operational problem, with an architecture designed to scale toward production features such as role-based authentication, online payments, and reporting.

---

## The Problem

Running a PG manually typically involves:

- No easy way to track which beds are vacant versus occupied
- Repeated, error-prone manual updates to registers
- Resident complaints going unlogged or unresolved
- Resident information scattered across notebooks and spreadsheets
- No single view of occupancy, rent status, or notices

Ashirvad PG Management System solves this with a centralized, real-time dashboard that brings rooms, residents, payments, complaints, and notices together in one place.

---

## Key Features

**Real-Time Dashboard**
At-a-glance visibility into PG operations, including total rooms, residents and beds, occupied versus available beds, live occupancy percentage, total and open complaints, and active notices.

**Room Management**
Full CRUD operations for room inventory, including room type, monthly rent, total beds, and live bed availability.

**Resident Management**
Centralized resident records, including contact details, assigned room, rent amount, and payment status.

**Complaint Management**
End-to-end complaint lifecycle, including registration, priority tagging, status tracking, resolution, and removal.

**Notice Management**
Quick, dated notices to keep all residents informed, with easy removal of outdated notices.

**Authentication**
Signup, login, logout, and protected routes on the frontend, architected to plug in Spring Security and JWT for production-grade authentication.

---

## Technology Stack

| Layer | Technologies |
|---|---|
| Backend | Java, Spring Boot, Spring Web, Spring Data JPA, Bean Validation, Maven, Lombok |
| Database | MySQL |
| Frontend | React, Vite, JavaScript, React Router, Axios, Bootstrap, CSS animations |
| API | RESTful architecture (JSON over HTTP) |

---

## System Architecture

The backend follows a clean, layered architecture that separates concerns and keeps business logic decoupled from data access:

```
React Frontend
      |
      |  REST API (Axios)
      v
  Controller Layer
      |
  Service Layer
      |
  Repository Layer
      |
  MySQL Database
```

- Controller: handles HTTP requests and responses, and input validation
- Service: encapsulates business logic
- Repository: manages persistence via Spring Data JPA
- Frontend: consumes REST endpoints and renders a responsive, real-time UI

---

## Project Structure

```
ashirvad-pg-management/
|
|-- backend/
|   |-- pom.xml
|   `-- src/
|       |-- main/
|       |   |-- java/com/ashirvad/pg/
|       |   |   |-- config/
|       |   |   |-- controller/
|       |   |   |-- entity/
|       |   |   |-- repository/
|       |   |   |-- service/
|       |   |   `-- exception/
|       |   `-- resources/
|       |       `-- application.properties
|       `-- test/
|
|-- frontend/
|   |-- package.json
|   |-- vite.config.js
|   |-- public/
|   `-- src/
|       |-- components/
|       |-- pages/
|       |-- services/
|       |-- assets/
|       |-- App.jsx
|       |-- App.css
|       |-- index.css
|       `-- main.jsx
|
|-- README.md
`-- .gitignore
```

---

## REST API Reference

### Room Management

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/rooms | Get all rooms |
| GET | /api/rooms/{id} | Get a room by ID |
| POST | /api/rooms | Add a new room |
| PUT | /api/rooms/{id} | Update room details |
| DELETE | /api/rooms/{id} | Delete a room |

### Resident Management

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/residents | Get all residents |
| GET | /api/residents/{id} | Get a resident by ID |
| POST | /api/residents | Add a new resident |
| PUT | /api/residents/{id} | Update resident details |
| DELETE | /api/residents/{id} | Delete a resident |

### Complaint Management

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/complaints | Get all complaints |
| GET | /api/complaints/{id} | Get a complaint by ID |
| POST | /api/complaints | Register a new complaint |
| PUT | /api/complaints/{id} | Update complaint status |
| DELETE | /api/complaints/{id} | Delete a complaint |

### Notice Management

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/notices | Get all notices |
| GET | /api/notices/{id} | Get a notice by ID |
| POST | /api/notices | Create a new notice |
| PUT | /api/notices/{id} | Update a notice |
| DELETE | /api/notices/{id} | Delete a notice |

### Dashboard

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/dashboard/summary | Get real-time occupancy and summary statistics |

---

## Getting Started

### Prerequisites

- Java 17 or later, and Maven
- Node.js 18 or later, and npm
- MySQL 8 or later

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

Note: Never commit real database credentials to GitHub. Use environment variables or a separate local properties file excluded via `.gitignore`.

### 4. Run the backend

```bash
cd backend
mvn spring-boot:run
```

The backend runs at http://localhost:8080

### 5. Run the frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend runs at http://localhost:5173

---

## Project Status

| Feature | Status |
|---|---|
| Real-time PG dashboard | Complete |
| Room and bed tracking | Complete |
| Resident management | Complete |
| Payment status tracking | Complete |
| Complaint management | Complete |
| Notice management | Complete |
| Occupancy calculation | Complete |
| REST API integration | Complete |
| MySQL integration | Complete |
| Frontend authentication | Complete |
| Validation and exception handling | Complete |
| Responsive UI | Complete |
| Spring Security and JWT | Planned |

---

## Roadmap

- Secure backend authentication with Spring Security and JWT
- Role-based access (Admin and Staff)
- Resident payment history and online rent payment
- Automated room and bed allocation
- Email and SMS notifications
- Complaint image uploads
- Search, filtering, and pagination
- Monthly income reports and analytics
- Resident check-in and check-out workflow
- Cloud deployment

---

## Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Author

Sahana Koppad

GitHub: https://github.com/sahana-koppad

Repository: https://github.com/sahana-koppad/ashirvad-pg-management
