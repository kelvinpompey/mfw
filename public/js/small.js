$(document).ready(function(){
    
    

    
    if(window.innerWidth <= 1024) {
        
        new FastClick(document.body); 
        
        $("#imageslider .carousel-inner .item img").slice(1).each(function(index, img){
            var elem = $("<div>", {
               'class': 'item' 
            });
            
            var indicator = $("<li>",{
                'data-target': '#imageslider', 
                'data-slide-to': (index + 1)
            }); 
            $("#imageslider .carousel-inner").append($(elem).append(img)); 
            $("#imageslider ol.carousel-indicators").append(indicator); 
            
        });  
        
        $("#imageslider").each(function(index, carousel){
            var indicators = $(carousel).find(".carousel-indicators")    
            $(indicators).css({
                left: $(carousel).width() / 2 - $(indicators).width() / 2,
                width: $(indicators).children().length * 15
            }); 
        });         
            
        
        
        $(".carousel").hammer().on('swipeleft', function(evt){
            $(this).carousel('next'); 
        }); 
        $(".carousel").hammer().on('swiperight', function(evt){
            $(this).carousel('prev'); 
        });         
        
        $("#sidebar").addClass('hide-sidebar'); 
        $("#main").addClass('max-main'); 
        $("#logo").on('click', function(evt){
            evt.preventDefault();                        
            if($("#sidebar").hasClass('hide-sidebar')) {
                $("#sidebar").removeClass('hide-sidebar'); 
                $("#sidebar").addClass('show-sidebar'); 
                $("#main").addClass("min-main"); 
                $("#main").removeClass("max-main");
            }
            else {
                $("#sidebar").removeClass('show-sidebar'); 
                $("#sidebar").addClass('hide-sidebar');                 
                $("#main").addClass("max-main"); 
                $("#main").removeClass("min-main");
            }
            
        }); 
    }
    else {
        $("#coverimage").each(function(index, carousel){
            var indicators = $(carousel).find(".carousel-indicators")    
            $(indicators).css({
                left: $(carousel).width() / 2 - $(indicators).width() / 2, 
                width: $(indicators).children().length * 15
            }); 
        });         
    }
});     
