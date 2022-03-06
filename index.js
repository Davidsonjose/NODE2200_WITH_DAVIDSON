const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

//body parser middleware for getting data from the front-end in json format
app.use(express.json());
app.use(express.urlencoded({extended: true}))


const homePath = path.join(__dirname, "./views/index.html");
const readHomePath = fs.readFileSync(homePath, "utf-8");

const aboutPath = path.join(__dirname, "./views/about.html");
const readAboutPath = fs.readFileSync(aboutPath, "utf-8");

const contactPath = path.join(__dirname, "./views/contact.html");
const readContactPath = fs.readFileSync(contactPath, "utf-8");

app.get("/", (req, res) => {
  res.send(readHomePath);
  // res.send("Welcome to the homepage")
});
app.get("/about", (req, res) => {
  res.send(readAboutPath);
  // res.send("Welcome to the homepage")
});
app.get("/contact", (req, res) => {
  res.send(readContactPath);
  // res.send("Welcome to the homepage")
});


app.post('/contact', (req, res)=>{
    console.log(req.body);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
