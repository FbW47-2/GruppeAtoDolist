  function addAufgabe(aufgaben, neueAufgabe)
  {
    aufgaben.push({
      aufgabe: neueAufgabe,
      erledigt: false,
    });

    return aufgaben;
  }

  module.exports = addAufgabe

