const Sequelize = require("sequelize")
const moment = require("moment")
const connection = require("../db/db_connection")



const Data = connection.define('data', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    json: {
        type: Sequelize.JSON
    },
    xml:{
        type: Sequelize.TEXT
    },
    update_hour: {
        type: Sequelize.TIME
    },
    creation_date: {
        type: Sequelize.DATEONLY,
        get: function (){ 
            return moment(this.getDataValue('DateTime')).format('DD/MM/YYYY')
        }
    },update_date: {
        type: Sequelize.DATEONLY,
        get: function (){ 
            return moment(this.getDataValue('DateTime')).format('DD/MM/YYYY')
        }
    },
},  { 
    timestamps: false,

})

Data.beforeCreate(async(Data) => {
    Data.creation_date = `${data.getDay()}/${data.getMonth()}/${data.getFullYear()}`
    Data.update_date = `${data.getDay()}/${data.getMonth()}/${data.getFullYear()}`
    Data.update_hour = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
})

Data.beforeUpdate(async(Data) => {
    Data.update_date = `${data.getDay()}/${data.getMonth()}/${data.getFullYear()}`
    Data.update_hour = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
})

Data.sync({force: false}).then(() => {
    console.log("Table data loaded succefully");
});

module.exports = Data;


