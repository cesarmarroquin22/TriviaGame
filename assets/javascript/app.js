var countingDown = document.getElementById("timer")
var counter = 21;
var newElement = document.createElement("span");
newElement.innerHTML = "20";
var id;

countingDown.parentNode.replaceChild(newElement, countingDown);

id = setInterval(function() {
    counter--;
    if(counter === 0){
		setTimeout(function(){
			$("#questions").hide();
			$("#results").show();
		}, 1000);
	}
    if(counter < 0) {
        newElement.parentNode.replaceChild(countingDown, newElement);
        clearInterval(id);
    } else {
        newElement.innerHTML = counter.toString();
    }
}, 1000);


var correctScore = 0;
var incorrectScore = 0;


$("#correct-score").text(correctScore);
$("#incorrect-score").text(incorrectScore);

var answer = $('.q-two').val();

console.log(answer);


if(answer === "wrong") {
	incorrectScore++;
}
else {
	correctScore++;
}

// Allows you to click on the questions you decide are true 
// hides the results until you are finished with the game 
$("#questions").hide();
$("#results").hide();

// Allows you to click the start button, then hides the start button after clicking it 
$("#start-button").click(function(){
	$("#start-button").hide();
	$("#questions").show();
});

// Allows you to click the 'done' button if you finish before the timer runs out
// Hides questions when the done button is clicked
// the results of the game will show after clicking done.
$("#done-button").click(function(){
	$("#questions").hide();
	$("#results").show();
});