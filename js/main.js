const quizData = [
  {
    question: "Kratos is the main character of what video game series? ",
    a: "god of war",
    b: "COD",
    c: "need for speed",
    d: "ice tower",
    correct: "a",
  },
  {
    question: "How many bones do we have in an ear?",
    a: "10",
    b: "5",
    c: "3",
    d: "1",
    correct: "c",
  },
  {
    question: "What game studio makes the Red Dead Redemption series? ",
    a: "Activision Blizzard",
    b: "Nintendo",
    c: "Ubisoft",
    d: "rockstar games",
    correct: "d",
  },
  {
    question: "In what country is the Chernobyl nuclear plant located?",
    a: "US",
    b: "canada",
    c: "Ukraine",
    d: "france",
    correct: "c",
  },
  {
    question: "What year was the United Nations established?",
    a: "1988",
    b: "1940",
    c: "1945",
    d: "1947",
    correct: "c",
  }
];

let currentQuestion = 0;

const questionEl = document.getElementById("question");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const subBtn = document.getElementById('submit');
const radio = document.querySelectorAll(".quiz-container ul li input");
let correct = true;
let score = 0;
loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuestion]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


    radio.forEach(element => {
        element.checked = false;
        element.addEventListener('click', (e) => {
            subBtn.classList.remove("disabled");
            if(quizData[currentQuestion].correct === e.target.id){
                correct = true;
            }else{
                correct = false;
            }
        });
    })
    
    subBtn.classList.add('disabled')
};


subBtn.addEventListener("click", () => {
    if (subBtn.className !== "disabled") {
        if (correct === true) {
            score++;
            if (currentQuestion + 1 < quizData.length) {
                currentQuestion++;
                loadQuiz();
            }else{
                document.querySelector(".quiz-container").innerHTML = `You answerd correctly at ${score}/5 questions`;
                document.querySelector(
                    ".quiz-container"
                ).innerHTML = `You answerd correctly at ${score}/5 questions`;
                let relBtn =
                    document.createElement("button");
                relBtn.className = "relode";
                let txtBtn =
                    document.createTextNode("Relode");
                relBtn.appendChild(txtBtn);
                document.querySelector(".quiz-container").appendChild(relBtn);
                relBtn.addEventListener("click", () => {
                    location.reload();
                });
            }
        }else {
            score;
                if (currentQuestion + 1 < quizData.length) {
                    currentQuestion++;
                    loadQuiz();
                } else {
                    document.querySelector(".quiz-container").innerHTML = `You answerd correctly at ${score}/5 questions`;
                    let relBtn = document.createElement('button');
                    relBtn.className = "relode"
                    let txtBtn = document.createTextNode('Relode');
                    relBtn.appendChild(txtBtn)
                    document.querySelector(".quiz-container").appendChild(relBtn);
                    relBtn.addEventListener("click", () => {
                        location.reload();
                    });
                }
        }
    }
});











