// $(document).ready(function(){

//     $("#appendBtn").click(function(){ 
      
//         $("#box").append("<h2>this is append</h2>");
        
//     });

//     $("#prependBtn").click(function(){ 
      
//         $("#box").prepend("<h2>this is append</h2>");
        
//     });

// });

$(document).ready(function(){

    $("#appendBtn").click(function(){ 
      
        $("ol").append("<li>new fruit</li>");
        
    });

    $("#prependBtn").click(function(){ 
      
        $("ol").prepend("<li>old fruit</li>");
        
    });

});