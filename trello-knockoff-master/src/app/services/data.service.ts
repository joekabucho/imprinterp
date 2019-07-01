import { Injectable } from "@angular/core";
import { Board } from "./../models/Board";
import { List } from "./../models/List";
import { Todo } from "./../models/Todo";

@Injectable()
export class DataService {
  boards: Board[];

  constructor() {
    let boards: Board[] = JSON.parse(localStorage.getItem("boards"));

    this.boards = boards ? boards : [];
  }

  addBoard(boardName: string) {
    boardName =
      boardName.charAt(0).toUpperCase() + boardName.substr(1).toLowerCase();

    let board: Board = {
      name: boardName,
      list: []
    };

    let contains = this.boards.find(function(board: Board) {
      return boardName === board.name;
    });
    if (!contains) {
      this.boards.unshift(board);
      this.updateBoards();
      return true;
    } else {
      return false;
    }
  }

  updateBoards() {
    localStorage.setItem("boards", JSON.stringify(this.boards));
  }

  getBoards() {
    return this.boards;
  }

  getBoard(id: number) {
    return this.boards[id];
  }

  deleteBoard(id: number) {
    if (this.boards[id].list.length < 1) {
      this.boards.splice(id, 1);
      this.updateBoards();
      return true;
    }
    return false;
  }

  getId(board: string) {
    let findBoard: Board = {
      name: board
    };
    return this.boards.indexOf(findBoard);
  }

  addListItem(id: number, item: string) {
    let listItem: List = {
      item: item,
      todo: []
    };
    let contains = this.boards[id].list.find(function(list: List) {
      return item === list.item;
    });
    if (!contains) {
      this.boards[id].list.unshift(listItem);
      this.updateBoards();
      return true;
    } else {
      return false;
    }
  }

  findListItem(id: number, item: string) {
    let index: number = -1;
    this.boards[id].list.forEach((value, i) => {
      if (value.item === item) {
        index = i;
      }
    });
    return index;
  }
  deleteListItem(id: number, item: string) {
    let index = this.findListItem(id, item);
    this.boards[id].list.splice(index, 1);
    this.updateBoards();
  }

  addTodo(id: number, list: string, todo: string) {
    let index = this.findListItem(id, list);
    let todoItem: Todo = {
      name: todo,
      finished: false
    };
    this.boards[id].list[index].todo.unshift(todoItem);
    this.updateBoards();
  }

  removeTodo(boardId: number, list: string, todoId: number) {
    let index = this.findListItem(boardId, list);

    this.boards[boardId].list[index].todo.splice(todoId, 1);
    this.updateBoards();
  }

  getTodo(boardId: number, list: string, todoId: number) {
    let listIndex = this.findListItem(boardId, list);
    return this.boards[boardId].list[listIndex].todo[todoId].name;
  }
}
