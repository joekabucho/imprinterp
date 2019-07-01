import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { DataService } from "./../../services/data.service";

import { Board } from "./../../models/Board";

import "rxjs/add/operator/switchMap";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.css"]
})
export class BoardComponent implements OnInit {
  add: boolean = false;
  id: number;
  board: Board;
  hidden: boolean = true;
  error: boolean = false;

  constructor(private route: ActivatedRoute, private service: DataService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get("id");
      this.board = this.service.getBoard(this.id);
    });
  }

  toggle() {
    this.hidden = !this.hidden;
  }

  addList() {
    this.add = true;
    this.error = false;
  }

  addItem(item) {
    let added = this.service.addListItem(this.id, item);
    if (!added) {
      this.error = true;
    } else {
      this.add = false;
    }
  }

  deleteItem(item) {
    this.service.deleteListItem(this.id, item);
  }
}
