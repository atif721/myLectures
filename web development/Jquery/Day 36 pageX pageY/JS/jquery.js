$(document).ready(function(){
    
   $(document).mousemove(function(event){ 
      
       $('#result').text("X: " + event.pageX + " Y: " + event.pageY)

       var x = event.pageX;

       var y = event.pageY;

       $('#box').offset({top:y,left:x});
       
   });
}); 

