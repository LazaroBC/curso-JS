
import './styles.css';
import { Todo, TodoList } from './class';



const todoList = new TodoList();
const tarea = new Todo('Aprender JavaScript');

todoList.nuevoTodo( tarea );

console.log( todoList );


