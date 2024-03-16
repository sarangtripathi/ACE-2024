import express, { urlencoded } from "express";

const app = express()


app.listen(9090, () => {
    console.log("Server is Listening on port 9090");
  });