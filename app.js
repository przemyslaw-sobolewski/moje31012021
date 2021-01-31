const express = require("express");
const port = process.env.PORT || 4000;
const app = express();
const path = require("path");


app.set("view engine", 'hbs');
app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.get("/", function (req, res) {
    res.render("index" ,{
        pageTitle:"Lekcja 01"
    });
})

app.use('/js', express.static(path.join(__dirname, "./js")));



app.get("/about/Przemek", function (req, res) {
    res.send("Hello World");
})


app.listen(port, (err) => {
    if (err) {
        return console.log("błąd:", err)
    }
    console.log(`serwer działa na porcie ${port}`)
})