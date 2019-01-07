// Variables.
//var question1
// var question2
// var question3
// var question4
// var question5
// var question6
// var question7
var correct = 0
var incorrect = 0
var time = 18
var Timer


// Start button is created which start the game
// Timer will begin tick down.
//Timer is set to a certain length of timehows zer
// The game ends when time runs out
// When user is finshed before time set runs down user clicks on submoit button to show results.
// Will reveal number of questions players answered correctly and incorrectly 
// Will only accept one answer per questions.
// input[type="radio"] {

function getAndDisplayResult() {
    // grade quiz here
    if ($('input[value=Julie]:checked').val()) {
        correct++
    }
    else{incorrect++};

    if ($('input[value=Chicago]:checked').val()) {
        correct++
    }
    else{incorrect++};

    if ($('input[value=Nirvana]:checked').val()) {
        correct++
    }
    else{incorrect++};
    if ($('input[value=Lion King]:checked').val()) {
        correct++
    }
    else{incorrect++};

    if ($('input[value=Richard]:checked').val()) {
        correct++
    }
    else{incorrect++};

    
    $("#correct").text(correct) 
    $("#incorrect").text(incorrect)}

    
$(document).ready(function () {
    console.log("ready!");
    $("#start").show();
    $("#trivia").hide();
    $("#result").hide();

    $("#start-button").on("click", function () {
        $("#trivia").show();
        $("#start").hide();
        $("#result").hide();
        timer = setInterval(function () {
            time--;
            console.log("timer");
            // update html 
            $("#timer").text(time)
            if (time === 0) {
                $("#trivia").hide();
                $("#start").hide();
                $("#result").show();
                getAndDisplayResult()
                clearInterval(timer);
                // call your submit function (done function )
            }

        }, 1000);
    })

    $("#done-button").on("click", function () {
        $("#trivia").hide();
        $("#start").hide();
        $("#result").show();
        clearInterval(timer);
        getAndDisplayResult();

    })


})
