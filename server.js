var {urlRequests} = require('./api/controllers/mainController');
var express = require('express'),
app = express(),
schedule = require('node-schedule')
port = process.env.port || 3000;
bodyParser = require('body-parser');

console.log("Server ready on port "+port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/mainRoutes'); //importing route
routes(app); //register the route

app.listen(port)
console.log('Challenge API server started on: ' + port);

schedule.scheduleJob('0 0 * * *', () => { urlRequests =[] }) // run everyday at midnight, empty the array