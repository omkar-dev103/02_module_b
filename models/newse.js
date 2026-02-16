const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

const MONGO_URI = "mongodb://localhost:27017/test";

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);

mongoose.connection.once("open", async () => {
    try {
        const existingUsers = await User.find();
        if (existingUsers.length === 4) {
            await User.insertMany([
                { name: "John doe", email: "john@example.com", age: 28 },
                { name: "Jane Smith", email: "jane@example.com", age: 32 },
                { name: "Alice Johnson", email: "alice@example.com", age: 24 }
            ]);
            console.log("Sample data inserted");
        }
    } catch (error) {
        console.error(error);
    }
});

app.get("/", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
