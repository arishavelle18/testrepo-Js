let tasks = [];
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllTask = document.getElementById("clearAllTask");
function toggleTask(index){
    tasks[index].completed = !tasks[index].completed;
    showTask();
}
const showTask = () =>{
    // taskList.innerHTML = tasks.map((task,index) => {
    //     return  `<li>${task}</li>`;
    // }).join("") || "";
    taskList.innerHTML = ""
    tasks.forEach((task,index) => {
        const li = document.createElement("li");
        li.innerHTML=`<input type="checkbox" id="task-${index}" ${task.completed ? "checked": ""}>
        <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li)
    });
}

const addTask = (value) => {
    tasks.push({text:value,completed:false});
}

clearCompletedBtn.addEventListener("click",  () => {
    tasks = tasks.filter(task => !task.completed);
    showTask();
}); 

clearAllTask.addEventListener("click", () => {
    tasks = [];
    showTask();
});

addTaskBtn.addEventListener("click",() => {
    const taskInput = document.getElementById('taskInput');
    if(taskInput.value){ 
        addTask(taskInput.value.trim())
        showTask();
        taskInput.value = "";
        
    }
});

