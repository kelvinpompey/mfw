        
$(document).ready(function(){
    $('#coverimage').carousel({
        interval: 5000,
        cycle: true
    });  
    
    $(".carousel").mouseenter(function(evt){
        console.log('mouseenter', this); 
        $(this).find(".carousel-control").fadeIn();       
    }); 
    
    $(".carousel").mouseleave(function(evt){
        $(this).find(".carousel-control").fadeOut();         
    });     
    

    
    


});