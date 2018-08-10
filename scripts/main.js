/* Chris Sciavolino (cds253@cornell.edu) */

window.onload = function() {
    $('[data-toggle="tooltip"]').tooltip();
    
    $('#preloading-banner-wrapper').fadeIn(1000);
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var middle_of_object = $(this).offset().top + ($(this).outerHeight()/2);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > middle_of_object ){
                $(this).animate({'opacity':'1'}, 1000);  
            }
        }); 
    });
};