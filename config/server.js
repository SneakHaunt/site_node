var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();


app.set('view engine','ejs');
app.set('views', './app/views');



/*
bodyParser.urlencoded(): Parses the text as URL encoded data 
(which is how browsers tend to send form data from regular forms set to POST) 
and exposes the resulting object (containing the keys and values) on req.body. 
For comparison; in PHP all of this is automatically done and exposed in $_POST.

urlencoded deve ser usado para captura de dados vindos através de um POST feito por formulário HTML,
pois, o request padrão de um formulário com o metódo POST é um content-type do tipo "application/x-www-form-urlencoded"

Se os dados virão de um POST onde o content-type do request 
for "application/json", então usar bodyParser.json()

extended: true permite maior controle.
*/


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./app/public'));
app.use(expressValidator());

consign()
.include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.then('app/controllers')
.into(app);



module.exports = app;