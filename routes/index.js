var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/getPixieStatus', function(req, res, next) {
  res.json(global.PXOutput);
});

router.post('/setPixieStatus', function(req, res, next) {
  global.PXOutput = req.body.data
  res.json({update:'Ok'});
});

module.exports = router;
