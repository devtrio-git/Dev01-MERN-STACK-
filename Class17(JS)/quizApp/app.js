// startQuiz --> loadQuestion, now working on next question --> calculating score in nextQuestion()

const questions = [
    {
        question : "What does HTML stand for?",
        option: ["HTML", "Hypertext Markup Language", "Hypertext Karim Language", "Devtrio Markup Language", "Hello World"],
        answer: "Hypertext Markup Language"
    },
    {
        question : "How many types of CSS?",
        option: ["3", "2", "1", "0"],
        answer: "3"
    },
    {
        question : "What is JavaScript primarily used fo?r",
        option: ["for styling", "creating dynamic content on web page", "for web structure", "Nothing"],
        answer: "creating dynamic content on web page"
    },
    {
        question : "What does HTML stand for?",
        option: ["HTML", "Hypertext Markup Language", "Hypertext Karim Language", "Devtrio Markup Language"],
        answer: "Hypertext Markup Language"
    },
    {
        question : "How many types of CSS?",
        option: ["3", "2", "1", "0"],
        answer: "3"
    },
    {
        question : "What is JavaScript primarily used fo?r",
        option: ["for styling", "creating dynamic content on web page", "for web structure", "Nothing"],
        answer: "creating dynamic content on web page"
    },
]

let currentQuestion = 0;
let score = 0;

function startQuiz(){
    document.getElementById("welcome").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    loadQuestion()
}

function loadQuestion(){
    const questionPara = document.getElementById("question_para");
    const optionsDiv = document.getElementById("options_container");
    // console.log(questionPara ,optionsDiv)
    
    const currentQuestionObject = questions[currentQuestion];
   optionsDiv.innerHTML = ""
    // console.log(currentQuestionObject);

    questionPara.innerText = currentQuestionObject.question;

    for (let i = 0; i < currentQuestionObject.option.length; i++) {
    //   console.log(currentQuestionObject.option[i])
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "option";
      input.value = currentQuestionObject.option[i]

      const label = document.createElement('label');
      label.innerText = currentQuestionObject.option[i]

      optionsDiv.appendChild(input)  
      optionsDiv.appendChild(label) 
      optionsDiv.appendChild(document.createElement('br'))

    //   console.log(input)
    }
    // console.log(optionsDiv)
}

function nextQuestion(){
    const selectedOption = document.querySelector('input[name="option"]:checked')

    console.log(selectedOption)
    if(selectedOption.value == questions[currentQuestion].answer){
        score++;
    }

    console.log("result", score);
    currentQuestion++;

    if(currentQuestion < questions.length){
        loadQuestion();
    }
    else{
        showResult();
    }

}

function showResult() {
    document.getElementById("result").style.display = "block";
    document.getElementById("quiz-container").style.display = "none";

    document.getElementById("score").innerText = `${document.getElementById("username").value}, Your score is ${score}/${questions.length} `;
}