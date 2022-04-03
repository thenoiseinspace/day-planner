//////////////////////////////
//DAY AND TIME FUNCTIONALITY//
//////////////////////////////

// This displays the date and time at the top of the page
var today = moment();
$('#currentDay').text(today.format('dddd, MMM Do, YYYY'));
var currentTime = moment();
$("#currentTime").text(currentTime.format('hh:mm a'));

////////////////////////////
///////LOCAL STORAGE///////
////////////////////////////

// This uses the ID and class from each of the time blocks to identify the right text block and get it from local storage
$('#9 .thingToDo').val(localStorage.getItem('9'));
$('#10 .thingToDo').val(localStorage.getItem('10'));
$('#11 .thingToDo').val(localStorage.getItem('11'));
$('#12 .thingToDo').val(localStorage.getItem('12'));
$('#13 .thingToDo').val(localStorage.getItem('13'));
$('#14 .thingToDo').val(localStorage.getItem('14'));
$('#15 .thingToDo').val(localStorage.getItem('15'));
$('#16 .thingToDo').val(localStorage.getItem('16'));
$('#17 .thingToDo').val(localStorage.getItem('17'));

////////////////////////////
//SAVE BUTTON FUNCTIONALITY//
////////////////////////////

// Setting up the save button for each line--start by creating the variable for the element and selecting the class for all the buttons
var saveButtonEl = $('.save-button');

//When the buttons are clicked, it runs the function that calls the parent element and selects the attribute 
//The button's sibling is the neighboring text field in the same div. Targets the value.
//Sets to local storage 
saveButtonEl.on('click', function() {
    var time = $(this).parent().attr('id');
    var thingToDo = $(this).siblings('.thingToDo').val();
    console.log(time);
    console.log(thingToDo);
    localStorage.setItem(time, thingToDo);
})

////////////////////////////
//////CHANGING COLORS//////
////////////////////////////

//The classes and colors were already given for each time category. This calls a function to loop through each time block and check the time
//The if statement compares the time block to the current time and applies the appropriate class

$('.thingToDo').each(function () {
    var currentTime24 = today.format('HH');
    console.log(currentTime24);
    var hourTime = parseInt($(this).parent().attr('id'));
    console.log(hourTime);
    if (hourTime == currentTime24) {
        $(this).addClass('present');
    } else if (hourTime > currentTime24) {
        $(this).addClass('future');
    } else {
        $(this).addClass('past');
    }
});