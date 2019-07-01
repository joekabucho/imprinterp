import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "./../../models/Todo";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  @Output() taskUpdated: EventEmitter<number> = new EventEmitter();
  @Output() onDragStart: EventEmitter<DragEvent> = new EventEmitter();
  @Output() deleteTodoItem: EventEmitter<number> = new EventEmitter();
  @Input() todo: Todo;
  @Input() todoId: number;
  classSelector: {};

  constructor() {}

  ngOnInit() {
    this.setClasses();
  }

  setClasses() {
    this.classSelector = {
      finished: this.todo.finished,
      unfinished: !this.todo.finished,
      todo: true
    };
  }

  changeStatus() {
    this.todo.finished = !this.todo.finished;
    this.setClasses();
    this.taskUpdated.emit(this.todoId);
  }

  onDrag(event: DragEvent) {
    // event.dataTransfer.effectAllowed = "move";
    // event.dataTransfer.setData('text/plain',this.todo.name);
    this.onDragStart.emit(event);
  }

  deleteTodo() {
    this.deleteTodoItem.emit(this.todoId);
  }
}
