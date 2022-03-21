import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datepipe'
})
export class DatepipePipe implements PipeTransform {

  transform(value: number): String {
    var day = new Date(value*1000);
    return day.toDateString()
  }

}
