//global variables
var quizQuestions = $('.options');
var questionsLeft = $('.questions-left');
var playerScore = $('#count');
var questionNumber = $('#id');
var ending = $('.end-page');
var feedbackCorrect = "You got it right!!!";
var feedbackWrong = "Sorry, you got it wrong.";
var playerAnswer = $('input[type="radio"]:checked').val();
var showAnswer = $('.correct-answer');
var triviaInfo = $('.trivia-info');
var currentQuestion = 0;
var nextQuestion = $('.next-question-button');

//question array
var questions = [{
    question: "Which Seven Wonders of the Ancient World was built first?",
    choices: ["Hanging Gardens of Babylon", "Great Pyramid of Giza", "Rhodes", "Colossus of Rhodes", "Lighthouse of Alexandria"],
    questionNumber: 0,
    correct: 0,
    triviaInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
}, {
    question: "Which Seven Wonders of the Ancient World was built first?",
    choices: ["Hanging Gardens of Babylon", "Great Pyramid of Giza", "Rhodes", "Colossus of Rhodes", "Lighthouse of Alexandria"],
    questionNumber: 1,
    correct: 1,
    triviaInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
}, {
    question: "Which Seven Wonders of the Ancient World was built first?",
    choices: ["Hanging Gardens of Babylon", "Great Pyramid of Giza", "Rhodes", "Colossus of Rhodes", "Lighthouse of Alexandria"],
    questionNumber: 2,
    correct: 3,
    triviaInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
}, {
    question: "Which Seven Wonders of the Ancient World was built first?",
    choices: ["Hanging Gardens of Babylon", "Great Pyramid of Giza", "Rhodes", "Colossus of Rhodes", "Lighthouse of Alexandria"],
    questionNumber: 3,
    correct: 2,
    triviaInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
}, {
    question: "Which Seven Wonders of the Ancient World was built first?",
    choices: ["Hanging Gardens of Babylon", "Great Pyramid of Giza", "Rhodes", "Colossus of Rhodes", "Lighthouse of Alexandria"],
    questionNumber: 4,
    correct: 1,
    triviaInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
}]



$(document).ready(function() {
    //hide everything but the question part until they click the submit button
    ending.hide();
    nextQuestion.hide();
    triviaInfo.hide();
    //enable submit button to work
    $('.submit-button').click(function() {
        //if else statement for the quiz
        if (playerAnswer == questions[currentQuestion].correct) {
        	var playerFeedbackCorrect = ($('.feedback').append("<h3>" + feedbackCorrect +"</h3>"));
        	playerFeedbackCorrect;
        	nextQuestion.show();
        }
        else {
        	var playerFeedbackWrong = ($('.feedback').append("<h3>" + feedbackWrong +"</h3>"));
        	playerFeedbackWrong;
        	nextQuestion.show();
        }
        $('.next-question-button').click(function() {

        })
    });

    //show feedback to the user
    //if correct answer, show "You got it right!!!"
    //if wrong answer, show "Wrong!!!" and "The correct answer is..."
    //show the trivia information at the bottom for both correct and wrong scenario
    //once user answers the question, show the next question button
    //once the user clicks the next question button, make "questions left" go down one number
    //the player score should go up one number +1
    //show next question
    //once user answers all the question show the play again button
    //reset everything on the page so the page doesn't have to reload
});