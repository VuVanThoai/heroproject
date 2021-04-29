import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConverter'
})
export class TempConverterPipe implements PipeTransform {

  transform(value: number, ...args: string[]): number {
    return args[0] === 'C' ? value : value * 1.8 + 32;
  }

}
