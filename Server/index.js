const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

app.use(cors());
app.use(express.json());

// ROUTES

//ADD SURPLUS FOOD
app.post("/orgaddsurplus",async(req,res) => {
    try{
      console.log(req.body);
      const { name, quantity, expdate, storereq, foodsafety } = req.body;
      const newSurplusFood = await pool.query(
        "INSERT INTO org_surplus (name, quantity, expdate, storereq, foodsafety) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [name, quantity, expdate, storereq, foodsafety]
      );
  
      res.json(newSurplusFood.rows[0]);
  
  
    }catch(err){
      console.log(err.message);
    }
  })
  
   //GET ALL SURPLUS FOOD 
  app.get("/getAllItems",async(req,res)=>{
    try{
      const data = await pool.query("SELECT * FROM org_surplus")
      res.json(data.rows);
    }catch(err){
      console.log(err.message);
    }
  })




app.listen(5000, () => {
    console.log("server has started on port 5000");
})