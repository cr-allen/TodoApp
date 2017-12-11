// research: functions, calling functions, uuuh, dissect the codepen better. also css grids //

//var query selectors
var taskInput=document.querySelector("#toDoItem");
var addButton=document.querySelector("#addButton");
var toDo=document.querySelector("#toDo");
var done=document.querySelector("#done");
var date = document.querySelector("#date");

console.log(addButton);
// functions and constructors

///functions
/// create new task
var createNewItem = function(taskString) {
  // need to bind this to the form
  var userInput = document.querySelector('#toDoItem');
  var todoItem = document.createElement("li");
  var label = document.createElement("label");
  var checkboxInput = document.createElement("input") ;
  // var editInput = document.createElement("input");
  var editButton = document.createElement("button"); //not showing up WHY
  var deleteButton = document.createElement("button");
  var dueDate = document.createElement('p')


  label.innerText = taskString;

  //specifics for elements
  checkboxInput.type="checkbox";
  // editInput.type="text";
  editButton.className="edit"
  deleteButton.innerText="delete";
  deleteButton.className="deleteItem";


  //appends
  todoItem.appendChild(label);
  todoItem.appendChild(checkboxInput);
  // todoItem.appendChild(editInput);
  todoItem.appendChild(editButton);
  todoItem.appendChild(deleteButton);
  toDoItem.setAttribute("class","editMode");
  return todoItem;
    console.log("stuff");
};
////^^^^set attribute for editMode and trigger edit onclick of button



///add task
var addTask = function() {
  console.log('adding tasks');
  var li = document.querySelector
  var listItem = createNewItem(taskInput.value);
  var dueDate = createNewItem(date.value)
  toDo.appendChild(listItem);
  bindTaskEvents(listItem,finishedItems);


  //specifics
  var editable = document.querySelector("li");
  li.className="editMode"


  taskInput="";
};
//// only works the first tie used, wtf

///bindTaskEvents
var bindTaskEvents=function(todoItem,checkboxEvent) {
  console.log("bind events");
  //select children
  var checkbox = todoItem.querySelector('input[type="checkbox"]');
  var editButton = todoItem.querySelector("button.edit");
  var deleteButton = todoItem.querySelector("button.deleteItem");

  editButton.onclick=editTask;
  deleteButton.onclick=deleteTask;
  checkbox.onchange=checkboxEvent; //where is this defined???
};

///edit task <--- does NOTHING
var editTask=function() {
  var label = document.querySelector("label"); //grabs label
  var containsClass=todoItem.classList.contains("editMode"); //element might need to be li??
  if (containsClass) {
    label.innerText=editInput.value;
  } else {
    editInput.value=label.innerText;
  }
  listItem.classList.toggle("editMode");
};
// ^^^ will call on taskInput, turn it back into an input. add submit button??


///delete task
var deleteTask = function() {
  var ul= document.querySelector('ul');
  var li= document.querySelector('li');
  ul.removeChild('li');
};


///task done = works!!!
var finishedItems = function() {
  console.log(this);
  var listItem=this.parentNode; //binds to checkbox again
  done.appendChild(listItem);
    bindTaskEvents(listItem);
};


//event listeners - need function??
addButton.addEventListener("click", addTask);

//
