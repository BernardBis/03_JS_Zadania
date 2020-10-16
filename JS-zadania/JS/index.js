//ćwiczenia z metodą prompt - pobieranie zmiennej z klawiatury

function getValueFromPrompt() {
    let numberFromPrompt = prompt("Podaj liczbę");
  
    console.log(numberFromPrompt); //zauważcie, że w konsoli otrzymujemy typ string, a nie number
    console.log(parseInt(numberFromPrompt)); //zamienienie typu string na liczbę całkowitą. Więcej: https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/parseInt
    console.log(parseFloat(numberFromPrompt)); //zamienienie typu string na liczbę zmiennoprzecinkową. Więcej: https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/parseFloat
  }
  
    //  getValueFromPrompt(); //wywołanie funkcji
    //użyte nazwy (tj. 'numberFromPrompt' oraz 'numberFromPrompt' są nazwami wymyślonymi przeze mnie, równie dobrze możecie nazwać je po swojemu ??)
  
  let secondNumberFromPrompt = parseInt(prompt("Podaj liczbę"));
  
  function IsEven(checkNumber) {
    let stringResults;
    if (checkNumber % 2 === 0) {
        stringResults = "pażysta" 
    } else {
    stringResults = "niepażysta"
    }
    return stringResults;
  }

  console.log(secondNumberFromPrompt+" jest "+IsEven(secondNumberFromPrompt));

  fSecondNumberFromPrompt = parseFloat(secondNumberFromPrompt);

  if((fSecondNumberFromPrompt >= -35 && fSecondNumberFromPrompt < 2) 
        || (fSecondNumberFromPrompt > 11 && fSecondNumberFromPrompt <= 27)){
          sSecondAnswer ="";
    } else {
          sSecondAnswer =" nie"; 
    }
  console.log(secondNumberFromPrompt + sSecondAnswer + " mieści się w przedziałach <-35;2) lub (11;27>.");

  iSecondNumberFromPrompt = parseInt(secondNumberFromPrompt);
  switch (iSecondNumberFromPrompt) {
    case 1:
        console.log("Zdałeś egzamin")
        break;
    case 2:
        console.log("zaliczona tylko teoria")
        break;
    case 3:
        console.log("zaliczona tylko praktyka")
        break;
    case 0:
        console.log("egzamin do poprawy")
        break;
    default:
      console.log("Brak komunikatu")
      break;  
}

function giveMeSomething(sString) {
  return "Something " + sString;
}

console.log(giveMeSomething("is better than nothing"));
console.log(giveMeSomething("Bob Jane"));
console.log(giveMeSomething("something"));
console.log("");


function footballPoints(iWins, iDraws, iLoses) {
  return iWins * 3 + iDraws;
}

console.log(footballPoints(3,4,0));
console.log(footballPoints(5,0,2));
console.log(footballPoints(0,0,1));
console.log("");

function animals(iChicken, iCows, iPigs) {
  return iChicken * 2 + iCows * 4 + iPigs * 4;
}

console.log(animals(2, 3, 5));
console.log(animals(1, 2, 3));
console.log(animals(5, 2, 8));
console.log("");



