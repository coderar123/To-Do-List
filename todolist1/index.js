document.querySelector('#push').onclick = function(){
    var taskInput = document.querySelector('#taskInput');
    if(taskInput.value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <input type="checkbox" class="task-checkbox">
                <span class="task-name">${taskInput.value}</span>
                <button class="delete">Delete</button>
                <button class="modify">Modify</button>
            </div>
        `;

        taskInput.value = ""; // Clear the input field after adding the task

        // Attach event listeners to new delete buttons
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        // Attach event listeners to new modify buttons
        var modify_tasks = document.querySelectorAll(".modify");
        for(var i=0; i<modify_tasks.length; i++){
            modify_tasks[i].onclick = function(){
                var task = this.parentNode.querySelector('.task-name');
                var newName = prompt("Modify task:", task.textContent);
                if (newName !== null) {
                    task.textContent = newName;
                }
            }
        }

        // Attach event listeners to new checkboxes
        var checkboxes = document.querySelectorAll(".task-checkbox");
        for(var i=0; i<checkboxes.length; i++){
            checkboxes[i].onclick = function(){
                var task = this.parentNode.querySelector('.task-name');
                if (this.checked) {
                    task.style.textDecoration = "line-through";
                } else {
                    task.style.textDecoration = "none";
                }
            }
        }
    }
}
