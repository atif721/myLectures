$(document).ready(function(){

    $('#addButton').click(function(){
        $('#test1').addClass("first second third");
    });

    $('#removeButton').click(function(){
        $('#test1').removeClass("first");
    });

    $('#toggleButton').click(function(){
        $('#test1').toggleClass("third");
    });



   

});