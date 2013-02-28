require(['jquery',
        'libs/bootstrap/js/bootstrap-transition', 
        'libs/bootstrap/js/bootstrap-carousel', 
        'domReady!'], function($){
    $('#coverimage').carousel({
        interval: 5000,
        cycle: true
    });    
});
