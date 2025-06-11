import express from "express"

const app = express();
const PORT = process.env.PORT;

app.get("/api/auth/signup", (req, res) => {
    res.send("Signup Route");
})

app.get("/api/auth/signup", (req, res) => {
    res.send("Login Route");
})

app.get("/api/auth/signup", (req, res) => {
    res.send("Logout Route");
})

app.listen(5001, () => {
    console.log("Server is running on 5001");
})