let inputField = document.getElementById("inputField");
let addButton = document.getElementById("addButton");
let toDoList = document.getElementById("toDoList")
let doneList = document.getElementById("doneList");
let listItemNumber = -1;
document.body.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        let newToDo = document.createElement("li");
        listItemNumber++
        newToDo.innerHTML = `<input id=checkBox${listItemNumber} type=checkbox>` + inputField.value;
        toDoList.appendChild(newToDo);
        var myCheckBox = document.getElementById(`checkBox${listItemNumber}`);
        console.log(myCheckBox);
        myCheckBox.addEventListener('click', () => {

            let parentNode = myCheckBox.parentNode;
            parentNode.removeChild(myCheckBox)
            let deleteButton = document.createElement('i')
            deleteButton.setAttribute('class', "fas fa-trash-alt")
            deleteButton.addEventListener('click', () => {
                let deleteButtonParent = deleteButton.parentNode;
                doneList.removeChild(deleteButtonParent);

            })
            parentNode.appendChild(deleteButton);
            doneList.appendChild(parentNode);


        });
    }

});




