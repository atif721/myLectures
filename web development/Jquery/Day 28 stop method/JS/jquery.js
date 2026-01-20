$(document).ready(function () {

    $('#animate').click(function (e) { 
        e.preventDefault();
        
        // $('#box').animate({left : '50px',fontSize : '25px'},"fast",function(){
        //     console.log("first animation completed");
        // });
        $('#box').animate({top : '50px'}, "fast");
        
        $('#box').animate({width : '5000px'}, "fast");
    });

    $('#stop').click(function (e) { 
        e.preventDefault();
        
        $('#box').stop();
    });


});