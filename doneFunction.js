
function doneAufgabe(aufgaben, erledigt) {
  aufgaben.forEach((element) => {
    if (element.aufgabe == erledigt) {
      element.erledigt = true;
    }
  });



}




module.exports = doneAufgabe
