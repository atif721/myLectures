$(document).ready(function () {
    
    $('#animateBtn').click(function (e) { 
        e.preventDefault();

     $('#box').css('background','tan').slideUp(2000).slideDown(2000);
        
    });
});