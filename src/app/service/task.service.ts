import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  getTasks(){
    return ["task1","task2","task3"]
  }

}
