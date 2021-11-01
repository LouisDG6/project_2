/////////////////////////
// Import Dependencies
/////////////////////////
const express = require("express")
const Segovia = require("../models/segovia.js")

//////////////////
// create router
//////////////////
const router = express.Router()

//seed route - seed our starter data
router.get("/seed", (req, res) => {
   
    const startSegovias = [
        {name: "EMMA WALLET-ON-A-CHAIN",
        description: "Italian Buttero Leather in Chestnut",
        img: "https://i.imgur.com/z2grr0e.png"},
    
        {name:"EMMA SATCHEL",
        description:"Italian Minerva Leather in Black",
        img: "https://i.imgur.com/Vkjrp6B.png"},
    
        {name:"EMMA SATCHEL",
        description:"Italian Buttero Leather in Tan",
        img: "https://i.imgur.com/JzIefVQ.png"},
    
        {name:"VERTICAL CARDHOLDER",
        description:"Italian Buttero Leather in Red",
        img: "https://i.imgur.com/D6P0PMZ.png"},
    
        {name:"SADDLE CROSSBODY WITH CHAIN",
        description:"Italian Buttero Leather in Black and Chestnut",
        img: "https://i.imgur.com/akXlZ6R.png"},
    
        {name:"MINI TRUNK CROSSBODY",
        description:"Italian Buttero Leather in Chestnut",
        img: "https://i.imgur.com/63D8Jhf.png"},
    
        {name:"EMMA SMALL SATCHEL WITH AIRPOD CASE HOLDER AND STRAP",
        description:"Italian Buttero Leather in Optic White",
        img: "https://i.imgur.com/HyJNGOv.png"},
    
        {name:"HARNESS TALL TOTE",
        description:"Saddle Leather in Black",
        img: "https://i.imgur.com/M5VVDpP.png"},
    
        {name:"LARGE EMMA SATCHEL WITH STRAP",
        description:"Italian Buttero Leather in Chestnut",
        img: "https://i.imgur.com/ZyTSZsj.png"},
    
    ]

    // delete all items
    Segovia.deleteMany({})
    .then((data) => {
        Segovia.create(startSegovias)
        .then((data) => {
            res.json(data)
        })
    })
})

// Index Route - get - /segovia
router.get("/", (req, res) => {
    Segovia.find({})
    .then((segovia) => {
        console.log(segovia)
    res.render("segovia/index.liquid", {segovia})
    
})
})

// Shopping Route
router.get("/shopping_cart", (req, res) => {
res.render("segovia/shopping.liquid")
})

// Create Route
router.post("/", (req, res) => {
Segovia.create(req.body)
.then((segovia) => {
    //redirect to shopping bag
    res.redirect("/segovia")
})
        .catch((error) => {
        res.json({error})
    })
})

// edit route - get request - /segovia/:id/edit
router.get("/:id/edit", (req, res) => {
    const id = req.params.id
    Segovia.findById(id)
    .then((segovia) => {
        res.render("segovia/edit.liquid", { segovia })
    })
    .catch((error) => {
        res.json({error})
    })
})

// update route - put request - "/segovia/:id"
router.put("/:id", (req, res) => {
    const id = req.params.id
    Segovia.findByIdAndUpdate(id, req.body, {new: true})
    .then((segovia) => {
        res.redirect("/segovia")
    })
     .catch((error) => {
        res.json({error})
    })
})

// destroy route - delete request - /segovia/:id
router.delete("/:id", (req, res) => {
    const id = req.params.id
    Segovia.findByIdAndRemove(id)
    .then((segovia) => {
        res.redirect("/segovia")
    })
     .catch((error) => {
        res.json({error})
    })
})

// Show Route
router.get("/:id", (req, res) => {
const id = req.params.id
Segovia.findById(id)
.then((segovia) => {
res.render("segovia/show.liquid", {segovia})
})
.catch((error) => {
    res.json({error})
})
})

module.exports = router