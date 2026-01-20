// $(document).ready(function(){
//     $("#positionBtn").click(function(){ 
        
//         var position = $('#box h1').position();
//         var top = position.top;
//         var left = position.left;
    
//         console.log("Top :" + top + " Left : " + left);
//     });

//     $("#offsetBtn").click(function(){

//         var offset = $('#box h1').offset();
//         var top = offset.top;
//         var left = offset.left;
       
//        console.log("Top :" + top + " Left : " + left);
//     });
// }); 

$(document).ready(function(){
    
    $('#offsetBtn').click(function(e){ 
       
        $('#box h1').offset({top:100,left:100});
        
        
    });
});

