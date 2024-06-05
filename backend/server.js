import express from "express";
import dotenv from "dotenv";

import auth from "./routes/auth.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5020;

dotenv.config();

app.use(express.json());
app.use("/api/auth", auth);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
