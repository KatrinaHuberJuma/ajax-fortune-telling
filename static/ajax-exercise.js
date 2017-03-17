"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(fortune) { // fortune is returned by '/fortune'
    // TODO: get the fortune and show it in the #fortune-text div
    $('#fortune-text').html(fortune);
}

function updateFortune() {
    $.get('/fortune', showFortune);  
}

$('#get-fortune-button').on('click', updateFortune);





// PART 2: SHOW WEATHER
function showWeather(weatherObj){
    $('#weather-info').html("The weather will be " + weatherObj.forecast 
                            + "\nThe current temp is " + weatherObj.temp);
    console.log(weatherObj);
}

function updateWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();
    $.get(url, showWeather);

    // TODO: request weather with that URL and show the forecast in #weather-info
}



$("#weather-form").on('submit', updateWeather);




// PART 3: ORDER MELONS


function showMelonOrder(result) {
    alert(result.code + " " + result.msg);
}

function submitMelonOrder(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    var formInputs = {
        "melon_type": $("#melon-type-field").val(),
        "qty": $("#qty-field").val()
    };

    $.post("/order-melons.json",
           formInputs,
           showMelonOrder
           );

    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', submitMelonOrder);


