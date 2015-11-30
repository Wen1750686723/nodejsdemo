var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.sendFile( __dirname + "/" + "index.htm" );
  // res.send( __dirname + "/" + "index.htm");
});


module.exports = router;
