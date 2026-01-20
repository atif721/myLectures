$(document).ready(function(){

    $("#afterBtn").click(function(){ 
      
        $("#box").after("<h2>this is append</h2>");
        
    });

    $("#beforeBtn").click(function(){ 
      
        $("#box").before("<h2>this is append</h2>");
        
    });

});

