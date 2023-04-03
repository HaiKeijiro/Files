document.querySelector("button").addEventListener(event_name, handleClick);

function handleClick() {
    alert("I got clicked");
}

function add(num1, num2) {
    return num1 + num2;
}

function minus(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function devided(num1, num2) {
    return num1 / num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

calculator(4, 5, multiply);

// This is an object
var audio = new Audio('audio_file.mp3');
// Method play
audio.play();

switch (key) {
    case value:
        
        break;

    default:
        break;
}

var bellBoy1 = {
    name: "Timmy",
    age: 19,
    hasWorkPermit: true, 
    languages: ["French", "English"],
    moveSuitcase: function() {
        alert("May I take your suitcase?");
        pickUpSuitcase();
        move();
    }
}

addEventListener("keydown", function(){
    alert("Key was pressed!");
});

function anotherAddEventListener(typeOfEvent, callback) {
    var eventThatHappened = {
        eventType: "keydown",
        key: "p",
        durationOfKeydown: 2
    }

    if (eventThatHappened.eventType === typeOfEvent) {
        callback(eventThatHappened);
    }
}