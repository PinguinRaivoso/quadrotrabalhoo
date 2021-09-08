const express=require("express")
const app = express()
const handlebars = require("express-handlebars")

//config
    //template engine
    app.engine('handlebars', handlebars({defaultLayout:"main"}));
    app.set("view engine","handlebars");

app.get("/", (req,res)=>{
    res.render("homersimpson")
})









app.listen(8080, ()=>{
    console.log("romandajw 8080")
})