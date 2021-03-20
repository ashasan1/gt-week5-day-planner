
var saveButton = document.querySelector("#saveButton");
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


saveButton.addEventListener("click", getInput);

function getInput(event) {
    event.preventDefault();
    var nineAMInput = document.querySelector("#nineamtext").value;
    console.log(nineAMInput);
    alert(nineAMInput);
};




function saveDayPlanner() {
var user = {
        nineAm: nineAMInput.value.trim(),
        tenAm: tenAMInput.value.trim(),
    };

    localStorage.setItem("user", JSON.stringify(user));
};

function renderDayPlanner() {

    var lastPlanner = JSON.parse(localStorage.getItem("user"));
    console.log(lastPlanner);
    console.log(lastPlanner.nineAm);

    if (lastPlanner !== null) {
        nineAMInput.value = lastPlanner.nineAM;
        document.getElementById("tenamtext").value = lastPlanner.tenAM;
    } else {
        return;
    }
}
    
saveButton.addEventListener("click", function(event) {
event.preventDefault();
saveDayPlanner();
renderDayPlanner();
});

function init() {
    renderDayPlanner();
}
init();

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
