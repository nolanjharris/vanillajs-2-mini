let form = document.querySelector('form');
form.addEventListener('submit', addTodo);
let completeMessage = document.querySelector('#completed-message');


function addTodo(event) {
    event.preventDefault();
    let listItem = document.createElement('li');
    listItem.addEventListener('click', completeTodo);
    let input = document.querySelector('#item');
    let userInput = input.value;
    listItem.innerText = userInput;
    let newButton = document.createElement('button');
    newButton.innerText = 'x';
    newButton.addEventListener('click', removeTodo);
    listItem.append(newButton);
    let list = document.querySelector('ul');
    list.appendChild(listItem);
}

function removeTodo(event) {
    event.stopPropagation();
    event.target.parentNode.remove();
}

function completeTodo(event) {
    let ariaChecked = event.target.getAttribute('aria-checked');
    if (ariaChecked !== true) {
        event.target.setAttribute('aria-checked', 'true');
    } else {
        event.target.setAttribute('aria-checked', 'false');
    }
    completeMessage.style.visibility = 'visible';
    setTimeout(function () {
        completeMessage.style.visibility = 'hidden';
    }, 2000)
}