var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Conrad Eye Centers' });
});

router.get('/services/vision-exam', function(req, res, next) {
  res.render('services/vision-exam', { title: 'Vision Exam' });
});
module.exports = router;
