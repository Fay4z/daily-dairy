const Summary = require("../models/summary");
//summary_all, summary_create_get, summary_create_post, summary_single, summary_del

const summary_all = (req, res) =>{
    Summary.find().sort({ createdAt: -1})
        .then(result => {
            res.render("summary/summary", {summaries : result})
        })
        .catch(err => {
            console.log(err);;
        })
}

const summary_create_get = (req, res) => {
    res.render("summary/addSummary");
}

const summary_single = (req, res) => {
    const id = req.params.id;

    Summary.findById(id)
        .then(result => {
            res.render("summary/summarySingle", {summary: result});
        })
        .catch(err => {
            console.log(err);
        })
}

const summary_del = (req,res) => {
    const id = req.params.id;

    Summary.findByIdAndDelete(id)
        .then(result => res.json({ redirect : "/summaries" }))
        .catch(err => console.log(err))
}

const summary_create_post = (req,res) => {
    const summary = new Summary(req.body)
    // console.log(req.body);
    summary.save()
        .then(result => {
            res.redirect("/summaries")
        })
        .catch(err => {
            console.log(err);
        })
}

module.exports = {
    summary_all,
    summary_create_get,
    summary_create_post,
    summary_single,
    summary_del
}