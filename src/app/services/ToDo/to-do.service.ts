import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDo } from '../../models/to-do/to-do';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  
  apiURL: string = 'http://www.mocky.io/v2';

  constructor(private httpClient: HttpClient) { }

  getToDos(url: string): Observable<ToDo[]>{
    return this.httpClient.get<ToDo[]>(`${this.apiURL}/${url}?mocky-delay=2000ms`);
  }
}
