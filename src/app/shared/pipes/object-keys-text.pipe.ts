import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectKeysText'
})
export class ObjectKeysTextPipe implements PipeTransform {

  transform(value: any, ...keys: string[]): string {
    return keys.reduce(((previousValue, currentValue) => previousValue + ' ' + value[currentValue]), '').trim();
  }

}
