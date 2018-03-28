
var cities = ["NYC", "SF", "LA", "Austin", "Sydney"];


//adding array to dropdown list to let user choose the city of their choice
cities.forEach(function(cityChoice) {
    var option = '<option>'+ cityChoice +'</option>';
    $('#city-type').append(option);
    
});

//change background based on selector to proper city

$('#city-type').change(function() {
   var cityName = $(this).val().toLowerCase();
   $('body').attr('class',cityName);
  
});




