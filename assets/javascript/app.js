// Variables.
//var question1
// var question2
// var question3
// var question4
// var question5
// var question6
// var question7
// var correct = 0
// var incorrect = 0
// var unanswered = 0


// Start button is created which start the game
// Timer will begin tick down.
    //Timer is set to a certain length of timehows zer
    // The game ends when time runs out
    // When user is finshed before time set runs down user clicks on submoit button to show results.
    // Will reveal number of questions players answered correctly and incorrectly 
    // Will only accept one answer per questions.
// input[type="radio"] {
    

    $( document ).ready() block.
    $( document ).ready(function() {
        console.log( "ready!" );
        $("#start" ).show();
        $("#trivia").hide();
        $("#result").hide();
       
        $("#start-button").on("click", function(){
           $("#trivia").show();
           $("#start").hide();
           $("#result").hide();   
           
       })
       $("#done-button").on("click", function(){
        $("#trivia").hide();
        $("#start").hide();
        $("#result").show();

        })
    )
