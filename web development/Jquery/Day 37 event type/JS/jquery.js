$(document).ready(function(){
    
   $('#box').on("click dblclick mouseover mouseout",function(event){
       $('h2').html("Event: " + event.type)
   });
}); 

