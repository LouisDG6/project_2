// const segovia = [
//     {name: "EMMA WALLET-ON-A-CHAIN",
//     description: "Italian Buttero Leather in Chestnut",
//     img: "https://i.imgur.com/z2grr0e.png"},

//     {name:"EMMA SATCHEL",
//     description:"Italian Minerva Leather in Black",
//     img: "https://i.imgur.com/Vkjrp6B.png"},

//     {name:"EMMA SATCHEL",
//     description:"Italian Buttero Leather in Tan",
//     img: "https://i.imgur.com/JzIefVQ.png"},

//     {name:"VERTICAL CARDHOLDER",
//     description:"Italian Buttero Leather in Red",
//     img: "https://i.imgur.com/D6P0PMZ.png"},

//     {name:"SADDLE CROSSBODY WITH CHAIN",
//     description:"Italian Buttero Leather in Black and Chestnut",
//     img: "https://i.imgur.com/akXlZ6R.png"},

//     {name:"MINI TRUNK CROSSBODY",
//     description:"Italian Buttero Leather in Chestnut",
//     img: "https://i.imgur.com/63D8Jhf.png"},

//     {name:"EMMA SMALL SATCHEL WITH AIRPOD CASE HOLDER AND STRAP",
//     description:"Italian Buttero Leather in Optic White",
//     img: "https://i.imgur.com/HyJNGOv.png"},

//     {name:"HARNESS TALL TOTE",
//     description:"Saddle Leather in Black",
//     img: "https://i.imgur.com/M5VVDpP.png"},

//     {name:"LARGE EMMA SATCHEL WITH STRAP",
//     description:"Italian Buttero Leather in Chestnut",
//     img: "https://i.imgur.com/ZyTSZsj.png"},


// ]

///////////////////////////////////
// import dependencies
///////////////////////////////////
// import the existing connected mongoose object from connection.js
const mongoose = require("./connection")

// destructuring Schema and model from mongoose
const {Schema, model} = mongoose 


// make a fruits schema
const segoviaSchema = new Schema({
    name: String,
    description: String,
    img: String
   
})
// Make the Segovia Model
const Segovia = model("Segovia", segoviaSchema)



module.exports = Segovia