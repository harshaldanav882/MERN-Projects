const express = require("express");
const router = express.Router();

//Index 
router.get("/", (req, res) => {
    res.send("GET for posts");
});

//Show  
router.get("/:id", (req, res) => {
    res.send("GEt for post Id");
});

//POST 
router.post("/", (req, res) => {
    res.send("POST for posts");
});

//Delete  
router.delete("/:id", (req, res) => {
    res.send("Delete for post Id");
});

module.exports = router;