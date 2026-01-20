$(document).ready(function(){
    
   $('p').each(function(i){

    $(this).on("click",{value:i},function(e){

        alert(e.data.value);

    });
   });
}); 

