// research: functions, calling functions, uuuh, dissect the codepen better. also css grids //




//var query selectors

var taskInput=document.querySelector("toDoItem");
var addButton=document.querySelector("button")[0];
var toDo=document.querySelector("toDo");
var done=document.querySelector("done");

//to dos
var createNewTaskElement=function(taskString){
var listItem=document.createElement("ul");
var ulToDo=document.createElement("ul");

//appends
listItem.appendChild(label);
return listItem;

//function
var addTask=function(){
	console.log("Add Task...");
	//Create a new list item with the text from the #new-task:
	var listItem=createNewTaskElement(taskInput.value);
  done.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value="";
}
addTask();


//onclick events
addButton.onclick=addTask;
addButton.addEventListener("click",addTask);










// button.onClick = createElement('ul')









// body.appendChild('ul');
// var input = document.createElement('li').contenteditable = "true";




//
// function initDoc() {
//   input = document.getElementById("form");
//   sDefTxt = input.innerHTML;
//   if (document.compForm.switchMode.checked) { setDocMode(true); }
// }
