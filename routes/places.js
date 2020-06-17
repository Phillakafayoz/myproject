const express = require("express");
const router = express.Router();
const Place = require("../models/places")

//INDEX - Show all places 
router.get("/", function (req, res) {
//get all places from DB
Place.find({}, function (err, allPlaces) {
    if (err) {
        console.log(err);
    }
    else {
        res.render("places/index", { places: allPlaces })
    }
})
	})

//create route- add new place to DB
//CREATE - add new place to DB
router.post("/", function (req, res) {
    // get data from form and add to place array
    const name = req.body.name
    const image = req.body.image
    const newPlace = { name: name, image: image }   

        // Create a new place and save to DB
        Place.create(newPlace, function(err, newlyCreated){
            if(err) {
                console.log(err)
            } else {
                //redirect back to places page
                console.log(newlyCreated)
                res.redirect("/places")
            }
            })
        })
    
        
    




//new - show form to create a place

router.get("/new", (req, res) => {
    res.render("places/new")
})

module.exports = router
