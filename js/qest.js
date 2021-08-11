const QUESTIONS = [
  {
    question:
      'A quel compositeur est consacré le film Amadeus ?\n1. Beethoven\n2. Mozart',
    reponse: 2
  },
  {
    question: "Quelle est la capitale de l'Autriche ?\n1. Vienne\n2. Oslo",
    reponse: 1
  },
  {
    question:
      'Quel organe est perturbé par les acouphènes ?\n1. Les Pieds\n2. Les Oreilles',
    reponse: 2
  }
];

// ************************Début du Jeu******************//

let nbBonneReponse = 0;

for (let i = 0; i < QUESTIONS.length; i++) {
  let repUser = prompt(QUESTIONS[i].question);
  if (repUser == QUESTIONS[i].reponse) {
    alert('Bonne Réponse');
    nbBonneReponse++;
  } else {
    alert('Mauvaise Réponse !');
  }
}

if (nbBonneReponse > 1) {
  alert(`Vous avez ${nbBonneReponse} bonnes réponses sur ${QUESTIONS.length}`);
} else {
  alert(`Vous avez ${nbBonneReponse} bonne réponse sur ${QUESTIONS.length}`);
}
