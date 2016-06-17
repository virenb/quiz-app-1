//question array
var quiz = [{
    question: "Which Seven Wonders of the Ancient World was built first?",
    choices: ["Hanging Gardens of Babylon", "Great Pyramid of Giza", "Colossus of Rhodes", "Lighthouse of Alexandria", "Temple of Artemis"],
    correct: 1,
    answer: "Great Pyramid of Giza",
    trivia: "The Great Pyramid of Giza is the oldest and largest of teh three pyramids in what is now El Giza, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact. There have been varying scientific and alternative theories about the Great Pyramid's construction techniques. Most accepted construction hypotheses are based on the idea that it was built by moving huge stones from a quarry and dragging and lifting them into place."
}, {
    question: "Who was the first emperor of China?",
    choices: ["Shaohao", "Shao Kang", "Kong Jia", "Qin Shi Huang",  "Lu Gui"],
    correct: 3,
    answer: "Qin Shi Huang",
    trivia: "Qin Shi Huang was born a prince of the state of Qin and became China's first emperor after the Qin conquered all of the other Warring States. HHe eventually unified all of China in 221 BC. His self-invented title 'emperor' would continue to be borne by Chinese rulers for the next two millennia."
}, {
    question: "Who created the first alphabet?",
    choices: ["Greeks", "Egyptians", "Romans", "Persians", "Phoenician"],
    correct: 4,
    answer: "Phoenician",
    trivia: "Before the alphabet was invented, early writing systems had been based on pictographic symbols known as hieroglyphics, or on cuneiform wedges, produced by pressing a stylus into soft clay. Because these methods required a plethora of symbols to identify each and every word, writing was complex and limited to a small group of highly-trained scribes. Sometime during the second millennium B.C. (estimated between 1850 and 1700 B.C.), a group of Semitic-speaking people adapted a subset of Egyptian hieroglyphics to represent the sounds of their language. This Proto-Sinaitic script is often considered the first alphabetic writing system, where unique symbols stood for single consonants (vowels were omitted). Written from right to left and spread by Phoenician maritime merchants who occupied part of modern Lebanon, Syria and Israel, this consonantal alphabet—also known as an abjad—consisted of 22 symbols simple enough for ordinary traders to learn and draw, making its use much more accessible and widespread."
}, {
    question: "Which is the first civilization in the world?",
    choices: ["Mayan Civilization", "Ancient Egyptian Civilization", "Chinese Civilization", "Mesopotamian Civilization", "Persian Civilization"],
    correct: 3,
    answer: "Mesopotamian Civilization",
    trivia: "Historically, the ancient city states of Mesopotamia in the fertile crescent are the cradle of civilization. The convergence of the Tigris and Euphrates rivers produced rich fertile soil and a supply of water for irrigation. The civilizations that emerged around these rivers are among the earliest known non-nomadic agrarian societies. Because Ubaid, Sumer, Akkad, Assyria and Babylon civilizations all emerged around the Tigris-Euphrates, the theory that Mesopotamia is the cradle of civilization is widely accepted."
}, {
    question: "Which is the first book that's ever written?",
    choices: ["The Epic of Gilgamesh", "The Whole Booke of Psalmes", "Diamond Sutra", "The Dispilio Tablet", "Legend of Etana"],
    correct: 0,
    answer: "The Epic of Gilgamesh",
    trivia: "The earliest writings were on clay tablets and were probably administrative lists. The first written story that has come down to us is The Epic of Gilgamesh. It is a mythologized account of an historical figure, Gilgamesh, a ruler of the Sumerian city-state of Uruk, believed to have ruled sometime between 2700-2500 BC."
}];

//global variables
var nextQuestion = $('.next-question-button');
var triviaInfo = $('#trivia-info').hide();
var playerAnswer;
var correctAnswer;
var wrongAnswer;
var currentQuestion = 0;
var currentScore = 0;
var numbersLeft = 5;


$(document).ready(function() {
    //hide everything but the question part until they click the submit button
    nextQuestion.hide();
    triviaInfo;
    //function for accessing the objects and properties in the quizQuestions array
    var loadQuestion = function() {
        if (currentQuestion == quiz.length) {
            $('.submit-button').hide();
            var ending = "<h3>" + 'Good job on finishing this quiz!' + "</h3>";
            ending += "<div class='play-again'><button class='play-again-button'><a href='#'>" + 'Play Again' + "</a></button></div>";
            $('.end-page').append(ending);
            //once play again button is clicked, start the game all over again
            $('.play-again-button').click(function() {
                $('.end-page').empty();
                currentQuestion = 0;
                loadQuestion();
                $('.submit-button').show();
            })
        } else {
            newQuestion = "<h3>" + quiz[currentQuestion].question + "</h3>";
            $('.submit-button').show();
            for (var a = 0; a < quiz[currentQuestion].choices.length; a++) {
                newQuestion += "<div class='options'><input value='" + a + "' type='radio' name='selector" + currentQuestion + "' class='radio-buttons'>" + quiz[currentQuestion].choices[a] + "</div>";
            }
            $('.main-quiz').append(newQuestion);
        }
    }
    loadQuestion();
    //show question when submit button is clicked
    $('.submit-button').click(function() {
        playerAnswer = $('input:checked').val();
        if (playerAnswer == quiz[currentQuestion].correct) {
            correctAnswer = $('.feedback').append("<h3>You got it right!!!</h3>");
            $('.submit-button').hide();
            currentScore++;
            $('#currentScore').text(currentScore);
        } 
        else {
            wrongAnswer = $('.feedback').append("<h3>Sorry, you got it wrong.</h3>");
            $('.submit-button').hide();
        }
        $('.feedback').append("<h4>The correct answer is:</br><strong>" + quiz[currentQuestion].answer + "</strong></h4>");
        triviaInfo.show();
        $('#trivia-info').append("<p>" + quiz[currentQuestion].trivia + "</p>");
        nextQuestion.show();
    })
    //show next question when Next Question button is clicked
    $('.next-question-button').click(function() {
        currentQuestion++;
        numbersLeft--;
        $('#numbersLeft').text(numbersLeft);
        $('.main-quiz').empty();
        $('.feedback').empty();
        $('#trivia-info').empty();
        nextQuestion.hide();
        triviaInfo.hide();
        loadQuestion();
    })
});
