var express = require('express');

var app = express();

var routes = require('./routes');
app.get('/', routes.index);

routes.requests = require('./routes/request').request;
app.get('/request', routes.requests);

app.listen(8000);