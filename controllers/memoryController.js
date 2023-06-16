const Memory = require("../models/memory");

//memory_all, memory_create_get, memory_create_post, memory_single, memory_del

const memory_all = (req,res) => {
    Memory.find().sort({ createdAt: -1})
        .then(result => {
            res.render("memory/memory", {memories : result})
        })
        .catch(err => {
            console.log(err);;
        })
}

const memory_create_get = (req,res) => {
    res.render("memory/addMemory");
}

const memory_single = (req, res) => {
    const id = req.params.id;

    Memory.findById(id)
        .then(result => {
            res.render("memory/memorySingle", {memory: result});
        })
        .catch(err => {
            console.log(err);
        })
}

const memory_create_post = (req,res) => {
    const memory = new Memory(req.body)
    // console.log(req.body);
    memory.save()
        .then(result => {
            res.redirect("/memories")
        })
        .catch(err => {
            console.log(err);
        })
}

const memory_del = (req,res) => {
    const id = req.params.id;

    Memory.findByIdAndDelete(id)
        .then(result => res.json({ redirect : "/memories" }))
        .catch(err => console.log(err))
}

module.exports = {
    memory_all,
    memory_create_get,
    memory_single,
    memory_create_post,
    memory_del
}
