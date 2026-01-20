$(document).ready(function(){

    $("#replacAllebtn").click(function(){ 

        $('#box p:nth-child(2)').replaceWith("<h2>this is append</h2>");
       
    });

    $("#replacWithebtn").click(function(){
        $("<h3>please replace this</h3>").replaceAll('#box p');
        
    });

});

