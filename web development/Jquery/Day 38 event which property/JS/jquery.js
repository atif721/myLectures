$(document).ready(function(){
    
    // $('#box').on("mouseover mouseout mousedown",function(){
    //     $('h2').html(event.type + ":" + event.which);
    // });

    $('#inputbox').on("keydown",function(){
        $('h2').html(event.type + ": " + event.which);
    });
}); 

