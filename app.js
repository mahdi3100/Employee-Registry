var createError = require('http-errors');
var express = require('express');
var path = require('path');
//var cookieParser = require('cookie-parser');
//var logger = require('morgan');
var cors = require('cors');
//var bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');


/** All Rooter execpt LOGOUT */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signUpRouter = require('./routes/signup');
var signInRouter = require('./routes/signin');
var uploadRouter = require('./routes/upload');
var commentRouter = require('./routes/comment');
var homeRouter = require('./routes/home');
var profileRouter = require('./routes/profile');
var deleteuserRouter = require('./routes/deleteuser');





var app = express();

var session = require('express-session');
//var MemoryStore = require('session-memory-store')(session);
//var sessionStor = new MemoryStore({checkperiod:60/*3minut*/});



var MongoConnect = require('./db/config.db');

//Create instance of mongodb that connect to Database  -  POOL  connection
var dbPOOL = new MongoConnect()

//app.use(bodyParser.urlencoded({ extended: true }))

//middleware cors
app.use(cors());

//to be able to upload file 
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './tmp/' 
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'static/public/dist')));



//set session middlewre
var sessionMiddlewaremahdi = session({//must
  secret: 'onlymehaha',
  rolling: true,
  resave: true,
  cookie: { httpOnly: false, secure: false, maxAge: 1440000 },
  saveUninitialized: true, 
  //store:sessionStor
});
app.use(sessionMiddlewaremahdi);


//middleware to attach pool with every req 
app.use(function (req, res, next) {
  req.dbPOOL = dbPOOL; 
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});




//END POINTS API
app.use('/', indexRouter);
app.use('/home', homeRouter);
app.use('/user', profileRouter);
app.use("/deleteuser", deleteuserRouter);
app.get('/auth', function (req, res, next) {

  //If already user has a session , then prevent him to back to Auth page
  if (req.session.user) {
    return res.redirect("/home")
  }


  res.render('index', { title: "Auth page", page: '../static/public/dist/auth.html' });
});


app.get("/logout", function (req, res) {
  req.session.destroy(() => res.redirect("/auth"))
})

/*
app.get('/user/:myuser', function(req, res, next) {
  
  console.log("rrrrrrrrrrrrrrrrrrrrr")
  console.log(req.params.myuser)
  res.render('index',{title:"user",page:'../static/public/dist/profile.html'}); 
  
})*/

//Fetch API 
app.use('/signup', signUpRouter)
app.use('/signin', signInRouter)
app.use('/upload', uploadRouter);
app.use('/comment', commentRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));

});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
