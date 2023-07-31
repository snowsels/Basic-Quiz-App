const quizDB = [
  {
    question:
      "The interactive element audio with the attribute controls must not appear as a descendant of which element?",
    a: "a",
    b: "button",
    c: "audio",
    d: "both a and button",
    ans: "ans4",
  },
  {
    question:
      "Which of the following type attributes of input element defines control for entering a telephone number?",

    a: "mob",
    b: "tel",
    c: "mobile",
    d: "telephone",
    ans: "ans2",
  },
  {
    question: "The World Wide Web’s markup language has always been HTML.",
    a: "True",
    b: "False",
    ans: "ans1",
  },
  {
    question:
      "Which element represents marked or highlighted text for reference purposes?",
    a: "highlight",
    b: "mark",
    c: "strong",
    d: "blink",
    ans: "ans2",
  },
  {
    question:
      "Which of the following measurement defines a measurement relative to the height of a font in em spaces?",
    a: "px",
    b: "in",
    c: "em",
    d: "pt",
    ans: "ans3",
  },
  {
    question:
      "Which of the following measurement defines a measurement in points?",
    a: "px",
    b: "in",
    c: "em",
    d: "pt",
    ans: "ans4",
  },
  {
    question:
      "Which of the following measurement defines a measurement in pixels?",
    a: "px",
    b: "in",
    c: "em",
    d: "pt",
    ans: "ans1",
  },
  {
    question: "What is JavaScript?",
    a: "JavaScript is a scripting language used to make the website interactive",
    b: "JavaScript is an assembly language used to make the website interactive",
    c: "JavaScript is a compiled language used to make the website interactive",
    d: "None of the mentioned",
    ans: "ans1",
  },
  {
    question: "Which of the following is correct about JavaScript?",
    a: "JavaScript is an Object-Based language",
    b: "JavaScript is Assembly-language",
    c: "JavaScript is an Object-Oriented language",
    d: "JavaScript is a High-level language",
    ans: "ans1",
  },
  {
    question:
      "Arrays in JavaScript are defined by which of the following statements?",
    a: "It is an ordered list of values",
    b: "It is an ordered list of objects",
    c: "It is an ordered list of string",
    d: "It is an ordered list of functions",
    ans: "ans1",
  },
];
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};
loadQuestion();
const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};
const deSelectAll = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};
submit.addEventListener("click", () => {
  const checkdAnswer = getCheckAnswer();
  console.log(checkdAnswer);

  if (checkdAnswer == quizDB[questionCount].ans) {
    score++;
  }
  questionCount++;
  deSelectAll();

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
        <h3> You Scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()"> Refresh</button>
        `;
    showScore.classList.remove("scoreArea");
  }
});
