var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/story_ContactUs',function(req,res){
    res.render('story_ContactUs', {});
});
router.get('/story_AboutUs',function(req,res){
    res.render('story_AboutUs', {});
});
// router.get('/Story',function(req,res){
//     res.render('Story', {});
// });

router.get('/works',function(req,res){
    res.render('works', {images:[
        {id:1,name:'风吹起的裙角',src:'/images/works/1.jpg'},
        {id:2,name:'起风了',src:'/images/works/2.jpg'},
        {id:3,name:'时光恋人',src:'/images/works/3.jpg'},
        {id:4,name:'午后蜜语',src:'/images/works/4.jpg'},
        {id:5,name:'午后蜜语2',src:'/images/works/5.jpg'},
        {id:6,name:'午后蜜语3',src:'/images/works/6.jpg'},
        {id:7,name:'森之密藏Ⅱ',src:'/images/works/7.jpg'},
        {id:8,name:'一见倾心',src:'/images/works/8.jpg'},
        {id:9,name:'木质生活Ⅲ',src:'/images/works/9.jpg'}
    ]});
})


module.exports = router;
