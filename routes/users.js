var express = require('express');
var sum = 0;
var more = 0;
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  more+=1;
  sum+=more;
  res.send("Sum is "+sum);

});

module.exports = router;
