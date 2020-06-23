import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse,  } from '@angular/common/http';
import {Observable,throwError } from 'rxjs';
import {Todo} from './../models/todo.class';



@Injectable({
  providedIn: 'root'
})
export class TodoService {

	//public API: string = "http://dummy.restapiexample.com/api/v1/employees";
  public API: string = "https://5ef163421faf160016b4d510.mockapi.io/api/v1/employees/";

  constructor( public http: HttpClient) { }

  getAllToDos() : Observable<Todo[]>{
  	return this.http.get<Todo[]>(this.API);//ko có <Todo[]> sẽ báo lỗi warning
  }

  handleError(err)
  {
  	if(err.error instanceof ErrorEvent)
  	{
  		console.log(`CLient-side errors: ${err.error.message}`)
  	} else 
  	{
  		console.log(`Server-side errors: ${err.status} - ${err.error['message']}`);
  		
  	}

  }

  onPostData(newData: Todo): Observable<Todo>{
  	return this.http.post<Todo>(this.API,newData);
  }

  onPutData(id, updatedData: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.API+id,updatedData);
  }

  onDelData(id): Observable<Todo> {
    return this.http.delete<Todo>(this.API+id);
  }


}
