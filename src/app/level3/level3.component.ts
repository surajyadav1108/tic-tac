import { Component, OnInit } from '@angular/core';
import { Level2Component } from '../level2/level2.component';

/**
 * Represts a board cell.
 */
 export interface BoardCell {
  /**
   * player (X or O) occupying the cell, empty string if the cell is empty.
   * 
   */
  playerName: string;

  /**
   * CSS class of the player occupying the cell, emoty string is the cell is empty.
   */
  class: string;
}

@Component({
  selector: 'app-level3',
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.css']
})
export class Level3Component extends Level2Component {

  constructor() {
    super();
  }

  /*gets a two dimensional array representing the board's content.*/

  public getCells(): BoardCell[][] {
    const result: BoardCell[][] = [];
    for (let row = 0; row < 3; row++) {
      result.push([]);
      for (let col = 0; col < 3; col++) {
        result[row][col] = {
          playerName: this.getPlayerName(col, row),
          class: this.getStyle(col, row),
        };
      }
    }

    return result;
  }


}
