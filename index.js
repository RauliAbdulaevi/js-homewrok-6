let input = document.querySelector(".input_panel");
let addButton = document.querySelector(".add_btn");
let toDoUl = document.querySelector(".list_of_tasks");
let checkBoxArray = document.querySelectorAll(".check_box");
let trashBinIconArray = document.querySelectorAll(".trash_button")


addButton.addEventListener('click', () => {
    if (input.value.length >= 1) {
        let inputValue = input.value;
        let newLi = document.createElement("li");
        newLi.classList.add("tasks");
        toDoUl.insertAdjacentElement('beforeend', newLi);
        let toDoInfo = document.createElement("h3");
        toDoInfo.classList.add("standart_text_size")
        toDoInfo.style.color = "#FFF"
        toDoInfo.textContent = inputValue;
        newLi.insertAdjacentElement('afterbegin', toDoInfo);
        let chekAndDeleteBtns = document.createElement('div');
        chekAndDeleteBtns.classList.add("check_and_remove_btns");
        newLi.insertAdjacentElement('beforeend', chekAndDeleteBtns);
        let checkBox = document.createElement('div');
        checkBox.classList.add("check_box");
        checkBox.addEventListener('click', () => {
            checkBox.classList.toggle("active")
        })
        chekAndDeleteBtns.insertAdjacentElement('beforeend', checkBox);
        let checkBoxIcon = document.createElement("i");
        checkBoxIcon.classList.add("fa-solid", "fa-check", "check_box_icon");
        checkBox.insertAdjacentElement('beforeend', checkBoxIcon);
        let trashButton = document.createElement("button");
        trashButton.classList.add("delete_btn");
        chekAndDeleteBtns.insertAdjacentElement('beforeend', trashButton);
        let trashButtonIcon = document.createElement("i");
        trashButtonIcon.classList.add("fa-solid", "fa-trash", "trash_button");
        trashButton.insertAdjacentElement("beforeend", trashButtonIcon);
        trashButton.addEventListener('click', (event) => {
            let elementToBeDeleted = event.target.closest(".tasks");
            elementToBeDeleted.remove()
        })
        input.value = '';
    }
})

checkBoxArray.forEach((checkBox) => {
    checkBox.addEventListener('click', () => {
        checkBox.classList.toggle("active")
    })
})

trashBinIconArray.forEach((trashIcon) => {
    trashIcon.addEventListener('click', (event) => {
        let elementToBeDeleted = event.target.closest(".tasks");
        elementToBeDeleted.remove()
    })
})
