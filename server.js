if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
const express = require('express')
const app     = express()
const bodyParser = require("body-parser")
const multer  = require("multer")
const Place = require("./models/places")

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static('public'))

// requiring routes
const indexRoutes  = require("./routes/index")
const placesRoutes = require("./routes/places")



//DATABASE SETTINGS
const mongoose = require("mongoose")
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true, useUnifiedTopology: true})
const db       =    mongoose.connection
db.on("error", error => console.error(error)) 
db.on("open", () => console.log("Connected to Mongoose")) 

app.use("/", indexRoutes)
app.use("/places", placesRoutes)


app.listen(process.env.PORT || 3000)
