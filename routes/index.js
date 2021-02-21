var express = require('express');
var router = express.Router();

var admin = require("firebase-admin");
var serviceAccount = require("../bridge-a39c9-firebase-adminsdk-myyr7-e46af30f3a.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bridge-a39c9-default-rtdb.firebaseio.com"
});
var db = admin.database();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bridging Pacific' });
});

router.post('/signup', function(req, res, next) {
  db.ref('members').push({
    email: req.body.email
  });
  res.render('about', { email: req.body.email });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { email: false });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});

module.exports = router;
