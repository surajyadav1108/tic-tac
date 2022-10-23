import { Component, OnInit } from '@angular/core';
import { BoardService } from './board.service';

@Component({
  selector: 'app-level4',
  templateUrl: './level4.component.html',
  styleUrls: ['./level4.component.css']
})
export class Level4Component implements OnInit {

  constructor(public board: BoardService) { }

  ngOnInit(): void {
  }

}
