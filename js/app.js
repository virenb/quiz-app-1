//question array
var quiz = [{
    question: "Which Seven Wonders of the Ancient World was built first?",
    choices: ["Hanging Gardens of Babylon", "Great Pyramid of Giza", "Rhodes", "Colossus of Rhodes", "Lighthouse of Alexandria"],
    correct: 0,
    trivia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
}, {
    question: "Who was the first emperor of China?",
    choices: ["Hanging Gardens of Babylon", "Great Pyramid of Giza", "Rhodes", "Colossus of Rhodes", "Lighthouse of Alexandria"],
    correct: 1,
    trivia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
}, {
    question: "Where was the first law made in?",
    choices: ["Hanging Gardens of Babylon", "Great Pyramid of Giza", "Rhodes", "Colossus of Rhodes", "Lighthouse of Alexandria"],
    correct: 2,
    trivia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
}, {
    question: "Who won the war of whatever?",
    choices: ["Hanging Gardens of Babylon", "Great Pyramid of Giza", "Rhodes", "Colossus of Rhodes", "Lighthouse of Alexandria"],
    correct: 3,
    trivia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
}, {
    question: "Which nation arose due to the Cold War?",
    choices: ["Hanging Gardens of Babylon", "Great Pyramid of Giza", "Rhodes", "Colossus of Rhodes", "Lighthouse of Alexandria"],
    correct: 4,
    trivia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
}];

//global variables
var ending = $('.end-page');
var nextQuestion = $('.next-question-button');
var triviaInfo = $('.trivia-info');

var playerAnswer;
var correctAnswer;
var wrongAnswer;

var currentQuestion = 0;

$(document).ready(function() {
    //hide everything but the question part until they click the submit button
    ending.hide();
    nextQuestion.hide();
    triviaInfo.hide();
    //function for accessing the objects and properties in the quizQuestions array
    var loadQuestion = function() {
            newQuestion = "<h3>" + quiz[currentQuestion].question + "</h3>";
            for (var a = 0; a < quiz[currentQuestion].choices.length; a++) {
                newQuestion += "<input value='" + a + "' type='radio' name='selector" + currentQuestion + "' class='radio-buttons'>" + quiz[currentQuestion].choices[a] + "</br>";
            }
            $('.main-quiz').append(newQuestion);
        }
        loadQuestion();
    //show question when submit button is clicked
    $('.submit-button').click(function() {
        playerAnswer = $('input:checked').val();
        if (playerAnswer == quiz[currentQuestion].correct) {
            correctAnswer = $('.feedback').append("<h3>You got it right!!!</h3>");
        } else {
            wrongAnswer = $('.feedback').append("<h3>Sorry, you got it wrong.</h3>");
        }
        nextQuestion.show();
    })
    //show next question when Next Question button is clicked
    $('.next-question-button').click(function() {
        currentQuestion++;
        $('.main-quiz').empty();
        $('.feedback').empty();
        nextQuestion.hide();
        loadQuestion();
    })
});