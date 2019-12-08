import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent {

  private board: String;

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => params.get('board'))
    ).subscribe(data => { this.board = data })
  }

}
