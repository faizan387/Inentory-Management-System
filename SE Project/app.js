var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home")
})

app.get("/items", function(req, res){
    var itemsList = [
        {name: "Belt", quantity: 10},
        {name: "Uniform", quantity: 20},
        {name: "Cap", quantity: 30}
    ]
    res.render("items", {items: itemsList})
})

app.listen(3000, process.env.IP, function(){
    console.log("Server running!")
})