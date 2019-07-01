import { Component, Input, Output, EventEmitter } from "@angular/core";
import { DataService } from "./../../services/data.service";

import { List } from "./../../models/List";
import { DragData } from "./../../models/DragData";

@Component({
  selector: "app-lists",
  templateUrl: "./lists.component.html",
  styleUrls: ["./lists.component.css"]
})
export class ListsComponent {
  todoItem: string = "";
  hidden: boolean = true;
  @Input() listItem: List;
  @Input() id: number;
  @Output() deleteItem: EventEmitter<string> = new EventEmitter();

  constructor(private service: DataService) {}

  toggle() {
    this.hidden = !this.hidden;
  }

  deleteListItem(item: string) {
    this.deleteItem.emit(item);
  }

  addTodoItem(list: string, item?: string) {
    item = item ? item : this.todoItem;
    this.service.addTodo(this.id, list, item);
    this.todoItem = "";
  }

  taskUpdated() {
    this.service.updateBoards();
  }

  onDragStart(event: DragEvent, todoId: number, list: string) {
    let data: DragData = {
      id: todoId,
      item: this.service.getTodo(this.id, list, todoId),
      list: list
    };
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", JSON.stringify(data));
  }

  onDrop(list: string, event: DragEvent) {
    let data: DragData = JSON.parse(event.dataTransfer.getData("text/plain"));
    this.addTodoItem(list, data.item);
    this.service.removeTodo(this.id, data.list, data.id);
    event.dataTransfer.clearData();
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }

  deleteTodoItem(todoId: number, list: string) {
    this.service.removeTodo(this.id, list, todoId);
  }
}
