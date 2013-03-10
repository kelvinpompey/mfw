$(document).ready(function(){
    
    
    if(window.innerWidth <= 480) {
        
        new FastClick(document.body); 
        
        $("#imageslider .carousel-inner .item img").slice(1).each(function(index, img){
            var elem = $("<div>", {
               'class': 'item' 
            });
            $("#imageslider .carousel-inner").append($(elem).append(img)); 
            
        });     
    }
});     
