
var saveButton = document.querySelector("#saveButton");
var timeAM = document.querySelector("#myAM");
var nineAMInput = document.querySelector("#nineamtext");
var tenAMInput = document.querySelector("#tenamtext");

saveButton.addEventListener("click", getInput, false);

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
        document.getElementById("nineamtext").value = lastPlanner.nineAM;
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

