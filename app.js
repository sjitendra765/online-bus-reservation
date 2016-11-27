var express = require('express');
var path = require ('path');
var Report = require('fluentreports' ).Report;
var expressValidator = require('express-validator');
var bodyParser = require('body-parser');
var path = require ('path');
var exphbs = require('express-handlebars');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport =  require('passport');
var LocalStrategy = require('passport-local'),Strategy;
var routes = require('./routes/index');
var travels = require('./routes/travel');
var buses = require('./routes/bus');
var buslist = require('./routes/buslist');
var test = require('./routes/test');
var contact = require('./routes/contact_info');
var signup = require('./routes/signup');
var login = require('./routes/login');
var confirm = require('./routes/confirm');
var getticket = require('./routes/getticket');
var booking = require('./routes/booking');
var history = require('./routes/history');
var admin = require('./routes/admin');
var forgetpwd = require('./routes/forgetpwd');
var reset = require('./routes/reset');
var bus_reserve = require('./routes/bus_reserve');
var about_us = require('./routes/about_us');
var dailyJob = require('./routes/dailyJob');
var report = require('./routes/report');
dailyJob.start();
var RedisStore = require('connect-redis')(session);

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname,'bower_components')));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'routes')));

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

app.use(session({  
	secret:'secret',
	saveUninitialized:true,
	resave:true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

//conneect flash middleware
app.use(flash());
app.use(function(req,res,next){
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	res.locals.user = req.user || null;
  res.locals.reserve = req.reserve || null;
  next();
});

app.use('/',routes);
app.use('/bus',buses);
app.use('/buslist',buslist);
app.use('/test',test);
app.use('/contact_info',contact);
app.use('/signup',signup);
app.use('/login',login);
app.use('/confirm',confirm);
app.use('/getticket',getticket);
app.use('/booking',booking);
app.use('/history',history);
app.use('/admin',admin);
app.use('/forget_password',forgetpwd);
app.use('/reset',reset);
app.use('/bus_reserve',bus_reserve);
app.use('/about_us',about_us);
app.use('/report',report);
//app.use(dailyJob);

app.listen(3030,function(){
   console.log('server started in port 3030'); 
});