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
router.get('/customer_Prise',function (req,res) {
    res.render('customer_Prise',{});
})
router.get('/video',function(req,res){
    res.render('video', {});
});

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
});
router.get('/enjoy',function(req,res){
    res.render('enjoy', {images:[
        {id:1,name:'客人嘉薇',src:'/images/enjoy/wedding-dresses/1.jpg'},
        {id:2,name:'客人李倩',src:'/images/enjoy/wedding-dresses/2.jpg'},
        {id:3,name:'客人梦醒',src:'/images/enjoy/wedding-dresses/3.jpg'},
        {id:4,name:'客人瑜涵',src:'/images/enjoy/wedding-dresses/4.jpg'},
        {id:5,name:'客人孟婕',src:'/images/enjoy/wedding-dresses/5.jpg'},
        {id:6,name:'客人路阳',src:'/images/enjoy/wedding-dresses/6.jpg'},
        {id:7,name:'客人津如',src:'/images/enjoy/wedding-dresses/7.jpg'},
        {id:8,name:'客人海燕',src:'/images/enjoy/wedding-dresses/8.jpg'},
        {id:9,name:'客人宋茜',src:'/images/enjoy/wedding-dresses/9.jpg'}
    ]});
});

router.get('/the-earth',function(req,res){
    res.render('the-earth', {images:[
        {id:1,name:'大理管霄',src:'/images/the-earth/1.jpg'},
        {id:2,name:'大理婉玉',src:'/images/the-earth/2.jpg'},
        {id:3,name:'大理婉玉',src:'/images/the-earth/3.jpg'},
        {id:4,name:'大理婉玉',src:'/images/the-earth/4.jpg'},
        {id:5,name:'大理管霄',src:'/images/the-earth/5.jpg'},
        {id:6,name:'大理宇洁',src:'/images/the-earth/6.jpg'},
        {id:7,name:'三亚艳霞',src:'/images/the-earth/7.jpg'},
        {id:8,name:'三亚洁',src:'/images/the-earth/8.jpg'},
        {id:9,name:'三亚夏',src:'/images/the-earth/9.jpg'}
    ]});
});


module.exports = router;
