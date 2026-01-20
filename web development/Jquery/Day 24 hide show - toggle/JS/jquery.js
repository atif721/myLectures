$(document).ready(function () {
    
    $('#hideBtn').click(function (e) { 
        e.preventDefault();
        
        $('#box h1').hide(1000,function(){  
            console.log("Now it is hidden");
        });
    });

    $('#showBtn').click(function (e) { 
        e.preventDefault();
        
        $('#box h1').show(1000,function(){  
            console.clear();
            console.log("Now it is showed");
        });
    });

    $('#toggleBtn').click(function (e) { 
        e.preventDefault();
        
        $('#box h1').toggle(1000,function(){  
            console.clear();
            console.log("ey toggle");
        });
    });
});

