var crypto = require('crypto');
var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
/* GET home page. */
router.get('/', function(req, res, next) {
	// var response = {
 //       first_name:req.query.first_name,
 //       last_name:req.query.last_name
 //    };
    //console.log(response);
    //res.end(JSON.stringify(response));
    if (req.query.first_name=="") {
    	res.render('login', { title: 'Express' });
    }else{
    	if (req.query.username=="wenbo"&&req.query.password=="wenbo") {
    		res.end("ss");
    	}else{
    		res.render('login', { title: 'Express' });
    	}
    }
    
});

module.exports = router;