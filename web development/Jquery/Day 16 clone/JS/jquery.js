$(document).ready(function(){

    $("#CloneBtn").click(function(){ 
      
        $("#box h1").clone().prependTo("#box2");
        $("#box p").clone().appendTo("#box2");
        

    }); 
});

