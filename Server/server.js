const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: ["https://portfolio-ubp6.onrender.com"],
  })
);

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  message: String,
});

const User = mongoose.model("User", userSchema);

app.post("/contact", async (req, res) => {
  const { username, email, message } = req.body;

  try {
    console.log("username", username, email, message);
    if (!username || !email || !message)
      throw new Error("not enought credentail");
    const newUser = new User({ username, email, message });
    await newUser.save();

    const transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,
      port: process.env.NODEMAILER_PORT,
      secure: true,
      auth: {
        user: process.env.NODEMAILER_SENDING_EMAIL_TO,
        pass: process.env.NODEMAILER_SENDING_EMAIL_APPPASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.NODEMAILER_SENDING_EMAIL_TO,
      subject: "New Contact Form Submission",
      text: `You have a new message from ${username} (${email}):\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: error.message || "Error sending message." });
  }
});

mongoose.connect(process.env.MONGO_URI).then;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
