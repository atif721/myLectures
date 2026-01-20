$(document).ready(function(){

    $("#emptyBtn").click(function(){ 
      
        $("#box h1").empty();
        
    });

    $("#removeBtn").click(function(){ 
      
        $("#box").remove();
        
    });

});

