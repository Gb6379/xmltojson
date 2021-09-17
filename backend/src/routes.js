const express = require("express")
const routes = express.Router()



//Routes
xmlkRoute = require("./routes/xml")

routes.use(xmlkRoute)

module.exports = routes;