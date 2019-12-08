import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-board',
  templateUrl: './add-board.component.html',
  styleUrls: ['./add-board.component.scss']
})
export class AddBoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public name: string = "";
  public boardName: string;
  public boards: Array<String> = ["The Game","Plans"];


  putName(name) {
    if (name == "") {
      alert("Name is empty!");
    }
    else {
      this.boardName = name;
      this.boards.push(this.boardName);
      this.name = "";
    }

  }

}
