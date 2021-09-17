const Data = require("../models/data")
require("dotenv/config")


teste = (req,res) => {
    console.log("oi")
    res.send("oi")
}

module.exports = {teste}