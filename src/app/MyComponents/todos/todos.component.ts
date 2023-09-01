import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { DataTablesModule } from 'angular-datatables/src/angular-datatables.module';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  noOfTodos: number;
  localItem: string;
  todos: Todo[];
  todo: Todo;
  mainTodos: Todo[] = [];
  dtoptions: DataTables.Settings = {};
  // dtTrigger:Todo= new Todo();
  constructor() {
    this.localItem = localStorage.getItem('todos');
    if (this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
      this.noOfTodos = this.todos.length;
    }
  }
  afterKeyword(val = '') {
    // this.todos = [];
    this.mainTodos = [];
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].desc.match(val) || this.todos[i].title.match(val)) {
        this.mainTodos.push(this.todos[i]);
      }
    }
  }
  
  searchFromDesc(val = '') {
    // this.todos = [];
    this.mainTodos = [];
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].desc.match(val)) {
        this.mainTodos.push(this.todos[i]);
      }
    }
  }
  searchFromTitle(val = '') {
    // this.todos = [];
    this.mainTodos = [];
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].title.match(val)) {
        this.mainTodos.push(this.todos[i]);
      }
    }
  }

  ngOnInit(): void {
    this.dtoptions = {
      pagingType: 'full_numbers',
    };
    this.mainTodos = JSON.parse(localStorage.getItem('todos'))    
  }
  deleteTodo(todo: Todo) {
    const index = this.mainTodos.findIndex(obj => JSON.stringify(obj) === JSON.stringify(todo));
    this.mainTodos.splice(index, 1);
    this.noOfTodos = this.mainTodos.length;
    localStorage.setItem('todos', JSON.stringify(this.mainTodos));
  }
  addTodo(todo: Todo) {
    const todos = JSON.parse(localStorage.getItem('todos'))
    const todosLengthExisting = todos.length;
    todo.sno = todosLengthExisting+1;
    this.todos.push(todo);
    this.mainTodos.push(todo);
    this.noOfTodos = this.mainTodos.length;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
