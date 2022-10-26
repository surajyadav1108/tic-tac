import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerIntoName'
})
export class PlayerIntoNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
