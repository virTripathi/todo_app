import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import {Todo} from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{
  @Input()todos: Todo[];
  @Output()todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output()todoCheckBox: EventEmitter<Todo> = new EventEmitter();
  localItem: string;
  // todos: Todo[];
  constructor(){ 
  }
  // dtoptions: DataTables.Settings={};
  
  ngOnInit(): void {
  
  }
  onDeleteButtonClick(todo: Todo){
    this.todoDelete.emit(todo);
    // console.log("Onlick has been triggered");
    
  }
  onCheckBoxClick(todo){
    this.todoCheckBox.emit(todo);
  }
  toggleTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
 
}
