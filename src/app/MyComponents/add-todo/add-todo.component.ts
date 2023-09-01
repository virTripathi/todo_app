import { Component,EventEmitter, OnInit,Output, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TitleValidator } from './Restricted-NameDirective';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title: string;
  desc: string;
  addTaskForm!: FormGroup
  formTitle = "formValidation";
  submitted = false;
  @Output()todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor(private formBuilder: FormBuilder){ }

  ngOnInit(): void{
    //validations

    this.addTaskForm = this.formBuilder.group({
      title:['',Validators.required],
      desc:['',Validators.required]
    })
  }
  onSubmit(){
    this.submitted = true
    if(this.addTaskForm.invalid){
      return
    }
    const todo = {
      title: this.title,
      desc: this.desc,
      active: true
    }
    
    
    this.todoAdd.emit(todo)
  }
  
}
