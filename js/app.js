var quizQuestions = $('.options');
var questionsLeft = $('.questions-left');
var playerScore = $('#count');
var questionNumber = $('#id');
var ending = $('.end-page');
var playerFeedback = $('.feedback');
var answer = $('.correct-answer');
var triviaInfo = $('.trivia-info');

$(document).ready(function() {
	//hide the feedback part until they click the submit button
	//enable submit button to work
	//if else statement for the quiz
		//show feedback to the user
			//if correct answer, show "You got it right!!!"
			//if wrong answer, show "Wrong!!!" and "The correct answer is..."
			//show the trivia information at the bottom for both correct and wrong scenario
	//once user answers the question, show the next question button
		//once the user clicks the next question button, make "questions left" go down one number
		//the player score should go up one number +1
		//show next question
	//once user answers all the question show the play again button
		//hide everything else on the page
});