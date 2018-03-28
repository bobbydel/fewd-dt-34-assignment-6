//much shorter and simpler version of the HW assignment minus all of the if statements etc
//names for the dropdown list - match the classes set in the css file
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
var cityType = $("#city-type");

//adding array to dropdown list to let user choose the city of their choice
cities.forEach(function (cityChoice) {
    var option = '<option>' + cityChoice + '</option>';
    cityType.append(option);

});

//change body based on selector to proper city

cityType.change(function () {
    event.preventDefault();
    var cityName = $(this).val().toLowerCase();
    $('body').attr('class', cityName);

});


//********************************************
//CODE FROM LAST WEEK HOMEWORK WITH THE IF STATEMENTS ETC WITH
//THE NOW ADDED DROPDOWN LIST (and changes you reccomended in comments)
//********************************************
//user enters in city name/abbreviation
//the user then hits the update button or enter key
//background will then change to picture of that city upon submission 
//added a drop down in the html for names of cities available as well for easier choices for what cities exist
//users can still search by additional names but city name only added to drop down to easy access





// //names for the dropdown list - match the classes set in the css file
// var cities = ["NYC", "SF", "LA", "ATX", "SYD"];


// //adding array to dropdown list to let user choose the city of their choice
// cities.forEach(function (cityChoice) {
//     var option = '<option>' + cityChoice + '</option>';
//     $('#city-type').append(option);

// });


// $(document).ready(function () {
//     function changeBackground(input) {
//         //convert to all lowercase for the input to make more user friendly and not look for exact capitalization etc
//         input = input.toLowerCase();


//         //NYC options
//         if (input === "nyc") {
//             $("body").css("background-image", "url(images/nyc.jpg)");

//             // San Francisco options
//         } else if (input == "sf") {
//             $("body").css("background-image", "url(images/sf.jpg)");
//             //LA options
//         } else if (input === "la") {
//             $("body").css("background-image", "url(images/la.jpg)");

//             //austin tx options
//         } else if (input === "atx") {
//             $("body").css("background-image", "url(images/austin.jpg)");
//             //sydney options
//         } else if (input === "syd") {
//             $("body").css("background-image", "url(images/sydney.jpg)");
//         }
     
//     }
//     //submit 
//     $("form").change(function (event) {
//             event.preventDefault();
//             var city = $("#city-type").val()
//             changeBackground(city)
//             $('body').attr('class', cityName);
//         }
//     );

// });