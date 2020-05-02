import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatName'
})
export class FormatNamePipe implements PipeTransform {

  transform(pizzaName:string): string {
    let p = pizzaName.substring(0, pizzaName.length-2);
    return p;
  }

}
