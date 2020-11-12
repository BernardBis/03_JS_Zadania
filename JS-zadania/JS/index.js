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

// Zadanie 7

function factorial(iNumber) {
  if (iNumber < 1 ) { 
    return 1; 
  } else { 
    return iNumber * factorial(iNumber-1);
  }
}

console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(13));
console.log("");

// Zadanie 8

/*
let person = {
  "my name": "Marcin",
  "my age": 28,
  occupation: "inzynier"
  };
  person.place = "Katowice";
  person["my name"] = "Maciej";
*/


function inkLevels(obInkLevels){
    var nMinNumber;   
    nMinNumber = obInkLevels.cyan;
    if (nMinNumber > obInkLevels.magenta){
      nMinNumber = obInkLevels.magenta;
    }
    if (nMinNumber > obInkLevels.yellow){
      nMinNumber = obInkLevels.yellow;
    }
    console.log(nMinNumber);
  }

inkLevels({
  "cyan": 23,
  "magenta": 12,
  "yellow": 10
  });

  inkLevels({
  "cyan": 432,
  "magenta": 543,
  "yellow": 777
  });

  inkLevels({
  "cyan": 700,
  "magenta": 700,
  "yellow": 0
  });
  
  console.log("");

// Zadanie 9


function pHName(nNumber) {

  switch (true) {
    case (nNumber < 7 && nNumber > 0):
    console.log("kwaśna");
    break;
    case (nNumber == 7):
    console.log("obojętna");
    break;
    case (nNumber > 7 && nNumber <= 14):
    console.log("zasadowa");
    break;
    default:
    console.log("nieprawidłowy");
    break;
    }

  return
}

 
pHName(5);
pHName(8.7);
pHName(7);
pHName(99);
console.log("");