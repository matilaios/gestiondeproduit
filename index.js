const express = require('express');
const app = express();
const path = require('path');
const crudProduct = require('./routes/crudProduct');
const bodyParser = require('body-parser');
//bodyParser : ça ne coute rien de l'ajouter
const ejs = require('ejs');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use('/product', crudProduct);


app.listen(3000, ()=>{
console.log("c'est bon capitaine je suis sur le port 3000");

});