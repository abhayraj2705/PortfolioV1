import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectionDB from "./connectDb/db.js";
import { Contact } from "./models/contact.model.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: "*", // allow all for now; restrict later
  methods: ["GET", "POST"]
}));

app.use(express.json());

connectionDB();

app.post("/contact", async (req, res) => {
  try {
    const { email, name, message } = req.body;
    if ([email, name, message].some((f) => !f?.trim())) {
      return res.status(400).json({ message: "All fields are required" });
    }
    await Contact.create({
      email: email.trim(),
      name: name.trim(),
      message: message.trim()
    });
    return res.status(200).json({ message: "Contact created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
