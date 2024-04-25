const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoFilter=document.querySelector(".todo-filter");
const todoList=document.querySelector(".todo-list");

document.addEventListener("DOMContentLoaded", showTask);
todoButton.addEventListener("click", addtodos);
todoFilter.addEventListener("change", filterTodo);

function addtodos(event)
{
    event.preventDefault();
    if(todoInput.value==='')
    {
        alert("you must write something");
        savedata();
    }
    else
    {
        let li=document.createElement("li");
        li.innerHTML=todoInput.value;
        todoList.appendChild(li);
        todoInput.value = '';
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        savedata();
    }
}   

todoList.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata()
{
    localStorage.setItem("data",todoList.innerHTML);
}
function showTask()
{
    todoList.innerHTML=localStorage.getItem("data");
}
showTask();
function filterTodo() {
    const todos = todoList.querySelectorAll('li');

    todos.forEach(function(todo) {
        switch(todoFilter.value) {
            case "completed":
                if (todo.classList.contains('checked')) {
                    todo.style.display = 'flex'; // Show completed tasks
                } else {
                    todo.style.display = 'none'; // Hide incomplete tasks
                }
                break;
            case "incomplete":
                if (!todo.classList.contains('checked')) {
                    todo.style.display = 'flex'; // Show incomplete tasks
                } else {
                    todo.style.display = 'none'; // Hide completed tasks
                }
                break;
            default:
                todo.style.display = 'flex'; // Show all tasks if no filter selected
        }
    });
}


