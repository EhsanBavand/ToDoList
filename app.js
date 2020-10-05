const express = require("express");
const bodyParser = require("body-parser");
const date =  require(__dirname + "/date.js");

const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];
var workItems = [];

app.use(bodyParser.urlencoded({
    extended: true
}));

// to read the css file, becuase it's a static file we created it. lesson 287
app.use(express.static("public"));
// Declear EJS engine
app.set('view engine', 'ejs');

app.get("/", function (req, res) {

    // if we have just one function we call same below
    let day = date.getDate();
    // If we have more than one we must write like below

    //we add newListItem in res.render
    res.render("list", {
        listTitle: day,
        newListItems: items
    });
})

app.post("/", function (req, res) {
    // If you want to see the name of item you added and also the key is for which page?
    // console.log(req.body);

    var item = req.body.newItem;

    if(req.body.list === "Work List"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);    
        // Must use redirect becuase if we didnot use it we will get error in <li><%= newListItem %></li>,
        // becuase it's empty and can not return it 
        res.redirect("/");
    }
})

app.get("/work", function (req, res) {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems
    })
})

// app.post("/work", function (req, res) {
//     var item = req.body.newItem;
//     items.push(workItems);
//     res.redirect("/work");
// })

app.listen(3000, function (req, res) {
    console.log("Port server is connected in number 3000!");
})