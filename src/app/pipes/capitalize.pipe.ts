import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
  	if(!value) value = "";
  	  var arr = value.split(" ");
  	  var result ="";	
  	 arr.forEach((x) => {
  	 	result += x.charAt(0).toUpperCase() + x.substr(1) + " ";
  	 });
  	     console.log(result);
  	  return result;
  }

}
