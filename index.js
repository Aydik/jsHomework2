// получаем элементы

const nameInput = document.getElementById("name-input")
const groupInput = document.getElementById("group-input")
const addButton = document.getElementById("add-btn")
const clearButton = document.getElementById("clear-btn")
const dataTableBody = document.getElementById("data-table-body")
const errorDiv = document.getElementById("error-div")

// определяем переменные

let nameInputValue = ""
let groupInputValue = ""

// скрываем ошибку при запуске
errorDiv.style.display = "none"

// слушатели событий

nameInput.addEventListener("input", (event) => {
    nameInputValue = event.target.value
})

groupInput.addEventListener("input", (event) => {
    groupInputValue = event.target.value
})

addButton.addEventListener("click", () => {
    if (nameInputValue === "" || groupInputValue === "") {
        errorDiv.style.display = "block"
    }
    else {
        addTableRow(nameInputValue, groupInputValue)

        nameInput.value = "";
        groupInput.value = "";
        nameInputValue = ""
        groupInputValue = ""
        errorDiv.style.display = "none"

        addListenerForEach()
    }
})

clearButton.addEventListener("click", clearTableRows)

// функции

function addTableRow(name, group) {
    const fragment = document.createDocumentFragment()
    const tr = document.createElement("tr")
    const tdName = document.createElement("td")
    const tdGroup = document.createElement("td")
    const tdButton = document.createElement("td")
    const button = document.createElement("button")

    tdName.textContent = name
    tr.appendChild(tdName)
    tdGroup.textContent = group
    tr.appendChild(tdGroup)
    button.textContent = "X"
    button.classList = "remove-button"
    tdButton.appendChild(button)

    tr.appendChild(tdName)
    tr.appendChild(tdGroup)
    tr.appendChild(tdButton)

    fragment.appendChild(tr)
    dataTableBody.appendChild(fragment)
}

function removeRow(event){
    const tableRow = event.target.parentNode.parentNode
    tableRow.innerHTML = null
    event.target.removeEventListener("click", removeRow)
}

function clearTableRows() {
    dataTableBody.innerHTML = null
}

function addListenerForEach(){
    Array.from(document.querySelectorAll(".remove-button")).forEach((item) => {
        item.addEventListener("click", (event) => removeRow(event))
    })
}

