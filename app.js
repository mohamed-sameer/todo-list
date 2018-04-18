/*jshint esversion: 6 */
// defin ethe UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all eventListenrs
loadEventListners();

function loadEventListners(){
    //add task event
    form.addEventListener('submit', addTask);

    //remove task event
    taskList.addEventListener('click',removeTask);

    //clear the task list
    clearBtn.addEventListener('click',clearTasks);

    //filter tasks
    filter.addEventListener('keyup',filterTasks);
}
//add a task
function addTask(e){
    if(taskInput.value === ''){
        alert('add a task');
    }
    //creat an Li
    const li = document.createElement('li');

    //add class
    li.className = 'collection-item';

    //creat textNode and append it ot the li
    li.appendChild(document.createTextNode(taskInput.value));

    //creat Link
    const link = document.createElement('a');

    //add class
    link.className = 'delete-item secondary-content';

    //add icon HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';

    //append the link to the li
    li.appendChild(link);

    //append the li to the ul
    taskList.appendChild(li);

    //clear the input
    taskInput.value = '';
    e.preventDefault();
}
//remove task
function removeTask(e){
    //targeting the a link
     if(e.target.parentElement.classList.contains('delete-item')) {

        //confirm the deleting
        if(confirm('Are You Sure')) {
            
            e.target.parentElement.parentElement.remove();
        }
     }
}

//clear tasks
function clearTasks() {
    //while there is first child still there
    while(taskList.firstChild) {
        //remove child which is the whole elemnts with first child
        taskList.removeChild(taskList.firstChild);
    }
}
//filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    });
}