const express = require("express");
const bodyParser = require("body-parser");
let port = 4412
const routes = require("./routes")
const app = express();
const connection = require("./db/db_connection");



app.set("view engine","ejs");

app.use(express.static("public"));


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json)

//database connection
connection
    .authenticate()
    .then(() => {
        console.log("connection established :)");
    }).catch((error) => {
        console.log(error)   
});


app.use(routes)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});