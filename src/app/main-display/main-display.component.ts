import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  styleUrls: ['./main-display.component.css']
})
export class MainDisplayComponent implements OnInit {
  tasks:Array<any>;
  constructor(private taskService:TaskService) { }

  ngOnInit() {
    this.tasks=this.taskService.getTasks();
  }

}
