//question array
var question1 = {
    question: "Which Seven Wonders of the Ancient World was built first?",
    choices: ["Hanging Gardens of Babylon", "Great Pyramid of Giza", "Rhodes", "Colossus of Rhodes", "Lighthouse of Alexandria"],
    correct: "Hanging Gardens of Babylon",
    trivia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
};
var question2 = {
    question: "Which Seven Wonders of the Ancient World was built first?",
    choices: ["Hanging Gardens of Babylon", "Great Pyramid of Giza", "Rhodes", "Colossus of Rhodes", "Lighthouse of Alexandria"],
    correct: "Hanging Gardens of Babylon",
    trivia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
};
var question3 = {
    question: "Which Seven Wonders of the Ancient World was built first?",
    choices: ["Hanging Gardens of Babylon", "Great Pyramid of Giza", "Rhodes", "Colossus of Rhodes", "Lighthouse of Alexandria"],
    correct: "Hanging Gardens of Babylon",
    trivia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
};
var question4 = {
    question: "Which Seven Wonders of the Ancient World was built first?",
    choices: ["Hanging Gardens of Babylon", "Great Pyramid of Giza", "Rhodes", "Colossus of Rhodes", "Lighthouse of Alexandria"],
    correct: "Hanging Gardens of Babylon",
    trivia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
};
var question5 = {
    question: "Which Seven Wonders of the Ancient World was built first?",
    choices: ["Hanging Gardens of Babylon", "Great Pyramid of Giza", "Rhodes", "Colossus of Rhodes", "Lighthouse of Alexandria"],
    correct: "Hanging Gardens of Babylon",
    trivia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
};

//function for question
var loadQuestion = function(){
    var list = [question1, question2, question3, question4, question5];
    return list.slice(0);
}

//global variables
var currentScore = 0;
var numberLeft = 5;
var numberOfQuestion = 1;
var questionsLeft = $('.questions-left span').text(numberLeft);
var playerScore = $('.score span').text(currentScore);
var questionNumber = $('#count').text(numberOfQuestion);
// var newQuestion = $('.options').append("<li><input type='radio' name='selector' class='radio-buttons'>" + quiz['choices']index([0]) + "</li>");
var ending = $('.end-page');
var feedbackCorrect = "You got it right!!!";
var feedbackWrong = "Sorry, you got it wrong.";
var playerAnswer = $('input[type="radio"]:checked').val();
var number = 0;
var nextQuestion = $('.next-question-button');
var triviaInfo = $('.trivia-info');

$(document).ready(function() {

    //hide everything but the question part until they click the submit button
    ending.hide();
    nextQuestion.hide();
    triviaInfo.hide();
    // newQuestion;
    //enable submit button to work
    $('.submit-button').click(function() {
        //show feedback to the user
        if (playerAnswer == quiz.correct) {

            //if correct answer, show "You got it right!!!"
            var playerFeedbackCorrect = $('.feedback').append("<h3>" + feedbackCorrect + "</h3>");
            playerFeedbackCorrect;
            nextQuestion.show();
            questionNumber++;
            //the player score should go up one number +1
            currentScore++;
        } else {
            //if wrong answer, show "Wrong!!!" and "The correct answer is..."
            var playerFeedbackWrong = $('.feedback').append("<h3>" + feedbackWrong + "</h3>");
            playerFeedbackWrong;
            nextQuestion.show();
            questionNumber++;
        }
        //show the trivia information at the bottom for both correct and wrong scenario
        // questions[questionNumber].triviaInfo;
        //once user answers the question, show the next question button
        // $(nextQuestion).click(function() {
        // 	numberOfQuestion++;
        //show next question

        //once the user clicks the next question button, make "questions left" go down one number
        // 	numberLeft--;
        // })
    });

    //once user answers all the question show the play again button
    //reset everything on the page so the page doesn't have to reload
});