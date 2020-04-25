// Defined UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const fiter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners(){
  // add task event
  form.addEventListener('submit', addTask);
  // remove task event
  taskList.addEventListener('click', removeTask);
  // clear task event
  clearBtn.addEventListener('click', clearTask);
  // filter event
  filter.addEventListener('keyup', filterTask);
}

// Add task
function addTask(e) {
  if(taskInput.value === '' ) {
    alert('Add a task');
  }

  // create li element
  const li = document.createElement('li');
  // add class
  li.className = 'collection-item';
  // Create text node and append li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
    const link = document.createElement('a');
  // add link class
    link.className = 'delete-item secondary-content'; 
  // add icon html to link
    link.innerHTML = '<i class="fa fa-remove">';
  // Append the link to li
    li.appendChild(link);

  //console.log(li);
  // Append the li to ul
    taskList.appendChild(li);

  // clear input
  taskInput.value = '';

  e.preventDefault();

}

// Remove task
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are You Sure?')){
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear task
function clearTask(e){
  // taskList.innerHTML = '';

  // Faster
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}  

// Filter Task
function filterTask(e){
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach
  (function(task){
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}