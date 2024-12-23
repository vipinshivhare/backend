const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todos');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5051;

app.use(bodyParser.json());
app.use(cors());
mongoose.connect(process.env.DB_CONNECTION_STRING);


app.use('/todos', todoRoutes);

app.get("/home", (
  req,res 
 ) => {
  res.send("Welcome to the home page");
 } );
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
