// app.js

const express = require('express');
const bodyParser = require('body-parser');

const frotaRotas = require('./routes/routes'); 
const app = express();

app.set('view engine', 'ejs');

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = "mongodb+srv://admin:admin@cluster0-fg4km.mongodb.net/frota?retryWrites=true";
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/frota', frotaRotas);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});