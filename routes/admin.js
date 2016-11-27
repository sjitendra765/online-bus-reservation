var express = require('express');
var router = express.Router();
var path = require ('path');
var app = express();
var bus = require('./admin/bus');
var fare = require('./admin/fare');
var routebus = require('./admin/routebus');
var travelbus = require('./admin/travelbus');
var trip = require('./admin/trip');


router.all('/*', function (req, res, next) {
	if (req.user && req.user.isAdmin == true)
	{	
		console.log(req.user.isAdmin);
		req.app.locals.layout = 'admin'; // set your layout here
        next();
    }
      else
      {
      	
        res.send(401, 'Unauthorized');
    }
   });
//router.use(express.static(__dirname + '/public'));
router.use(express.static(path.join(__dirname, '/../public')));
app.set('views', path.join(__dirname, 'views'));
router.use(express.static(path.join(__dirname, '/../bower_components')));

router.use('/bus',bus);
router.use('/fare',fare);
router.use('/routebus',routebus);
router.use('/travelbus',travelbus);
router.use('/trip',trip);

module.exports = router;