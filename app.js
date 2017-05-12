var express = require('express');

var app = express();

var routes = require('./routes');

app.get('/', routes.index);

app.listen(8000);