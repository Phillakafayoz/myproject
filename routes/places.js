const express = require("express");
const router = express.Router();

//INDEX - Show all places

router.get("/", (req, res) => {
    
    res.render("places/index")
        
    });

module.exports = router
