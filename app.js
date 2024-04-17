#! /usr/bin/env node
import inquirer from "inquirer";
let todo_list = [];
let while_condition = true;
while (while_condition === true) {
    //----------------------------------options---------------------------
    let options = await inquirer.prompt([
        {
            type: "list",
            name: "user_option",
            message: "Please Select Your Option",
            choices: ["Add", "Remove"],
        },
    ]);
    //------------------------------add-----------------------------------
    if (options.user_option === "Add") {
        let ans = await inquirer.prompt([
            {
                type: "input",
                message: "Please Write Something To Add In The List",
                name: "usr_ans",
            },
        ]);
        if (ans.user_ans !== "") {
            todo_list.push(ans.usr_ans);
            console.log(todo_list);
        }
        else {
            console.log("Please Write Something To Add In The List");
        }
    }
    //------------------------------remove-----------------------------------
    else if (options.user_option === "Remove") {
        let removeChoice = await inquirer.prompt([
            {
                name: "remove_item",
                type: "list",
                message: "Please Select The Item You Want To Remove",
                choices: todo_list,
            },
        ]);
        let index_to_remove = todo_list.indexOf(removeChoice.remove_item);
        if (index_to_remove >= 0) {
            todo_list.splice(index_to_remove, 1);
            console.log("you removed : ", removeChoice.remove_item);
            console.log(todo_list);
        }
    }
    //------------------------------confirm-----------------------------------
    let usr_ans = await inquirer.prompt([
        {
            name: "Selection",
            type: "confirm",
            message: "Are You Sure You Want To continue ?",
            default: true,
        },
    ]);
    if (usr_ans.Selection === false) {
        while_condition = false;
    }
}
console.log(`Thank you For using todo list`);
