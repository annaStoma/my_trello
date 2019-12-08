import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boards-list',
  templateUrl: './boards-list.component.html',
  styleUrls: ['./boards-list.component.scss']
})
export class BoardsListComponent {
  @Input() public boards: Array<String>;

  public board: String;


  constructor() { }

  removeBoard(board) {
    let index = this.boards.indexOf(board);
    this.boards.splice(index, 1);
  }

}
