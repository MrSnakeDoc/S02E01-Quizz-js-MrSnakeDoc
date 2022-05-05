// Challenge version functions
const question1 = "Quelle mer borde la ville de Sébastopol ?";
const solution1 = "la mer noire";

const question2 = "quel est l'âge du capitaine ?";
const solution2 = 63;
let score = 0;

function questions(question) {
  let reponse = window.prompt(question);
  return reponse;
}
function check(answer) {
  if (answer === solution1 || answer === solution2) {
    alert("Gagné");
    score++;
  } else {
    alert("Perdu...");
  }
}
function quizz() {
  let answer = questions(question1);
  alert(answer);
  check(answer);
  answer = parseInt(questions(question2), 10);
  check(answer);

  if (score === 1 || score === 0) {
    alert(`Vous avez ${score} bonne réponse`);
  } else {
    alert(`Vous avez ${score} bonnes réponses`);
  }
}

quizz();
