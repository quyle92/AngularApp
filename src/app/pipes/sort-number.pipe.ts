import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortNumber'
})
export class SortNumberPipe implements PipeTransform {

  	transform(arrNumber: any[], args: number): any {
	    if (args == 1)
	    {
		    // console.log( arrNumber.sort((a,b) => {
		    // 	return a-b;
		    // }));
		    //return 11;
	    	var asc =  arrNumber.sort((a,b) => {
		    	return a > b ? 1 : b > a ? -1 : 0;
		    })
		    return [...asc];

	 	} 
	 	if (args == -1)
	 	{
	 		// console.log(arrNumber.sort((a,b) => {
		  //    	return b-a;
	 		// }));
	 		//return 22;
		    var desc =  arrNumber.sort((a,b) => {
		    	return b-a;// sort kiểu ngắn gọn này chỉ work với array là number thôi 
	 		})
	 		return [...desc];
		}

	 	// arrNumber = arrNumber.sort((a,b) => {
	 	// 	if (args==-1) {return b-a;}
	 	// })
	 	// return arrNumber;
		//}


	}
}