
/*
 * GET home page.
 */

require('sugar'); 

exports.index = function(req, res){   
    var images = [
        {src: '/images/model1.png'}, 
        {src: '/images/model2.png'}, 
        {src: '/images/model3.png'}, 
        {src: '/images/model4.png'}, 
        {src: '/images/model5.png'}, 
    ];
    res.render('index', { images: images.randomize() });
};

exports.about = function(req, res) {
    res.render('about');
}

exports.contact = function(req, res) {
    res.render('contact')
}