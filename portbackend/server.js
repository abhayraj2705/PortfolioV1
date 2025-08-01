import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import connectionDB from "./connectDb/db.js";
import { Contact } from "./models/contact.model.js";

dotenv.config();

const app = express();

// CORS for frontend connection
app.use(cors({
  origin: "*", // allow all for now; change to your frontend URL later
  methods: ["GET", "POST"]
}));

app.use(express.json());

// Connect to MongoDB
connectionDB();

// Create reusable email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Gmail address
    pass: process.env.EMAIL_PASS  // App password
  }
});

// Contact form API
app.post("/contact", async (req, res) => {
  try {
    const { email, name, message } = req.body;

    // Validation
    if ([email, name, message].some((f) => !f?.trim())) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save to MongoDB
    await Contact.create({
      email: email.trim(),
      name: name.trim(),
      message: message.trim()
    });

    // Send email notification to you
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "New Contact Form Submission",
      text: `You got a new message from ${name} (${email}):\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `
    });

    return res.status(200).json({ message: "Contact saved & email sent" });

  } catch (error) {
    console.error("Contact creation error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
