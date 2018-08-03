const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const controller = require('./controller')
const{CONNECTION_STRING}=process.env


require('dotenv').require

const app = express()

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(connection => {
    app.set('db', connection);
    console.log('db connected');
})





app.get('/api/houses',controller.getTheHouses);
app.post('/api/houses',controller.addHouses);
app.delete('/api/houses/:id', controller.deleteHouse)

const port = 3001
app.listen(port,()=> console.log(`Nothing like a little ${port} wine!`))
