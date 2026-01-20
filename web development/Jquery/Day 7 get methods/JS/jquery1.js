$(document).ready(function(){

    $('#sform').submit(function(){
      let name =  $('#exampleInputName').val();

      let phoneNumber =  $('#exampleInputNumber').val();

      let country =  $('#exampleSelectCountry').val();

      alert("Hello " + name + "    " + "Contact : " + phoneNumber + "    " + "Country :" + country );

    });

});