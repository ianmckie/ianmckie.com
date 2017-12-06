import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysAgo'
})
export class DaysAgoPipe implements PipeTransform {

  transform(value: Date): string {
    var diff = Math.abs(+new Date() - +new Date(value)),
        days = Math.round(diff / ( 24 * 60 * 60 * 1000 ));

    return days < 1 ? 'Today' : days+' day(s) ago'
  }
}