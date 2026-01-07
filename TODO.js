function addtask(){
    let taskInput = document.querySelector(".taskInput");
    let taskValue = taskInput.value.trim();
    if(taskValue === ""){
        alert("Enter a task");
        return;
    }
    let li = document.createElement("li");
    li.textContent = taskValue;

    li.onclick = function(){
        this.remove();
    };
    document.querySelector(".list").appendChild(li);
    taskInput.value = "";
}