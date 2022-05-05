function hi() {
  alert("Hi");
}
hi();
function hello(name) {
  alert("Hello " + name);
}
hello("Tony");
function square(num) {
  alert(num * num);
}
square(4);
function videur(age) {
  if (age < 18) {
    alert("Tu rentre pas");
  } else {
    alert("Bienvenue");
  }
}
videur(18);
videur(12);

const question1 = "Quelle est la capitale de la France?";
const solution1 = "paris";
const question2 = "Quelle est la capitale de l'Allemagne?";
const solution2 = "berlin";
const question3 = "Quelle est la capitale de l'Espagne?";
const solution3 = "madrid";
const question4 = "Quelle est la capitale de l'Italie?";
const solution4 = "rome";
const question5 = "Quelle est la capitale de la Suisse?";
const solution5 = "zurich";
const question6 = "La révolution Française a eu lieu en quelle année?";
const solution6 = 1789;
let score = 0;

function quizz(question, solution, bool) {
  let answer = window.prompt(question);
  if (bool) answer = parseInt(answer, 10);
  if (!bool) answer = answer.toLowerCase();
  if (answer === solution) {
    score++;
    alert(`Bien joué 1 point de plus\nVous avez ${score} bonne réponse`);
  } else {
    alert(`Biiiiip, mauvaise réponse!!\nVous avez ${score} bonnes réponses`);
  }
}
quizz(question1, solution1);
quizz(question2, solution2);
quizz(question3, solution3);
quizz(question4, solution4);
quizz(question5, solution5);
quizz(question6, solution6, true);
