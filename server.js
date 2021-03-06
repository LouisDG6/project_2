// import deps
require("dotenv").config() 
const express = require("express") 
const morgan = require("morgan") 
const methodOverride = require("method-override")
const path = require("path")
const SegoviaRouter = require("./controllers/segovia")
const session = require("express-session")
const MongoStore = require("connect-mongo") // save sessions in mongo

const MONGO = process.env.MONGO

// const segovia = require("./models/segovia")

//import liquid
const liquid = require("liquid-express-views")
//absolute path to views folder
const viewsFolder = path.resolve(__dirname, "views/")


// app object
const app = liquid(express(), {root: viewsFolder})

//Middleware
app.use(morgan("tiny"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
// app.use(session({
//     secret: process.env.SECRET,
//     store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
//     resave: false
// }))

//Routes
app.get("/", (req, res) => {
    res.render("index.liquid")
})

//Register Segovia Router
app.use("/segovia", SegoviaRouter)


// listener
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`listening on port ${PORT}`))