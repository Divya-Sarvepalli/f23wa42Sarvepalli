var express = require('express');
var a=Math.random();
var b=Math.random();
var c=Math.random();
var d=Math.random();
var router = express.Router();

router.get('/', function(req, res, next) {
   var e=Math.pow(a,b);
   var f=Math.sign(b);
   var g=Math.tanh(c);
   var h=Math.trunc(d);

    res.send(e);
    res.send(f);
    res.send(g);
    res.send(h);
  
  });
  
  module.exports = router;