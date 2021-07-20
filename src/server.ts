import "reflect-metadata";
import express, { response } from "express";

import "./database";

const app = express();

// Rotas

// http:localhost:3000
app.listen(3000, () => console.log("Sever is Running"));

