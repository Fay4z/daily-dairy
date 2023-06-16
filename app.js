const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
const summaryRoute = require("./routes/summaryRoute");
const memoryRoute = require("./routes/memoryRoute");



const app = express();

dotenv.config();

const name =process.env.NAME;
const pass = process.env.PASSWORD;
const cluster = process.env.CLUSTER;
const database = process.env.DATABASE;


const uri = `mongodb+srv://${name}:${pass}@${cluster}.oq36lnh.mongodb.net/${database}?retryWrites=true&w=majority`;
console.log(uri);

app.set("view engine", "ejs");

app.use(express.static("public/css"));
app.use(express.static("public/js"));
app.use(express.static("public/images"));
app.use(morgan("dev"));
app.use(express.urlencoded( {extended : true } ));

mongoose.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true })
    .then( (request) => {
        app.listen(3000);
    })
    .catch( (err) => {
        console.log(err);
    })


app.get("/", (req,res) => {
    res.render("home");
})

app.get("/about", (req,res) => {
    res.render("about");
})

app.use("/summaries", summaryRoute);
app.use("/memories", memoryRoute);

app.use((req, res) => {
    res.render("404");
})