import { addTask } from './scripts/addtask.js'
import { taskEvents, editTask } from './scripts/taskevents.js'


const buttonAdd = document.querySelector(".addButton");
const tasksList = document.querySelector(".list");
const newTaskInput = document.querySelector(".newTaskInput");


//event on click on "Add" button
buttonAdd.addEventListener("click", () => 
{
    addTask(newTaskInput, tasksList);
});

//event on click on the list
tasksList.addEventListener("click", (event) => 
{
    taskEvents(event, tasksList);
});

//event on click Enter button in input field
newTaskInput.addEventListener("keypress", (event) => 
{
    if (event.keyCode === 13)
    {
        addTask(newTaskInput, tasksList);
    }
});

//event on click Enter button in edit task field
tasksList.addEventListener("keypress", (event) => 
{
    if (event.target.classList.contains("task") && event.keyCode === 13)
    {
        const editedTask = event.target;
        const editButton = event.target.nextElementSibling;
        editTask(editedTask, editButton);
    }
});