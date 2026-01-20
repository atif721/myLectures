$(document).ready(function(){

    $('#clickButton').click(function(){

        $('#box h1').text("This is set method");
        

        $('#box p').html("<b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, ipsum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, ipsum?Lorem ipsum dolor,</b> sit amet consectetur adipisicing elit. Deleniti, ipsum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, ipsum?");

        $('#box h1').attr("class", "red");


    });

});