document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task-input");
    const addButton = document.getElementById("add-button");
    const pendingTasksList = document.getElementById("pending-tasks-list");
    const completedTasksList = document.getElementById("completed-tasks-list");
  
    addButton.addEventListener("click", function() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const taskItem = createTaskItem(taskText);
        pendingTasksList.appendChild(taskItem);
        taskInput.value = "";
      }
    });
  
    function createTaskItem(text) {
      const taskItem = document.createElement("li");
      const taskText = document.createElement("span");
      taskText.textContent = text;
      const completeButton = document.createElement("button");
      completeButton.textContent = "Complete";
      completeButton.addEventListener("click", function() {
        const parentList = taskItem.parentNode;
        if (parentList === pendingTasksList) {
          taskItem.classList.add("completed");
          completedTasksList.appendChild(taskItem);
          completeButton.textContent = "Undo";
        } else if (parentList === completedTasksList) {
          taskItem.classList.remove("completed");
          pendingTasksList.appendChild(taskItem);
          completeButton.textContent = "Complete";
        }


      });
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function() {
        taskItem.remove();
      });
      taskItem.appendChild(taskText);
      taskItem.appendChild(completeButton);
      taskItem.appendChild(deleteButton);
      return taskItem;
    }
  });

  