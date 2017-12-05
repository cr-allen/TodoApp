// research: functions, calling functions, uuuh, dissect the codepen better. also css grids //

//var query selectors
var taskInput=document.querySelector("toDoItem");
var addButton=document.querySelector("addButton");
var toDo=document.querySelector("toDo");
var done=document.querySelector("done");

// functions and constructors

///functions
var createNewItem = function taskString() {
  var todoItem = document.createElement("li");

  var label = document.createElement("label");
  var checkboxInput = document.createElement("input") ;
  var editInput = document.createElement("input");
  var editButton = document.createElement("button");
  var deleteButton = document.createElement("button");

  label.innerText = taskString;
  //specifics for elements
  input.type="checkbox";
  editInput.type="text";
  editButton.className="edit"
  deleteButton.innerText="Delete";
  deleteButton.className="delete";

  //appends
  todoItem.appendChild(label);
  todoItem.appendChild(checkboxInput);
  todoItem.appendChild(editInput);
  todoItem.appendChild(editButton);
  todoItem.appendChild(deleteButton);
  return todoItem;
};

///add task
var addTask = function functionName() {
  var listItem = createNewItem(taskInput.value);
  toDo.appendChild(listItem);
  bindTaskEvents(listItem,tasksDone)

  //specifics
  var editable = document.querySelector("li");
  li.className="editMode"

  taskInput="";
};

///bindTaskEvents
var bindTaskEvents=function(listItem,checkboxEvent) {
  console.log("bind events");
  //select children
  var checkbox = listItem.querySelector("input[type="checkbox"]");
  var editButton = listItem.querySelector("button.edit");
  var deleteButton = listItem.querySelector("button.delete");

  editButton.onclick=editTask;
  deleteButton.onclick=deleteTask;
  checkbox.ohchange=checkboxEvent; //where is this defined???
}

///edit task
var editTask=function() {
  var taskInput=this.parentNode; //binds to checkbox
  var label = querySelector("label"); //grabs label
  var containsClass=listItem.classList.contains("editMode"); //element might need to be li??


};
//// will call on taskInput, turn it back into an input. add submit button??


///delete task


///date task - date picker that will sit between input and button.


///deadline countdown - will go next to the item in the li.


///drag and drop organizing


///task done






//event listeners
addButton.onclick=addTask;
