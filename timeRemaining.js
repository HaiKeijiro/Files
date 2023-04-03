function lifeInWeeks(age) {
    var lifeRemaining = 90 - age;
    var days = lifeRemaining * 365;
    var weeks = lifeRemaining * 52;
    var months = lifeRemaining * 12;
    
    console.log ("You have " + days + " days,  " + weeks + "  weeks, and  " + months + "  months left");
}

lifeInWeeks(51);