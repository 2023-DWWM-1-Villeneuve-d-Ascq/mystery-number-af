// function randomNumber(min, max) {
// 	return Math.floor(Math.random)() * (max - min + 1) + min;
// }
// console.log(randomNumber(1.10));

let btn = document.getElementById('btn');
let output = document.getElementById('output');
let playbtn = document.getElementById('play-btn');
let chances = 1;

let number = Math.floor(Math.random() * 10) + 1;
console.log(number);
btn.addEventListener('click', function () {
  let input = document.getElementById('guessInput').value;
  console.log(input);
  if (chances < 4) {
    if (input == number) {
      output.innerHTML += `Gagné ! 🙂 numéro mystère : ${number}`;
      output.style.color = 'green';
    } else if (input < number && input > 1) {
      output.innerHTML += `${chances} ${chances <= 1 ? 'er' : 'ème'} essai ${input}?...c\'est ➕`;
      if (chances == 3) {
        output.innerHTML += `Perdu ! 😢 c'était : ${number}`
      }
    } else if (input > number && input < 10) {
      output.innerHTML += `${chances} ${chances <= 1 ? 'er' : 'ème'} essai ${input}?...c\'est ➖`;
      if (chances == 3) {
        output.innerHTML += `<h3>Perdu ! 😢 c'était : ${number}</h3>`
      }
    } else if (input < 1 || input > 10) {
      output.innerHTML = 'Ce doit être un nombre compris entre 1 et 10';
      output.style.color = 'orangered';
    } else if (isNaN(input)) {
      output.innerHTML = 'Ce n\'est pas un nombre !';
      output.style.color = 'orangered';
    }
    chances++
  } playbtn.addEventListener('click', function () {
    location.reload();
  })
});


//condition ternaire

// // Générer un chiffre mystère aléatoire entre 1 et 10
// var secretNumber = Math.floor(Math.random() * 10) + 1;
// // Initialiser le nombre de chances restantes
// var chances = 3;

// function checkGuess() {
// 	// Obtenir la valeur saisie par le joueur
// 	var guess = parseInt(document.getElementById("guessInput").value);

// 	// Vérifier si la valeur saisie est un nombre valide
// 	if (isNaN(guess) || guess < 1 || guess > 10) {
// 		document.getElementById("message").innerHTML = "Veuillez saisir un nombre entre 1 et 10.";
// 		return;
// 	}

// 	// Vérifier la devinette
// 	if (guess === secretNumber) {
// 		document.getElementById("message").innerHTML = "Bravo, vous avez trouvé le chiffre mystère !";
// 		// Désactiver le bouton de devinette
// 		document.getElementsByTagName("button")[0].disabled = true;
// 	} else {
// 		chances--;
// 		if (chances > 0) {
// 			// Afficher un message d'indication
// 			var message = "Ce n'est pas le bon chiffre. Il vous reste " + chances + " chance(s).";
// 			document.getElementById("message").innerHTML = message;
// 		} else {
// 			// Afficher un message de défaite
// 			document.getElementById("message").innerHTML = "Dommage, vous avez épuisé toutes vos chances. Le chiffre mystère était " + secretNumber + ".";
// 			// Désactiver le bouton de devinette
// 			document.getElementsByTagName("button")[0].disabled = true;
// 		}
// 	}
// }
