/**
 * @class Todo
 * @description
 * @example
 * const todoList = new Todo();
 */
class Todo
{
    /**
     * @constructor
     * @param { array } entries 
     */
    constructor(entries = [])
    {
        this.entries = entries;
    }

    /**
     * @method addEntry();
     * @description Fügt einen Eintrag mit einer id und beschreibung hinzu.
     * @param { number }
     * @param { string }
     * @returns { object }
     */
    addEntry(id, description)
    {
        const newItem = { id, description, isFinished: false }
        this.entries.push(newItem);
        
        return newItem;
    }

    /**
     * @method deleteEntry();
     * @description Löscht einen Todo eintrag, anhand eines id strings.
     * @param { number } 
     * @returns { object }
     */
    deleteEntry(id)
    {
        let selectedEntry;

        for (let i = 0; i < this.entries.length; i++) {
            if(this.entries[i].id === id)
            {
                selectedEntry = this.entries[i];
                delete this.entries[i];
            }
        }
   
        return selectedEntry;
    }

    /**
     * @method setEntryState();
     * @description Stellt den beendigungsstatus eines eintrages ein.
     * @param { number } id 
     * @param { boolean } state
     * @returns { object }
     */
    setEntryState(id, state)
    {        
        this.entries.forEach(entry =>
        {
            if(entry.id === id)
            {
                entry.isFinished = state;
            }
        });
                
        return this.entries.find(entry => entry.id === id);
    }

    /**
     * @method setEntryDescription();
     * @description Stellt die Beschreibung eines eintrages ein.
     * @param { number } id 
     * @param { string } description
     * @returns { object }
     */
    setEntryDescription(id, description)
    {        
        this.entries.forEach(entry =>
        {
            if(entry.id === id)
            {
                entry.description = description;
            }
        });
                
        return this.entries.find(entry => entry.id === id);
    }

    /**
     * @methid getAllEntries();
     * @description Gibt eine array mit allen einträgen zurück.
     * @returns { Array }
     */
    getAllEntries()
    {
        return this.entries;
    }

    /**
     * @methid getFinishedEntries();
     * @description Gibt eine array mit allen fertigen einträgen zurück.
     * @returns { Array }
     */
    getFinishedEntries()
    {
        return this.entries.filter(entry => entry.isFinished === true);
    }
    
    /**
     * @methid getUnfinishedEntries();
     * @description Gibt eine array mit allen unfertigne einträgen zurück.
     * @returns { Array }
     */
    getUnfinishedEntries()
    {
        return this.entries.filter(entry => entry.isFinished === false);
    }
}
let answer = 4;
if (answer == 4)
{
    const terminateAufgabe = prompt("Welche Aufgabe möchten Sie löschen? : ");
    deleteAufgabe (toDoList) = () =>
    {
        let aufgaben = _.filter(aufgaben, aufgabe);
        this.aufgaben.splice(index, 1);
    }
    console.log(toDoList, terminateAufgabe);
    console.log(toDoList);
}


//DELETES
   /**
     * @method deleteEntry();
     * @description Löscht einen Todo eintrag, anhand eines id strings.
     * @param { number } 
     * @returns { object }
     */
  //Anderer Versuch
  deleteEntry(id)
  {
      let selectedEntry;

      for (let i = 0; i < this.entries.length; i++) {
          if(this.entries[i].id === id)
          {
              selectedEntry = this.entries[i];
              delete this.entries[i];
          }
      }
 
      return selectedEntry;
  }

  //noch einer
  deleteTodo(index) = (
    this.setState(prevState => {
      const todos = prevState.todos.filter((todo, i) => i !== index);
  
      return { todos };
    }));
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
  // Done(erledigt) functio
  while (true) {
    const prompt = require("prompt-sync")();
    let a = "[1]>>>> Add a ziel";
    let b = "[2]>>>> Done";
    let c = "[3]>>>> Korrigieren";
    let d = "[4]>>>> Löschen";
    console.log("\n" + a + "\n" + b + "\n" + c + "\n" + d);
    let answer = prompt("What is your choice : ");
    if (answer == 1) {
      const neueAufgabe = prompt("To do: ");
      function addAufgabe(aufgaben, neueAufgabe) {
        aufgaben.push({
          aufgabe: neueAufgabe,
          erledigt: false,
        });
      }
      addAufgabe(toDoList, neueAufgabe);
      console.log(toDoList);
    }
    if (answer == 2) {
      const neueAufgabe = prompt("Welche Aufgabe haben Sie schon erledigt? : ");
      function doneAufgabe (aufgaben, neueAufgabe) {
        aufgaben.push({
          aufgabe: neueAufgabe,
          erledigt: false,
        });
      }
      addAufgabe(toDoList, neueAufgabe);
      console.log(toDoList);
    }

    //korrigieren
    function korrigiereAufgabe(aufgaben, choice,neu) {
      aufgaben.forEach((element) => {
        if (element.aufgabe == choice) {
          element.aufgabe = neu;
        }
      });
  
      console.log("asdasdasd");
    }
  
    //delete

    if (answer == 4)
  {
        const deleteAufgabe = prompt("Welche Aufgabe möchten Sie löschen? : ");