import { Pipe, PipeTransform } from '@angular/core';
import { convertDurationToHours } from '../utils/calculateDate';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number): unknown {
    const convertedTime = convertDurationToHours(value);
    return convertedTime;
  }
}
