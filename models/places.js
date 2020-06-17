const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
    name: String,
    image: String
})
 
const Place = mongoose.model("Place", placeSchema)




module.exports = mongoose.model("Place", placeSchema);