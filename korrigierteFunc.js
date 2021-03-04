function korrigiereAufgabe(aufgaben, choice,neu) {
    aufgaben.forEach((element) => {
      if (element.aufgabe == choice) {
        element.aufgabe = neu;
      }
    });

    console.log("asdasdasd");
  }

module.exports = korrigiereAufgabe