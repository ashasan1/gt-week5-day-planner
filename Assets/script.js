
// var saveButton = document.querySelector(".saveBtn");
var buttons = document.getElementsByClassName("btn")
var timeAM = document.querySelector("#myAM");
var nineAMInput = document.querySelector("#nineamtext");
var tenAMInput = document.querySelector("#tenamtext");

var timeSpot = document.querySelector("#currentTime");
var current = new Date();
h = (current.getHours()<10?'0':'') + current.getHours();
m = (current.getMinutes()<10?'0':'') + current.getMinutes();
var currentTime = h + ':' + m;
console.log(currentTime);

timeSpot.textContent = "The current time is" + " " + currentTime;


if (h > 12) {
    console.log("its the afternoon");
}

if (h < 12) {
    console.log("it's the morning");
}


// document.addEventListener("click", function() {
//     buttons.target;
//     console.log("button was clicked");
//     // var userInput = $(this).siblings(".local").val();
//     var user = document.getElementsByClassName("btn").parentElement.getAttribute("id");
//     // var user = $(this).parent().attr("id");
//     console.log(userInput);
//     console.log(user);

//     localStorage.setItem(user, userInput);

// });

document.addEventListener("click", function() {
buttons.target;

var value9 = document.getElementById("nineamtext").value;
localStorage.setItem("9Am", value9);

var value10 = document.getElementById("tenamtext").value;
localStorage.setItem("10Am", value10);

var value11 = document.getElementById("elevenamtext").value;
localStorage.setItem("11Am", value11);

var value12 = document.getElementById("twelvepmtext").value;
localStorage.setItem("12Pm", value12);

var value13 = document.getElementById("onepmtext").value;
localStorage.setItem("1Pm", value13);

var value14 = document.getElementById("twopmtext").value;
localStorage.setItem("2Pm", value14);

var value15 = document.getElementById("threepmtext").value;
localStorage.setItem("3Pm", value15);

var value16 = document.getElementById("fourpmtext").value;
localStorage.setItem("4Pm", value16);

var value17 = document.getElementById("fivepmtext").value;
localStorage.setItem("5Pm", value17);





});

document.getElementById("nineamtext").innerHTML = localStorage.getItem("9Am");
document.getElementById("tenamtext").innerHTML = localStorage.getItem("10Am");
document.getElementById("elevenamtext").innerHTML = localStorage.getItem("11Am");
document.getElementById("twelvepmtext").innerHTML = localStorage.getItem("12Pm");
document.getElementById("onepmtext").innerHTML = localStorage.getItem("1Pm");
document.getElementById("twopmtext").innerHTML = localStorage.getItem("2Pm");
document.getElementById("threepmtext").innerHTML = localStorage.getItem("3Pm");
document.getElementById("fourpmtext").innerHTML = localStorage.getItem("4Pm");
document.getElementById("fivepmtext").innerHTML = localStorage.getItem("5Pm");

// function setPlanner() {
//     console.log("button was clicked");
//     var userInput = $(this).siblings(".local").val();
//     var user = $(this).parent().attr("id");

//     localStorage.setItem(user, userInput);

// }

// $("#9 .local").val(localStorage.getItem("9"));

// function mySave() {
//     var myContent = document.getElementsByClassName("local").value;
//     localStorage.setItem("myContent", myContent);
// }

// function myLoad() {
//     var myContent = JSON.parse(localStorage.getItem("myContent"));
//     document.getElementByClass(".local").value = myContent;
// }
// saveButton.addEventListener("click", getInput);

// function getInput(event) {
//     event.preventDefault();
//     var input = document.getElementsByClassName("local");
//     for (var i = 0; i <input.length; i++) {
//         console.log(input[i]);
//     };
//     console.log(nineAMInput);
//     alert(nineAMInput);
// };




// function saveDayPlanner() {
// var user = {
//         nineAm: nineAMInput.value.trim(),
//         tenAm: tenAMInput.value.trim(),
//     };

//     localStorage.setItem("user", JSON.stringify(user));
// };

// function renderDayPlanner() {

//     var lastPlanner = JSON.parse(localStorage.getItem("user"));
//     console.log(lastPlanner);
//     console.log(lastPlanner.nineAm);

//    nineAMInput.value = lastPlanner.nineAM;
//    tenAMInput.value = lastPlanner.tenAM;
   
    
// }
    
// saveButton.addEventListener("click", saveClicked);

// function saveClicked() {
//     console.log("button was clicked");
// saveDayPlanner();
// renderDayPlanner();
// }

// function init() {
//     renderDayPlanner();
// }
// init();

var now = moment().format("MMM Do YYYY")


let $dateHeader = $("#currentDay");
$dateHeader.text(now);

var nowTime = Date.now();

// function timeNow() {
//     var current = new Date();
//     h = (current.getHours()<10?'0':'') + current.getHours();
//     m = (current.getMinutes()<10?'0':'') + current.getMinutes();
//     var currentTime = h + ':' + m;
//     console.log(currentTime);
// }
