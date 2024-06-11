import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import auth from "./routes/auth.js";
import message from "./routes/message.js";
import user from "./routes/user.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";


const PORT = process.env.PORT || 5020;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", auth);
app.use("/api/messages", message);
app.use("/api/users", user);


server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
