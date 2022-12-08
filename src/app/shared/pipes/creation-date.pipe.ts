import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creationDate',
})
export class CreationDatePipe implements PipeTransform {
  transform(value: string) {
    const [dd, mm, yyyy] = value.split('/');

    const d = new Date([mm, dd, yyyy].join('/'));
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join('.');
  }
}
