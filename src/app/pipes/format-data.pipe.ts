import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatData'
})
export class FormatDataPipe implements PipeTransform {

  transform(value: string, start: number, end: number): string {
  	
    return value ? value.substr(start,end) + "..." : "";
  }

}
