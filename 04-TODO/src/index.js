
import './styles.css';
import { Todo, TodoList } from './class';
import { crearTodoHtml } from './js/components';



export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml( todo ));
// todoList.todos.forEach(crearTodoHtml);

todoList.todos[4].imprimirClase();


