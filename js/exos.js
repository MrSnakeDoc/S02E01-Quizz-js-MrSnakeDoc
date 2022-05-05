/**
 *  Challenge Quizz
 *
 * Pour ce challenge, suit les instructions dans le fichier README.md
 * Et écris ton code ici même !
 */

/* Exo 1 */
// Ton code ici...
let question1 = "Quelle mer borde la ville de Sébastopol ?";
let solution1 = "la mer noire";
let score = 0;

/* Exo 2 */
// Ton code ici...
let reponse1 = window.prompt(question1);
alert(reponse1);

if (reponse1 === solution1) {
  alert("Gagné");
  score++;
} else {
  alert("Perdu...");
}
/* Exo 3 */
// Ton code ici...
let question2 = "quel est l'âge du capitaine ?";
let solution2 = 63;
reponse2 = parseInt(window.prompt(question2), 10);
if (reponse2 === solution2) {
  alert("Gagné");
  score++;
} else {
  alert("Perdu...");
}

if (score === 1 || score === 0) {
  alert(`Vous avez ${score} bonne réponse`);
} else {
  alert(`Vous avez ${score} bonnes réponses`);
}
