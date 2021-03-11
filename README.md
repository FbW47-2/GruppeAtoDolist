# GruppeAtoDolist




Gruppenarbeit 2: Erstellt gemeinsam eine simple ToDo-List Application

Grundfunktionen, die auf jeden Fall vorhanden sein sollten:

- Add a Todo (hinzufügen)
- Mark a Todo as done (abhaken)
- Edit a Todo (editieren)

Steps:

1. Planung und Konzeption: Erstellt eine grobe Übersicht über die “Struktur/Architektur” des Codes
2. Strukturiert dies in einem Projekt Management Tool
3. Programmiert die benötigten Klassen/Funktionen // beschäftigt euch selber mit der Funktionsweise von Local Storage (temporärer Speicherung)
4. Erstellt das Design eurer ToDo-Liste und verknüpft die Funktionalität ´mit dem Design (DOM-Manipulation) ...

```js
const toDoList = [
    { 
        aufgabe: "einfaufen",
        erledigt: false
    },
    {
        aufgabe: "sport machen",
        erledigt: false
    }

]

console.log(toDoList.length);

toDoList.push({
    aufgabe: "schlafen",
    erledigt: false
});

console.log(toDoList);
