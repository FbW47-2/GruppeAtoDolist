function taskEvents(event, tasksList)
{
    const taskElement = event.target.parentNode;

    //on click on check button
    if (event.target.classList.contains("check"))
    {
        const checkButton = event.target;
        doneTask(checkButton, taskElement, tasksList)
    }

    //on click on edit button
    if (event.target.classList.contains("edit"))
    {
        const editButton = event.target;
        const editedTask = event.target.previousElementSibling;
        editTask(editedTask, editButton);
    }

    //on click on delete button
    if (event.target.classList.contains("delete"))
    {
        deleteTask(taskElement);
    }
}

function doneTask(checkButton, taskElement, tasksList)
{
    checkButton.classList.toggle("done");
    tasksList.append(taskElement); //add li to the end of the list
}

function editTask(editedTask, editButton)
{
    editedTask.toggleAttribute("disabled");
    
    editButton.classList.toggle("edited");

    if (editButton.classList.contains("edited"))
    {
        editedTask.focus();
    } 
}

function deleteTask(taskElement)
{
    taskElement.remove();

    if (document.querySelector(".list>li") === null)
    {
        document.querySelector(".no-tasks").classList.remove("yes-tasks");
    }
}

export { taskEvents, editTask }