$(document).ready(function() {
    
    $(window).scroll(function(e){
      parallax();
    });
    
    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.right-col').css('top', '70px');
        $('.right-col').css('top',70+-(scrolled*0.2)+'px');
    }
    
});