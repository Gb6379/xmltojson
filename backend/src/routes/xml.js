const xmlController =  require("../controllers/xmlController")
const express = require("express")
const routes = express.Router()

routes.get("/teste", xmlController.teste);

module.exports = routes;