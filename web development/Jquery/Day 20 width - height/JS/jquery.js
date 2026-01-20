$(document).ready(function(){

    $("#widthBtn").click(function(){ 

        $('#box').width("400px");

        console.clear();
        console.log("Width : " + $('#box').width());
        console.log("InnerWidth : " + $('#box').innerWidth());
        console.log("OuterWidth : " + $('#box').outerWidth());
        console.log("OuterWidth(true) : " + $('#box').outerWidth(true));
       
    });

    $("#heightBtn").click(function(){ 

        $('#box').height("300px");

        console.clear();
        console.log("height : " + $('#box').height());
        console.log("Innerheight : " + $('#box').innerHeight());
        console.log("Outerheight : " + $('#box').outerHeight());
        console.log("Outerheight(true) : " + $('#box').outerHeight(true));
       
    });

});



