# Book Inventory Management System

## Ongoing Project............. 😋🤞

Tech Stack:
- React + Vite
- Node.js + Express
- MySQL

MySQL Table:

CREATE DATABASE book_inventory;

USE book_inventory;

CREATE TABLE books(
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(255),
 author VARCHAR(255),
 price DECIMAL(10,2)
);

Backend:
cd Backend
npm install
copy .env.example .env
npm run dev

Frontend:
cd Frontend
npm install
copy .env.example .env
npm run dev

Deployment:
Frontend -> S3 + CloudFront
Backend -> EC2
Database -> RDS MySQL
