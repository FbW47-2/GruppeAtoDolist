// toDoList
const addAufgabe = require ('./add');

const doneAufgabe = require ('./doneFunction')

const korrigiereAufgabe = require ('./korrigierteFunc')

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


    if (answer == 2)
    {
      const erledigt = prompt("done ! : ");
      
      doneAufgabe(toDoList, erledigt);
      console.log(toDoList);
    }


    if (answer == 3)
    {
      const choice = prompt("Which toDo do you want to edit? : ");
      const neu = prompt("What is the True : ");
      
      korrigiereAufgabe(toDoList, choice,neu);
      console.log(toDoList);
    }






  }


