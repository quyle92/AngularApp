import { Component, OnInit, OnDestroy } from '@angular/core';
import {TodoService} from './../../services/todo.service';
import {Subscription} from 'rxjs';
import {Todo} from './../../models/todo.class';

@Component({
  selector: 'app-http-get-post',
  templateUrl: './http-get-post.component.html',
  styleUrls: ['./http-get-post.component.css']
})
export class HttpGetPostComponent implements OnInit {

	public todos: Todo[]=[{id:1,employee_name: "test thử thôi", employee_salary: 123}];
	public subscription: Subscription;
  public todo: Todo ;
  public id: number = 1;
  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  	this.loadData();
  }

  ngOnDestroy(): void {
  	if(this.subscription)
  		this.subscription.unsubscribe();
  }

  loadData()  {
  	this.subscription = this.todoService.getAllToDos().subscribe(data => {//console.log(data);
  		this.todos = data;
  	}, error => {
  		console.log(error);
      this.todoService.handleError(error);
   	});
  }

  onAddData(name: string, salary: number){console.log(`${name} + ${salary}`);
  	this.subscription = this.todoService.onPostData(new Todo(name, salary)).subscribe(newData => {console.log(newData);
  		this.todos.push(newData);
  	}, error => {
  		console.log(error);
  		this.todoService.handleError(error);
  	});
  }

  ngOnChanges()  
  {
     console.log('ngOnChanges')
  }

  update(id: number,name:string, salary: number):void {
    this.id = id;
    this.todo = new Todo( name, salary);
  }

  onEditData(id: number, name:string, salary: number){console.log(`${id} + ${name} + ${salary}`);
    let updatedData = new Todo(name, salary);  
    this.subscription = this.todoService.onPutData(id,updatedData).subscribe(updatedData => {
       this.todos[this.getIndex(id)] = updatedData;
    }, error => {
      console.log(error);
      this.todoService.handleError(error);
    });
  }

  getIndex(id: number){
     let result: number;
    this.todos.forEach((item, index) => {
        if(item.id === id)
           result = index;
      });
    return result;
  }

  onDelete(id: number){
    this.subscription = this.todoService.onDelData(id).subscribe(updatedData => {
      this.todos.splice(this.getIndex(id));
    }, error => {
      console.log(error);
      this.todoService.handleError(error);
    });
  }

}
