"use strict";

$(document).ready( () => {
    const tasks = [];

    $("#add_task").click( () => {   
        const textbox = $("#task");
        const task = textbox.val();
        if (task === "") {
            alert("Please enter a task.");
            textbox.focus();
        } else {
            //Split task
            let splitTask = task.split(',');
            for (let i = 0; i < splitTask.length; i++){
                let taskAssignment = `${splitTask[i].trim()}`;
                tasks.push(taskAssignment);
            }
            textbox.val("");
            //Display on the html
            $("#task_list").val(tasks.join("\n"));
            textbox.focus();
        }
    });
    
    $("#clear_tasks").click( () => {
        tasks.length = 0;
        $("#task_list").val("");
        $("#task").focus();
    }); 
    
    $("#task").focus();
});