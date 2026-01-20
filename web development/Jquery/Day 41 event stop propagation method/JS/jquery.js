$(document).ready(function(){
    
    $('#box').click(function(e){ 
    
        e.stopPropagation();

        alert("The div element was clicked")
     
    });

    $('h1').click(function(e){ 

        e.stopPropagation();

        alert("The h1 element was clicked")
     
    });

    $('p').click(function(event){
        
        event.stopPropagation();

        alert("The p element was clicked")
     
    });

    $('button').click(function(){ 

        alert("The button element was clicked")
     
    });

    $(selector).click(function (e) { 
        e.preventDefault();
        
        
    });
}); 

