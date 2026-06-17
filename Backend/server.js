
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pool } from "./db.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/books", async (req,res)=>{
 const [rows] = await pool.query("SELECT * FROM books ORDER BY id DESC");
 res.json(rows);
});

app.get("/api/books/:id", async (req,res)=>{
 const [rows] = await pool.query("SELECT * FROM books WHERE id=?", [req.params.id]);
 res.json(rows[0]);
});

app.post("/api/books", async (req,res)=>{
 const {name,author,price}=req.body;
 const [result]=await pool.query(
 "INSERT INTO books(name,author,price) VALUES(?,?,?)",
 [name,author,price]
 );
 res.json({id:result.insertId,message:"Book added"});
});

app.put("/api/books/:id", async (req,res)=>{
 const {name,author,price}=req.body;
 await pool.query(
 "UPDATE books SET name=?,author=?,price=? WHERE id=?",
 [name,author,price,req.params.id]
 );
 res.json({message:"Book updated"});
});

app.delete("/api/books/:id", async (req,res)=>{
 await pool.query("DELETE FROM books WHERE id=?", [req.params.id]);
 res.json({message:"Book deleted"});
});

app.listen(process.env.PORT || 5000, ()=>{
 console.log("Server running");
});
