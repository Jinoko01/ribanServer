var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
 	let body = req.body;
	console.log('req.body');
	console.log(body);
    res.send(body);
});

module.exports = router;
