import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private currentPlayerIx!: number;
  private currentWinnerIx!: number;
  public boardContent!: number[][];

  constructor() {

    this.restart();
   
  }

  public set(col: number, row: number): void {
    if (this.currentPlayerIx === 0 || this.boardContent[row][col] === 0){
      this.boardContent[row][col] = this.currentPlayerIx;
      this.currentPlayerIx = this.currentPlayerIx === 1 ? 2 : 1;
    }

    this.currentWinnerIx = this.getWinnerIndex();
  }


  public get winnerIndex(): number {
    return this.currentWinnerIx;
  }

   /*Return the winner 
  */

   private getWinnerIndex(): number  {
    // check for rows
    for (let row = 0; row < 3; row++) {
      const first = this.boardContent[row][0];
      if (
        first !== 0 &&
        this.boardContent[row][1] === first &&
        this.boardContent[row][2] === first
      ) {
        return first;
      }
    }

    //check columns

    for ( let col =0; col < 3; col++) {
      const first = this.boardContent[0][col];
      if (
        first !==0 && 
        this.boardContent[1][col] === first &&
        this.boardContent[2][col] === first
      ) {
        return first;
      }
    }

    //chech diagonals

    const first = this.boardContent[1][1];
    if ( first !== 0) {
      if  (
        this.boardContent[0][0] === first &&
        this.boardContent[2][2] === first
      ) {
        return first;
      }
      if (
        this.boardContent[2][0] === first &&
        this.boardContent[0][2] === first
      ) {
        return first;
      }
    }

    return 0;
  }

  public restart(): void {
    this.boardContent = [
      [ 0, 0, 0],
      [ 0, 0, 0],
      [ 0, 0, 0],
    ];
    this.currentPlayerIx = 1; 
    this.currentWinnerIx = 0;
  }
}
