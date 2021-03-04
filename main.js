// toDoList
const toDoList = [
    {
      aufgabe: "einfaufen",
      erledigt: false,
    },
    {
      aufgabe: "sport machen",
      erledigt: false,
    },
  ];

  
  while (true) {
    const prompt = require("prompt-sync")();
    let a = "[1]>>>> Add a ziel";
    let b = "[2]>>>> Done";
    let c = "[3]>>>> Korrigieren";
    let d = "[4]>>>> Löschen";


    console.log("\n" + a + "\n" + b + "\n" + c + "\n" + d);
    let answer = prompt("What is your choice : ");

    if (answer == 1)
    {
      const neueAufgabe = prompt("To do: ");
      
      addAufgabe(toDoList, neueAufgabe);
      console.log(toDoList);
    }

  }

const addAufgabe = require ('./add');
