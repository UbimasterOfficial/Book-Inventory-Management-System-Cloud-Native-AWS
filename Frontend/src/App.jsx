
import React, { useEffect, useState } from "react";
import axios from "axios";

const API=(import.meta.env.VITE_API_URL || "http://localhost:5000/api").replace(/\/$/, "");

export default function App(){
 const [books,setBooks]=useState([]);
 const [form,setForm]=useState({name:"",author:"",price:""});
 const [editId,setEditId]=useState(null);

 const load=async()=>{
  const res=await axios.get(`${API}/books`);
  setBooks(res.data);
 };

 useEffect(()=>{load();},[]);

 const submit=async(e)=>{
  e.preventDefault();
  if(editId){
   await axios.put(`${API}/books/${editId}`,form);
  }else{
   await axios.post(`${API}/books`,form);
  }
  setForm({name:"",author:"",price:""});
  setEditId(null);
  load();
 };

 const del=async(id)=>{
  await axios.delete(`${API}/books/${id}`);
  load();
 };

 return (
 <div className="container">
 <h1>Book Inventory Management</h1>
 <form onSubmit={submit}>
 <input placeholder="Book Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
 <input placeholder="Author" value={form.author} onChange={e=>setForm({...form,author:e.target.value})}/>
 <input placeholder="Price" value={form.price} onChange={e=>setForm({...form,price:e.target.value})}/>
 <button>{editId?"Update":"Add"} Book</button>
 </form>

 <table>
 <thead><tr><th>Name</th><th>Author</th><th>Price</th><th>Actions</th></tr></thead>
 <tbody>
 {books.map(b=><tr key={b.id}>
 <td>{b.name}</td><td>{b.author}</td><td>{b.price}</td>
 <td>
 <button onClick={()=>{setEditId(b.id);setForm(b);}}>Edit</button>
 <button onClick={()=>del(b.id)}>Delete</button>
 </td>
 </tr>)}
 </tbody>
 </table>
 </div>
 
);
}
