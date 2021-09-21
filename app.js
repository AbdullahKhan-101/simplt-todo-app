var list = document.getElementById("list");

function AddTodo() {
  var input = document.getElementById("todo-item");

  //create li tag with text node
  var li = document.createElement("li");
  var liText = document.createTextNode(input.value);
  li.appendChild(liText);
  input.value = "";

  //create delete btn with text(x) node
  var delBtn = document.createElement("button");
  var delText = document.createTextNode("x");
  delBtn.setAttribute("class", "btn");
  delBtn.setAttribute("onclick", "delkrdo(this)");
  delBtn.appendChild(delText);

  //create edit btn
  var editBtn = document.createElement("button");
  var editText = document.createTextNode("Edit");
  editBtn.setAttribute("onclick", "editkrdo(this)");
  editBtn.appendChild(editText);

  li.appendChild(editBtn);
  li.appendChild(delBtn);
  list.appendChild(li);
}

function delkrdo(e) {
  e.parentNode.remove();
}

function dlelteAll() {
  list.innerHTML = "";
}

function editkrdo(e) {
  var val = e.parentNode.firstChild.nodeValue;
  var editValue = prompt("Enter your updated value", val);
  e.parentNode.firstChild.nodeValue = editValue;
}
