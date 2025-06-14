import dotenv from "dotenv";
dotenv.config();

import express from "express";
import authRoutes from "./routes/auth.route.js"
import { connectDB } from "./lib/db.js";


const app = express();
const PORT = process.env.PORT;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
}).catch((error) => {
    console.error("Failed to connect to database", error);
    process.exit(1);
});
