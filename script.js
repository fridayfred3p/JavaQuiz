// Assign variables
const generatebtn = document.querySelector("#buttonStart");
let timer = 120;
const timerDisplay = document.querySelector("#timer1");
let score = 0;
let questionSelect = 0;
const questionbtn = document.querySelector(".container");
var choiceButton;

// Timer function 
function timerFunction() {
    let timeraction = setInterval(function() {
       timerDisplay.textContent=timer;
       timerDisplay.style.cssFloat="Right";   
    if (timer > 0) {
            timer--;
    } else {
            clearInterval(timeraction);
        }
    }, 1000);
}

//Attach click of button to start of quiz
generatebtn.addEventListener("click", function() {
    //Remove button for space
    generatebtn.style.display = "none";
    //Display timer in corner of screen
    timerFunction();
    //Displays Questions and Answers
    displayQuestion();


    console.log(timer);
    
    
});



// Block of question code
const questionBank = [
    { Question: "What is the correct terminology for an element of JavaScipt?", Choices: ["scripting", "script", "JavaScipt", "JS"], Answer: "script"},
    { Question: "Where is the correct place to insert a JavaScript?", Choices: ["Both the <head> section and the <body> section are correct", "The <head> section", "The <body> section"], Answer: "The <body> section"},
    { Question: "What is the correct syntax for referring to an external script called 'xx.js'?", Choices: ["<script src='xxx.js'>", "<script href='xxx.js'>", "<script name='xxx.js'>"], Answer: "<script src='xxx.js'>"},
    { Question: "The external JavaScript file must contain the <script> tag?", Choices: ["true", "false"], Answer: "false"},
    { Question: "How do you write 'Hello world' in a alert box?", Choices: ['msg("Hello World");', 'alert("Hellow World");', 'alertBox("Hello World");'], Answer:'alert("Hellow World");' },
    { Question: "How do you create a function in JavaScript?", Choices: ["function = myFunction()", "function myFunction()", "function:myFunction()"], Answer: "function myFunction()"},
    { Question: "How do you call a function named myFunction?", Choices: ["call myFunction()", "myFunction()", "call function myFunction()"], Answer: "myFunction()"},
    { Question: "How to write an IF statement in Javascript?", Choices: ["if i = 5", "if i = 5 then", "if (i == 5)", "if i == 5 then"], Answer: "if (i == 5)"},
    { Question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?", Choices: ["if i <> 5", "if (i <> 5", "if(i !=5)", "if i=! 5 then"], Answer: "if(i !=5)" },
    { Question: "How does a WHILE loop start?", Choices: ["while i = 1 to 10", "while (i <= 10)", "while (i <=10; i++)"], Answer: "while (i <= 10)"},
    { Question: "How does a FOR loop start?", Choices: ["for i = 1 to 5", "for (i = 0; i <= 5; i++)", "for (i = 0; i <= 5)", "for (i <= 5;i++)"], Answer: "for (i = 0; i <= 5; i++)"},
    { Question: "How do you add a comment in a Javascript?", Choices: ["<!-- This is a comment -->", "//This is a comment", "'This is a comment"], Answer: "//This is a comment"},
    { Question: "How to insert a comment that has more than one line?", Choices: ["//This comment has more than one line//", "<!- This comment has more than one line-->", "/*This comment has more than one line*/"], Answer: "/*This comment has more than one line*/"},
    { Question: "How do you round the number 7.25, to the nearest integer?", Choices: ["round(7.25)", "", "rnd(7.25)", "Math.rnd(7.25)"], Answer: "round(7.25)"},
    ];

//Display questions, Check if answer right and annotate score of player
function displayQuestion() {
    const questionElement = document.createElement("p");
    questionElement.innerText = questionBank[questionSelect].Question;
    questionbtn.appendChild(questionElement);
    //Display Question and multiple answers
    for (var i = 0; i < questionBank[questionSelect].Choices.length; i++) {
        const choiceButton = document.createElement("button");
        choiceButton.innerText = questionBank[questionSelect].Choices[i];
        questionbtn.appendChild(choiceButton);
        choiceButton.addEventListener("click", checkAnswer);   
};
    
};
//Allows user to choose answer
function checkAnswer() {
let userAnswer = event.target.textContent;
if (userAnswer === questionBank[questionSelect].Answer) {
    alert("Correct");
    score += 5;
  //  console.log(score);
} else {
    alert("Wrong");
    
    timer -= 10;
};
questionSelect++;
  //      console.log(userAnswer);
};
