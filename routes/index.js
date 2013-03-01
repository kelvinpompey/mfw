
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
    
    var groups = images.randomize().inGroupsOf(5);  
    console.log(groups); 
    
    res.render('index', { groups: images.randomize().inGroupsOf(5) });
};

exports.about = function(req, res) {
    res.render('about');
}

exports.contact = function(req, res) {
    res.render('contact')
}