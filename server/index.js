import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
//components
import connection from './database/db.js';
const port=2000;
const app=express();
dotenv.config();
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;


connection(username,password);
app.listen(port,()=>console.log(`server is running on port ${port}`));