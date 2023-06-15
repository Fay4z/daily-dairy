const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public/css"));
app.use(express.static("public/js"));
app.use(express.static("public/images"));
app.use(morgan("dev"));
app.use(express.urlencoded( {extended : true } ));


app.listen(3000);

app.get("/", (req,res) => {
    res.render("home");
})

app.get("/about", (req,res) => {
    res.render("about");
})

app.get("/summaries", (req,res) => {
    const summaries = [
        {date: new Date().toLocaleDateString(), Summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem nulla laborum sed consectetur non quo velit quod repellat beatae optio omnis, praesentium adipisci illum reprehenderit minima exercitationem. Esse,Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem nulla laborum sed consectetur non quo velit quod repellat beatae optio omnis, praesentium adipisci illum reprehenderit minima exercitationem Esse", consumedJob: "Mobile", name: "Pleasant Life", rate: "8/10"},
        {date: new Date().toLocaleDateString(), Summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem nulla laborum sed consectetur non quo velit quod repellat beatae optio omnis, praesentium adipisci illum reprehenderit minima exercitationem. Esse,Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem nulla laborum sed consectetur non quo velit quod repellat beatae optio omnis, praesentium adipisci illum reprehenderit minima exercitationem Esse", consumedJob: "Laptop",  name: "A bike ride to ladakh", rate: "6/10"}
    ]
    res.render("summary", {summaries});
})

app.get("/memories", (req,res) => {
    const memories = [
        {date: new Date().toLocaleDateString(), Summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem nulla laborum sed consectetur non quo velit quod repellat beatae optio omnis, praesentium adipisci illum reprehenderit minima exercitationem. Esse,Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem nulla laborum sed consectetur non quo velit quod repellat beatae optio omnis, praesentium adipisci illum reprehenderit minima exercitationem Esse", consumedJob: "Mobile", name: "Pleasant Life", rate: "8/10"},
        {date: new Date().toLocaleDateString(), Summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem nulla laborum sed consectetur non quo velit quod repellat beatae optio omnis, praesentium adipisci illum reprehenderit minima exercitationem. Esse,Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem nulla laborum sed consectetur non quo velit quod repellat beatae optio omnis, praesentium adipisci illum reprehenderit minima exercitationem Esse", consumedJob: "Laptop",  name: "A PeaceFul Day", rate: "5/10"}
    ]
    res.render("memory", {memories});
})

app.get("/summary/create", (req,res) => {
    res.render("addSummary");
})

app.get("/memory/create", (req,res) => {
    res.render("addMemory");
})

app.get("/summaries/:id", (req, res) => {
    const summary = {
        date: new Date().toLocaleDateString(),
        name: "A Peacefull Day",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem nulla laborum sed consectetur non quo velit quod repellat beatae optio omnis, praesentium adipisci illum reprehenderit minima exercitationem. Esse,Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem nulla laborum sed consectetur non quo velit quod repellat beatae optio omnis, praesentium adipisci illum reprehenderit minima exercitationem Esse Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem nulla laborum sed consectetur non quo velit quod repellat beatae optio omnis, praesentium adipisci illum reprehenderit minima exercitationem. Esse,Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem nulla laborum sed consectetur non quo velit quod repellat beatae optio omnis, praesentium adipisci illum reprehenderit minima exercitationem Esse",
        mostConsumed: "Laptop",
        leastConsumed: "Youtube",
        change: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem nulla laborum sed consectetur non quo velit quod repellat beatae optio omnis, praesentium adipisci illum reprehenderit minima exercitationem. Esse,Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem nulla laborum sed consectetur non quo velit quod repellat ",
        emotion: "Happy",
        rate: "8"
    }
    res.render("summarySingle", {summary});
})

app.get("/memories/:id", (req, res) => {
    const memory = {
        date: new Date().toLocaleDateString(),
        name: "A Peacefull Day",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem nulla laborum sed consectetur non quo velit quod repellat beatae optio omnis, praesentium adipisci illum reprehenderit minima exercitationem. Esse,Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem nulla laborum sed consectetur non quo velit quod repellat beatae optio omnis, praesentium adipisci illum reprehenderit minima exercitationem Esse Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem nulla laborum sed consectetur non quo velit quod repellat beatae optio omnis, praesentium adipisci illum reprehenderit minima exercitationem. Esse,Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem nulla laborum sed consectetur non quo velit quod repellat beatae optio omnis, praesentium adipisci illum reprehenderit minima exercitationem Esse",
        relive: "Yes",
        rate: "8"
    }
    res.render("memorySingle", {memory});
})