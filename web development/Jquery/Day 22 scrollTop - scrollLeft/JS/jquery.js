$(document).ready(function(){
    
    $(window).scroll(function(){

        $('.box1234').html("");
        $('.box1234').append("Top : " + $(window).scrollTop());
        $('.box1234').append("<br>Left : " + $(window).scrollLeft());

    });

    $('#scrollTopBtn').click(function (e) { 
        e.preventDefault();

        $(window).scrollTop(200);
    });
    $('#scrollLeftBtn').click(function (e) { 
        e.preventDefault();

        $(window).scrollTop(500);
    });
});

