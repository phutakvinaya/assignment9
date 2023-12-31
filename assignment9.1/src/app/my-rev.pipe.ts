import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value 
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ')
  }

}
