import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import auth from "./routes/auth.js";
import message from "./routes/message.js";
import user from "./routes/user.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5020;

const __dirname = path.resolve();

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.use("/api/auth", auth);
app.use("/api/messages", message);
app.use("/api/users", user);

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
