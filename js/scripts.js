// research: functions, calling functions, uuuh, dissect the codepen better. also css grids //

//var query selectors
var taskInput=document.querySelector("#toDoItem");
var addButton=document.querySelector("#addButton");
var toDo=document.querySelector("#toDo");
var done=document.querySelector("#done");
var date = document.querySelector("#date");

console.log(addButton);
console.log(date);
// functions and constructors

///functions
/// create new task
var createNewItem = function(taskString) {
  // need to bind this to the form
  var todoItem = document.createElement("li");
  var label = document.createElement("label");
  var checkboxInput = document.createElement("input") ;
  var editButton = document.createElement("button");
  // var editInput = document.createElement('input')
  var deleteButton = document.createElement("button");
  var dueDate = document.createElement('p')

  label.innerText = taskString;

  //specifics for elements
  checkboxInput.type="checkbox";
  // editInput.type="text";
  // editInput.className="editInput";
  checkboxInput.onchange = checkboxChange;
  editButton.innerText="edit"
  editButton.onclick=editTask;
  deleteButton.onclick=deleteTask;
  deleteButton.innerText="delete";
  deleteButton.className="deleteItem";
  todoItem.className="editMode"


  //appends
  todoItem.appendChild(label);
  todoItem.appendChild(checkboxInput);
  todoItem.appendChild(editButton);
  todoItem.appendChild(deleteButton);
  todoItem.setAttribute("class","editMode");
  return todoItem;
  console.log("item created");
};
////^^^^set attribute for editMode and trigger edit onclick of button



///add task
var addTask = function() {
  console.log('adding tasks');
  var listItem = createNewItem(taskInput.value);
  // var dueDate = createNewItem(date.value)
  toDo.appendChild(listItem);

  //specifics
  var editable = document.querySelector("li");
  editable.className="editMode"

  taskInput.value="";
  console.log(listItem);
};

///edit task <--- does NOTHING
var editTask=function() {
  console.log('edit task ENGAGE');
  var listItem=this.parentNode;
  var label = document.querySelector("label"); //grabs label
  let editInput = document.querySelector('input[type=text]');
  // let editButton = document.querySelector("#editButton");
  var containsClass=label.classList.contains("editMode"); //element might need to be li??
  console.log("stuff");
  if (containsClass) {
    label.innerText=editInput.value;
  } else {
    editInput.value=label.innerText;
  }
  listItem.classList.toggle("editMode");
};
// ^^^ will call on taskInput, turn it back into an input. add submit button?? fix editInput be deleted that lmao


///delete task
var deleteTask = function() {
  var listItem=this.parentNode;
  var ul= document.querySelector('ul');
  var li= document.querySelector('li');
  ul.removeChild('li');
};
///getting error " TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node' at HTMLButtonElement.deleteTask (scripts.js:101)deleteTask @ scripts.js:101"

///task done = works!!! or it used to, bitterest of lmaos
var checkboxChange = function() {
  console.log(this);
  var listItem=this.parentNode; //binds to checkbox again
  done.appendChild(listItem);
  // use an if else statement   checkbox.value boolean
};

var taskIncomplete=function(){
	console.log("Incomplete Task...");
	var listItem=this.parentNode;
	toDo.appendChild(listItem);
};

//event listeners - need function??
addButton.addEventListener("click", addTask);

//for loops
for (var i=0; i<toDo.children.length;i++){

  //bind events to list items children(tasksCompleted)
  bindTaskEvents(toDo.children[i],checkboxChange);
}

//cycle over completedTasksHolder ul list items
for (var i=0; i<done.children.length;i++){
}
