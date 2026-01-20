$(document).ready(function () {
    
    // $('#animate').click(function (e) { 
    //     e.preventDefault();
        
    //     $('#box').animate({
    //         left : '50px', 
    //         width : '600px',
    //         fontSize : '30px',
    //         borderwidth : '5px'  
    //     });
    // });

    $('#animate').click(function (e) { 
        e.preventDefault();
        
        $('#box').animate({left : '50px',fontSize : '25px'},"slow",function(){
            console.log("first animation completed");
        });
        $('#box').animate({top : '50px'}, "slow");
        $('#box').animate({width : '500px'}, "slow");
    });
});