var express       = require('express'),
    session       = require('express-session');
    app           = express(),
    path          = require('path'),
    fs            = require('fs'),
    mongoose      = require('mongoose'),
    cors          = require('cors'),
    bodyParser    = require('body-parser'),
    indexRoutes   = require('./routes/index');

mongoose.Promise = global.Promise;
//initial connection to database
const databaseUri = "mongodb://nwwhite:hackingdandy1@ds143573.mlab.com:43573/dandyhacks-2018";
mongoose.connect(databaseUri, { useMongoClient: true })
      .then(() => console.log(`Database connected`))
      .catch(err => console.log(`Database connection error: ${err.message}`));

app.set('view engine', 'html');
app.engine('html', function (path, options, callbacks) {
  fs.readFile(path, 'utf-8', callback);
});

app.use(express.static(path.join(__dirname, '../app')));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret : 'secret',
  resave : false,
  saveUninitialized : true,
  cookie: { path    : '/', secure: false, maxAge  : 20000 }
}));


app.use(function(req, res, next) {
  next();
});

app.use('/', indexRoutes);

module.exports = app;
