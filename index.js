const express = require("express");
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const teacherRoutes = require("./routes/teacherlogin");
const studentRoutes = require("./routes/studentlogin");

const app = express();
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/RMS", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to MongoDB"));

app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout');
app.use(express.static('public'));
app.use('/teacher', express.static('views/teacher'));
app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/teacher", teacherRoutes);
app.use("/student", studentRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
