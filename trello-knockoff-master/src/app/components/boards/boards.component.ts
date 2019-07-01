import { Component, OnInit, Input } from '@angular/core';
import { DataService } from "../../services/data.service";
import { Board } from './../../models/Board';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  error:Boolean=false;
  @Input() id:number;
  @Input() board:Board;

  constructor(private service:DataService) { 
  }

  ngOnInit() {
  }

  deleteBoard(){
    let empty=this.service.deleteBoard(this.id);
    if(!empty){
      this.error=true;
    }
  }

}
