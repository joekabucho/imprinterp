import { Component, OnInit } from "@angular/core";

import { DataService } from "./../../services/data.service";
import { Board } from "./../../models/Board";

@Component({
  selector: "app-create-board",
  templateUrl: "./create-board.component.html",
  styleUrls: ["./create-board.component.css"]
})
export class CreateBoardComponent implements OnInit {
  add: boolean = true;
  boardName: string = "";
  boards: Board[];
  error: string;
  icon: string = "add";

  constructor(private service: DataService) {}

  ngOnInit() {
    this.boards = this.service.getBoards();
  }

  toggle() {
    this.add = !this.add;

    if (this.icon === "add") {
      this.icon = "remove";
    } else {
      this.icon = "add";
    }
  }

  hide(form) {
    this.add = true;
    form.reset();
  }

  onCreate(form) {
    let trial = this.service.addBoard(this.boardName);
    if (trial) {
      this.hide(form);
    } else {
      this.error = "This board already exists!";
    }
  }
}
