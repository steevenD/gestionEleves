import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mineur'
})
export class MineurPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value < 18) {
      return value + ' mineur';
    } else {
      return value;
    }
  }

}
