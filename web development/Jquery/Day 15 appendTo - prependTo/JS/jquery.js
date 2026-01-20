$(document).ready(function(){

    $("#appendToBtn").click(function(){ 
      
        $("<h2>this is append</h2>").appendTo("#box");
        
    });

    $("#prependToBtn").click(function(){ 
      
        $("<h2>this is append</h2>").prependTo("#box");
        
    });

});

