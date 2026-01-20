$(document).ready(function(){
    
   $('#box').on("click",function(event){ 
       $('h2').html("Target Element: " + event.target);
   });


}); 

