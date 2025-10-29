import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customString',
  standalone: true,
})
export class CustomStringPipe implements PipeTransform {
  transform(value: string, arg?: string): string {
    let formattedValue = '';
    switch (arg) {
      case 'upper':
        formattedValue = value.toLocaleUpperCase();
        break;
      case 'lower':
        formattedValue = value.toLocaleLowerCase();
        break;
      default:
        value;
    }
    return formattedValue;
  }
}
