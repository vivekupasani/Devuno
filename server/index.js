const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv").config();
const aiRoute = require("./routes/aiRoutes");

//setup middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//define routes
app.use("/api/v1", aiRoute);

//test endpoint
app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

//start server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
