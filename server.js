// import deps
require("dotenv").config() 
const express = require("express") 
const morgan = require("morgan") 
const methodOverride = require("method-override")
const segovia = require("./models/segovia")


// app object
const app = require("liquid-express-views")(express())

//Middleware
app.use(morgan("tiny"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

//Routes
app.get("/", (req, res) => {
    res.send("This App is working")
})

// Index Route - get - /segovia
app.get("/segovia", (req, res) => {
        res.render("segovia/index.liquid", {segovia1: segovia})
    })

// Shopping Route
app.get("/segovia/shopping_cart", (req, res) => {
    res.render("segovia/shopping.liquid")
})

// // New Route
// app.get("/segovia/new", (req, res) => {
//     res.render("new.liquid")
// })

// Create Route
app.post("/segovia/shopping_cart", (req, res) => {
    segovia.push(req.body)
    res.redirect("/segovia/shopping_cart")
})

// Destroy Route
app.delete("/segovia/shopping_cart/:id", (req, res) => {

    const id = req.params.id
     segovia.splice(id, 1)
    res.redirect("/segovia/shopping_cart")
})

// Show Route
app.get("/segovia/:id", (req, res) => {
    const id = parseInt(req.params.id)
    res.render("segovia/show.liquid", {segovia1: segovia[id], index: id})
})


// listener
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`listening on port ${PORT}`))