
var list = document.getElementById('list')

function addTodo() {
    var todo_item = document.getElementById('todo-item')
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)

    li.appendChild(liText)
    list.appendChild(li)

    todo_item.value = ""
}