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

        var contact = function() {
            alert('contact')
        }; 
        
        var about = function() {
            alert('about'); 
        }
        
        var home = function() {
            window.reload(); 
            router.setRoute('/'); 
        }
        var routes = {
            "/":"home",
            "/contact": "contact", 
            "/about" : "about"
        }
        
        var router = Router(routes).init();   
        
        
        $(".carousel").hammer().on('swipeleft', function(evt){
            $(this).carousel('next'); 
        }); 
        $(".carousel").hammer().on('swiperight', function(evt){
            $(this).carousel('prev'); 
        });         
                
        $("#logo").on('click', function(evt){
            evt.preventDefault();
            
            $("#sidebar").toggle();                 
            if($("#sidebar").css('display') !== 'block') {
                $("#main").css('width', '100%'); 
            }
            else {
                $("#main").css('width', window.innerWidth < 768 ? '65%' : '85%'); 
            }
        }); 
        
        //$("li a[href='/about']").click(function(evt){
            //evt.preventDefault(); 
            //router.setRoute('/about'); 
            //$("#main").html('<h1>about</h1>')
        //});
        
        //$("li a[href='/contact']").click(function(evt){
            //evt.preventDefault();
            //router.setRoute('/contact');             
            //$("#main").html('<h1>Contact</h1>')            
        //});   
        
      
        
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
