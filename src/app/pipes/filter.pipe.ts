import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: any[], id:number, name:string, price:string, status:string ): any {
    if(!id && !name  && !price  && !status || status === "all")
    {	
    	return products;
	}
	else 
	{
		if(id)
		{
			products = products.filter(x => {return x.id.toString().indexOf(id) != -1}) ;
		}//note No.6
		if(name)
		{
			products = products.filter(x =>{return x.name.toLowerCase().indexOf(name.toLowerCase()) != -1}) ;
		}
		if(status)
		{	
			products = products.filter(x =>{
				console.log(x.status);
				return x.status.toString().indexOf(status) != -1}) ;
		} 	

		return products;
	}
  }

}
