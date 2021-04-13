function addTask()
{
    const newTask = newTaskInput.value;
    newTaskInput.value ="";

    //create new li item
    const listElement = document.createElement("li");
    
    //create check button (done)
    addItemToDom("span", "check", "no-value", "no-attribute", listElement);

    //create item with task's text
    addItemToDom("input", "task", newTask, "disabled", listElement);

    //create item edit
    addItemToDom("button", "edit", "no-value", "no-attribute", listElement);

    //create item delete
    addItemToDom("button", "delete", "no-value", "no-attribute", listElement);
    
    tasksList.prepend(listElement);
}

function addItemToDom(itemName, itemClass, value, attribute, parentItem)
{
    const newItem = document.createElement(itemName);
    newItem.classList.add(itemClass);

    if (value !== "no-value")
    {
        newItem.value = value;
    }

    if (attribute !== "no-attribute")
    {
        newItem.setAttribute(attribute, "");
    }

    parentItem.append(newItem);
}

function taskEvents(event)
{
    //on click on check button
    if (event.target.classList.contains("check"))
    {
        event.target.classList.toggle("done");
        tasksList.append(event.target.parentElement); //add li to the end of the list
    }

    //on click on edit button
    if (event.target.classList.contains("edit"))
    {
        event.target.previousElementSibling.toggleAttribute("disabled");

        event.target.classList.toggle("edited");

        if (event.target.classList.contains("edited"))
        {
            event.target.previousElementSibling.focus();
        }
    }

    //on click on delete button
    if (event.target.classList.contains("delete"))
    {
        event.target.parentNode.remove();
    }
}

function init()
{
    //event on click on "Add" button
    buttonAdd.onclick = addTask;

    //event on click on the list
    tasksList.onclick = taskEvents;

    newTaskInput.addEventListener("keypress", (event) =>
    {
        if (event.keyCode === 13)
        {
            addTask();
        }
    });

    tasksList.addEventListener("keypress", (event) =>
    {
        if (event.target.classList.contains("task") && event.keyCode === 13)
        {
            event.target.toggleAttribute("disabled");
            event.target.nextElementSibling.classList.toggle("edited");
        }
    });
}


//START:

const buttonAdd = document.querySelector(".addButton");
const tasksList = document.querySelector(".list");
const newTaskInput = document.querySelector(".newTaskInput");
init();













