# 📚 Book Inventory Management System

A cloud-native full-stack web application for managing book inventory. This project demonstrates modern application development and deployment practices using React, Node.js, MySQL, Docker, and AWS cloud services.

---

## 🚀 Overview

The Book Inventory Management System allows users to manage book records through a simple web interface. Users can create, view, update, and delete book information while interacting with a RESTful backend API.

This project was built to practice:

- Full-Stack Development
- Containerization with Docker
- Multi-Container Applications
- AWS Cloud Deployment
- ECS Fargate Container Orchestration
- DevOps Best Practices

---

## ✨ Features

- Add new books
- View all books
- Update existing books
- Delete books
- RESTful API architecture
- Responsive React user interface
- Containerized application deployment

---

## 🏗️ Architecture

```text
                Internet
                    │
                    ▼
      Application Load Balancer (ALB)
                    │
        ┌───────────┴───────────┐
        │                       │
        ▼                       ▼
 React Frontend          Node.js Backend
 (Vite Application)      (Express API)
                                  │
                                  ▼
                           MySQL Database
```

---

## 🛠️ Technology Stack

### Frontend

- React.js
- Vite
- Axios

### Backend

- Node.js
- Express.js

### Database

- MySQL

### DevOps & Cloud

- Docker
- Docker Compose
- Amazon ECR
- Amazon ECS Fargate
- Application Load Balancer (ALB)
- Amazon CloudWatch

---

## 📂 Project Structure

```text
Book-Inventory-Management-System
│
├── Frontend/
│   ├── src/
│   ├── public/
│   └── Dockerfile
│
├── Backend/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   └── Dockerfile
│
├── docker-compose.yml
│
└── README.md
```

---

## 🗄️ Database Schema

```sql
CREATE DATABASE book_inventory;

USE book_inventory;

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    author VARCHAR(255),
    price DECIMAL(10,2)
);
```

---

## 🐳 Docker Deployment

The application is fully containerized using Docker.

Services:

- Frontend Container
- Backend Container
- MySQL Container

Run locally:

```bash
docker compose up --build
```

---

## ☁️ AWS Deployment

The application is designed for deployment using AWS container services.

### Infrastructure

- Amazon ECR (Container Registry)
- Amazon ECS Fargate (Container Orchestration)
- Application Load Balancer
- CloudWatch Logs

### Deployment Flow

```text
Source Code
     │
     ▼
Docker Build
     │
     ▼
Amazon ECR
     │
     ▼
Amazon ECS Fargate
     │
     ▼
Application Load Balancer
     │
     ▼
Users
```

---

## ⚙️ Local Development Setup

### Backend

```bash
cd Backend
npm install
cp .env.example .env
npm run dev
```

### Frontend

```bash
cd Frontend
npm install
cp .env.example .env
npm run dev
```

---

## 📸 Application Screenshots

### Dashboard

<img width="1918" height="785" alt="image" src="https://github.com/user-attachments/assets/16bdde2f-8574-486e-bb11-0559b3044f41" />


---

## 🔧 DevOps Practices Demonstrated

- Multi-container application architecture
- Docker image creation and management
- Environment variable configuration
- Container networking
- AWS ECS service deployment
- Application Load Balancing
- Cloud-native application design

---

## 👨‍💻 Author

**Madusha Lakshan**

Junior DevOps & Cloud Engineer

- Docker
- AWS
- Linux
- Cloud Computing
- DevOps Engineering
