$(document).ready(function(){

    $(window).scroll(function(){
        console.log("You're scrolling")
    });

    $('#test1').scroll(function(){
        console.log("You're scrolling")
    });

});
// you can use resize replacing scroll