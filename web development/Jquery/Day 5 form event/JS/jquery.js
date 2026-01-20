$(document).ready(function(){

    $('#exampleInputEmail1,#exampleInputName,#exampleInputNumber').focus(function(){
        $(this).css('background-color','lime');

    });

    $('#exampleInputEmail1,#exampleInputName,#exampleInputNumber').blur(function(){
        $(this).css('background-color','white');

    });

    $('#exampleSelectCountry').change(function(){
        //$(this).css('background-color','gray');
        let a = $(this).val();
        $('#test1').html(a);

    }); 

    $('#exampleInputEmail1,#exampleInputName,#exampleInputNumber').select(function(){
        $(this).css('background-color','yellow');

    });

    $('#sform').submit(function(){
       alert("Form-submitted");

    });




});