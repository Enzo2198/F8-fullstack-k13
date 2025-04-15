import {getData, postData, putData, deleteData} from './api.js';
import {bindRows} from './utils.js';

const todoListE = document.querySelector("#task-list");
const inputE = document.querySelector("#new-task");
const addBtn = document.querySelector("#add-btn");

const onMounted = async () => {
    // get job from api
    const todos = await getData('todos');
    console.log(todos)
    // bind data to dom
    bindRows(todoListE, todos);
}

const onSave = () => {
    // Get value from input tag
    const inputValue = inputE.value;
    console.log(inputValue);
    const body = {
        id: Date.now(),
        title: inputValue,
        completed: false,
    }
    postData('todos', body)
    onMounted();
}

addBtn.addEventListener('click', onSave);
onMounted();