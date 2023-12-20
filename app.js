// server.js
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Update the path to mongoose
const cors = require('cors');
const todo = require("./models/todo");
const router = require("./routes/todo");
const connectDB = require('./config/db');

const app = express();

// connect the database
connectDB();

// initialize middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(
  // {
  //   origin:["https://shahitodoapp.vercel.app"],
  //   methods:["POST","GET"],
  //   credentials:true
  // }
));


app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to TODO Server!',
  });
});
 

// use routes here 
app.use('/api/todo', router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 5001;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
