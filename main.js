#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let Todolist = [];
let condition = true;
console.log(chalk.blueBright.bold("\tWelcome to Our To_Do_List App"));
//Basic todolist application: 
// while(condition)
//     {
//    let addTask =await inquirer.prompt(
//     [
//         {
//             name:"Todo",
//             type:"input",
//             message:"what do you want to add in your Todos list?"
//         },
//         {
//             name:"addMore",
//             type:"confirm",
//             message:"Do you want to add more task?",
//             default:"false"
//         }
//     ]
// )    
//   Todolist.push(addTask.Todo);
//   condition=addTask.addMore;
//   console.log(Todolist );
//     };
//   console.log("your updated Todolist is:", Todolist)
//**Updated todolist application**: 
let main = async () => {
    while (condition) {
        let options = await inquirer.prompt([
            {
                name: "target",
                type: "list",
                message: "select an option to perform task",
                choices: ["Add Task", "update Task", "Delete Task", "view Todolist", "Exit"],
            }
        ]);
        if (options.target === "Add Task") {
            await addTask();
        }
        else if (options.target === "update Task") {
            await updateTask();
        }
        else if (options.target === "Delete Task") {
            await deleteTask();
        }
        else if (options.target === "view Todolist") {
            await viewTask();
        }
        else if (options.target === "Exit") {
            condition = false;
        }
    }
};
//Function to Add  Task;
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "what would you like to add in your Todo_List? "
        }
    ]);
    Todolist.push(newTask.task);
    console.log(`\t${newTask.task} Task added sucessfully!`);
};
//Function to view Todolist;
let viewTask = async () => {
    console.log(" Your Todo_List:\n");
    Todolist.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
//Function to update task;
let updateTask = async () => {
    await viewTask();
    let includeTask = await inquirer.prompt([
        {
            name: "taskIndex",
            type: "number",
            message: "Add 'index no'of task you want to update:",
        },
        {
            name: "newTask",
            type: "input",
            message: "Enter your new task to update:"
        }
    ]);
    Todolist[includeTask.taskIndex - 1] = includeTask.newTask,
        console.log(`\n\tTask at index no ${includeTask.taskIndex} updated sucessfully`);
};
//function for Deleted Task;
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter tne 'index no' of task you want to delete:",
        }
    ]);
    let deleteTask = Todolist.splice(taskIndex.index - 1, 1);
    console.log(`\t${deleteTask} task has been deleted sucessfully!`);
};
main();
