var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/story_ContactUs',function(req,res){
    res.render('story_ContactUs', {});
})

module.exports = router;
