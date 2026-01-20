$(document).ready(function(){

    $('#box').on({
        "click" : function(){
            $(this).css("background","orange") ;
        },

        "mouseover" : function(){
            $(this).css("background","lightblue") ;
        },

        "mouseout" : function(){
            $(this).css("background","tan") ;
        },
    });

    $("button").click(function(){
        $("#box").off("mouseover mouseout");

    });
});