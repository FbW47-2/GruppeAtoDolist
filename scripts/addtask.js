function addTask(newTaskInput, tasksList)
{
    const newTask = newTaskInput.value;
    newTaskInput.value = "";

    //create new li item
    const listElement = document.createElement("li");
    
    //create check button (done)
    addItemToDom("span", "check", "no-value", "no-attribute", listElement);

    //create item with task's text
    addItemToDom("input", "task", newTask, "disabled", listElement);

    //create edit button
    addItemToDom("button", "edit", "no-value", "no-attribute", listElement);

    //create delete button
    addItemToDom("button", "delete", "no-value", "no-attribute", listElement);
    
    tasksList.prepend(listElement);

    document.querySelector(".no-tasks").classList.add("yes-tasks");
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

export { addTask }