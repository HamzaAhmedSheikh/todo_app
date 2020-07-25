
var list = document.getElementById('list')

function addTodo() {
    var todo_item = document.getElementById('todo-item')

    // create li tag with text node
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
        li.appendChild(liText)

    // create delete button    
    var delBtn = document.createElement("button")

    
    list.appendChild(li)

    list.setAttribute('class', 'list-group-item');

    todo_item.value = ""
}