var express        = require('express');
var app            = express();
//var bodyParser     = require('body-parser');
//var methodOverride = require('method-override');

// configuration ===========================================
    
// config files
//var cassandraConfig = require('./config/cassandra').config;

// set our port
var port = process.env.PORT || 8080; 

// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url); 

// get all data/stuff of the body (POST) parameters
// parse application/json 
//app.use(bodyParser.json());

// parse application/vnd.api+json as json
//app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
//app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/app'));

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/app/index.html'); // load our public/index.html file
});

app.listen(port);
console.log('Server running on port ' + port);
exports = module.exports = app;

// routes ==================================================
//require('./app/routes')(app, cassandraConfig)
//    .then(function() {
//        // Database and API are now initialized, so we can listen for requests.
//        app.listen(port);
//        console.log('Server running on port ' + port);
//        exports = module.exports = app;
//    }, function(err) {
//        // Database or API initialization failed. Oh no.
//        console.log('Initialization failed: ' + err || 'No error information was given');
//        app.get('*', function(req, res) {
//            res.status(503).send('The service is currently down.')
//        });
//        app.post('*', function(req, res) {
//            res.status(503).send('The service is currently down.')
//        });
//        app.put('*', function(req, res) {
//            res.status(503).send('The service is currently down.')
//        });
//        app.patch('*', function(req, res) {
//            res.status(503).send('The service is currently down.')
//        })
//    });
