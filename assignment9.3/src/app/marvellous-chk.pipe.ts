import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, param:string) {
    let result = '';
   if(param == "Prime"){
    result += `${value} is a Prime number`;
  } else {
    result += `${value} is not a Prime number`;
  }

   if(param == "Perfect"){
    result += this.isPerfect(value) ? 'Perfect, ' : 'Not Perfect, ';

   }

   if(param == "even"){
    result += value % 2 === 0 ? 'Even, ' : 'Not Even, ';

   }

   if(param == "odd"){
    result += value % 2 !== 0 ? 'Odd, ' : 'Not Odd, ';

   }

   return result.slice(0, -2); // Remove the trailing comma and space

  }

  private isPrime(num: number): boolean {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

   private isPerfect(num: number): boolean {
    if (num <= 1) {
      return false;
    }
    let divisorSum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        divisorSum += i;
        if (i !== num / i) {
          divisorSum += num / i;
        }
      }
    }
    return divisorSum === num;
  }

}
