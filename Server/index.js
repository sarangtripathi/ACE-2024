const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

// ROUTES

//ADD SURPLUS FOOD
app.post("/orgaddsurplus", async (req, res) => {
  try {
    console.log(req.body);
    const { name, quantity, expdate, storereq, foodsafety } = req.body;
    const newSurplusFood = await pool.query(
      "INSERT INTO org_surplus (name, quantity, expdate, storereq, foodsafety) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, quantity, expdate, storereq, foodsafety]
    );

    res.json(newSurplusFood.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

//GET ALL SURPLUS FOOD
app.get("/getAllItems", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM org_surplus");
    res.json(data.rows);
  } catch (err) {
    console.log(err.message);
  }
});

app.post("/register", async (req, res) => {
  try {
    const { name, email, password, address, role } = req.body;

    let tableName;
    if (role === "volunteer") {
      tableName = "volunteer";
    } else if (role === "organization") {
      tableName = "org";
    } else {
      return res.status(400).json({ error: "Invalid role" });
    }

    const query = `INSERT INTO ${tableName} (name, email, password, address) VALUES ($1, $2, $3, $4)`;
    const values = [name, email, password, address];
    await pool.query(query, values);

    // Insert into user table
    const userQuery = `INSERT INTO user (name, email, password, address, role) VALUES ($1, $2, $3, $4, $5)`;
    const userValues = [name, email, password, address, role];
    await pool.query(userQuery, userValues);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Assuming you have a users table with email and password columns
    const query = "SELECT * FROM user WHERE email = $1 AND password = $2";
    const values = [email, password];
    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET all users
app.get("/users", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM user");
    res.json(data.rows);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET all volunteers
app.get("/volunteers", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM volunteer");
    res.json(data.rows);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});
// 2411
// GET all organizations
app.get("/organizations", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM organization");
    res.json(data.rows);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(5050, () => {
  console.log("server has started on port 5050");
});
