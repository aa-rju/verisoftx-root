const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require('dotenv').config();

const app = express();
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ecommerce"
});

db.connect((err) => {
  if (err) {
    console.error("Failed to connect to MySQL:", err.message);
  } else {
    console.log("Connected to MySQL database.");
  }
});

// otp sending logic
app.post("/api/send-otp", async (req, res) => {
  const { email } = req.body;
  // checking if email already exists in table
  db.query(
    "SELECT * FROM signup_otp WHERE email = ? AND created_at >= NOW() - INTERVAL 10 MINUTE",
    [email],
    async (err, results) => {
      if (err) return res.status(500).json({ error: "Database error" });

      if (results.length > 0) {
        return res.json({ success: false, error: "OTP already sent. Try again after 10 min." });
      }


  const otp = Math.floor(100000 + Math.random() * 900000).toString();

   db.query(
    "INSERT INTO signup_otp (email, otp) VALUES (?, ?)",
    [email, otp],
    async (err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to Send OTP" });
      }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP code is: ${otp}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, otp });
  } catch (error) {
    res.status(500).json({ error: "Failed to send OTP" });
  }
}
   );
});
});

// resend otp logic
app.post("/api/resend-otp", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ success: false, error: "Email is required." });

  // Generate new OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Update OTP for the existing email
  db.query(
    "UPDATE signup_otp SET otp = ?, created_at = NOW() WHERE email = ?",
    [otp, email],
    async (err, result) => {
      if (err) return res.status(500).json({ success: false, error: "Database error" });
      if (result.affectedRows === 0) {
        return res.json({ success: false, error: "No OTP request found for this email." });
      }

      // Send OTP email
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your OTP Code (Resent)",
        text: `Your new OTP code is: ${otp}`,
      };

      try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true });
      } catch (error) {
        res.status(500).json({ success: false, error: "Failed to send OTP" });
      }
    }
  );
});

// verify otp logic
app.post("/api/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ success: false, error: "Email and OTP are required." });
  }

  const query = `
    SELECT * FROM signup_otp
    WHERE email = ? AND otp = ?
      AND created_at >= NOW() - INTERVAL 10 MINUTE
    ORDER BY created_at DESC
    LIMIT 1
  `;

  db.query(query, [email, otp], (err, results) => {
    if (err) return res.status(500).json({ success: false, error: "Database error." });

    if (results.length > 0) {
      // Optional: Invalidate OTP (delete or mark as used)
      db.query("DELETE FROM signup_otp WHERE email = ?", [email]);

      return res.json({ success: true });
    } else {
      return res.json({ success: false, error: "Invalid or expired OTP." });
    }
  });
});


// login post logic
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  db.query(
    "SELECT * FROM login_credentials WHERE email = ? AND password = ?",
    [email, password],
    (err, results) => {
      if (err) return res.status(500).json({ error: "DB error" });
      if (results.length > 0) {
        const user = results[0];
        delete user.password;
        res.json({ success: true, user });
      } else {
        res.json({ error: "Invalid email or password" });
      }
    }
  );
});

app.listen(5000, () => console.log("Server running on port 5000"));