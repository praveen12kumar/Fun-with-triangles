console.log("Hello");

const submitButton = document.querySelector(".btn");
const outputDiv = document.querySelector("#output");
const quizForm = document.querySelector(".quiz-form");
const correctAnswers = ["90", "right", "90"];

submitButton.addEventListener("click", calculateScore);

function calculateScore(){
    let score = 0;
    let index = 0;

    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score + 1;
        }
        index = index + 1;
    }

   outputDiv.innerText = "Your score is: " + score;
}
