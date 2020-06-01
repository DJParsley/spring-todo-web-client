import axios from 'axios';
import Todo from "./Todo";


const base_url = 'https://blarg-todo.herokuapp.com/api/todos';

export const getTodos = async () => {
    try {
        let response = await axios.get(base_url);
        let {data} = await axios.get(base_url);
        console.log("Response", response);
        console.log("Data",response.data);
        console.log("Data",data);
        return response.data;
    } catch (error) {
        return error;
    }
};

export const getTodoById = (id:number) => {

};

export const postTodo = (todo: Todo) => {

};

export const updateTodoById = (todo: Todo) => {

};

export const deleteTodoById = (id: number) => {

};