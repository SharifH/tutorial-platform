console.log('server is starting');
// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

var server= app.listen(3000, listening);

function listening(){
    console.log("listening...");
}

//allows express to hold static files like html(scif)
app.use(express.static('website'));

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// var port = process.env.PORT || 8080;        // set our port

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/experiment'); // connect to our database

var Version     = require('./app/models/version');


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    // console.log("0")
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our experiment api!' });   
});

// more routes for our API will happen here


// on routes that end in /bears
// ----------------------------------------------------
router.route('/experiment')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {
        console.log("creating a experiment")
        var version = new Version();      // create a new instance of the Bear model
        version.editorValue = req.body.editorValue;  // set the bears name (comes from the request)
        // version.bearType = req.body.bearType;  // set the bears type (comes from the request)

        // save the bear and check for errors
        version.save(function(err) {
            console.log("callback from save")
            console.log(err);
            if (err)
                res.json({error:err});

            res.json({ message: 'Version added!'/*, _id: 'REPLACEME'*/ });
        });
        
    });
    //get all the bears 
router.route('/experiment').get(function(req,res){
        Version.find(function(err,experiment){
            if (err)
                res.send(err);

            res.json(experiment);
        });
    });


///bears that end in ber_id
router.route('/experiment/:version_id')

    .get(function(req, res) {
        // console.log('get ID')
        Version.findById(req.params.version_id, function(err, version) {
            if (err)
                res.send(err);
            res.json(version);
        });
    })
//update the bear with the ID that you just pulled
    .put(function(req, res) {
        // use our model to find the bear we want 
        Version.findById(req.params.version_id, function(err, version) {
            if (err)
                res.send(err);
        
        version.editorValue = req.body.editorValue;  // update the bears info


         // save the bear
            version.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'version updated!' });

            });

        });

    })

// delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
    .delete(function(req, res) {
        Version.remove({
            _id: req.params.version_id
        }, function(err, version) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);


app.get('/', sendVersion);   


function sendVersion(req, res) {
    console.log("1.")
    res.sendFile("index.html", { root: __dirname }); 
}



// START THE SERVER
// =============================================================================
// app.listen(port);
// console.log('Magic happens on port ' + port);


