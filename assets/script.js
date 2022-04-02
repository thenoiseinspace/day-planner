//Starting by setting up variables for each center-column time block
var nineOclock = document.querySelector("#nine-block"); 
var tenOclock = document.querySelector("#ten-block"); 
var elevenOclock = document.querySelector("#eleven-block"); 
var twelveOclock = document.querySelector("#twelve-block"); 
var oneOclock = document.querySelector("#one-block"); 
var twoOclock = document.querySelector("#two-block"); 
var threeOclock = document.querySelector("#three-block"); 
var fourclock = document.querySelector("#four-block"); 
var fiveOclock = document.querySelector("#five-block"); 
var saveButton = document.querySelectorAll(".save-button"); 

var saveContent = function (){

}

for(var i = 0; i<saveButton.length; i++){
    saveButton[i].addEventListener("click", saveContent)
}

//this keyword, dom traversal, local storage set not get for this function, when it gets clicked set it to local storage, don't get it until one of the last things in the program file, for loop is done but function needs stuff 

//Setting up local storage of each time block--these will only accept strings
//can I use an array for this? 


//Setting up a function to take in user input
//based on 5-6
var nineEventlistEl = $('#nine-event-list'); 

function handleFormSubmit(){

    var eventForNine = $('input[name="nine-event-list"]').val(''); 

    if (!eventForNine){
        console.log("No item for 9:00");
        return; 
    }
    nineEventlistEl.append('<li>' + eventForNine + '</li>'); 

    $('input[name="scheduledEvent"]').val('');
    console.log("this is linked"); 
}

nineEventlistEl.on('submit', handleFormSubmit); 

//handleFormSubmit(); 
//put event listener on button




//based on 4-26
// function renderToDos(){
//     9block.innerHTML=""; 
//     todos
// }


//check activity 5-6
//Settinng up event listeners - based on exercise 4-23
// nineOclock.addEventListener("click", function(event) {
//     event.preventDefault();
    
//     var nineActivity = {
//       nineOclock: nineOclock.value. trim(), 
//     };
    
//     localStorage.setItem("nineActivity", JSON.stringify(nineActivity));
//     renderMessage();
//     });

//     function renderMessage() {
//         var displayNineBlock = JSON.parse(localStorage.getItem("nineActivity"));
//         if (displayNineBlock !== null) {
//           document.querySelector(".message").textContent = displayNineBlock.nineOclock 
//         }
//       }
      