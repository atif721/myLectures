$(document).ready(function(){
    
    $('#hasClass').click(function(e){ 
       
       let x = $('#box ').hasClass('test123');

       if(x == true){
           console.log('Yes');
       }else{
           console.log('No');
       }
        
    });
}); 

