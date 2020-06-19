import { Injectable } from '@angular/core';
import {Products} from '../models/products.class';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
	public products : Products[]=[
		{
			id: 1,
			name: 'Iphone 6 Plus',
			price: 1600,
			status: 1
		},
		{
			id: 2,
			name: 'Nokia Xpress Music',
			price: 700,
			status: 0
		},
		{
			id: 3,
			name: 'Oppo China',
			price: 800,
			status: 1
		},
		{
			id: 4,
			name: 'VSmart',
			price: 900,
			status: 0
		},
		{
			id: 5,
			name: 'Sony Xperia',
			price: 1000,
			status: 1
		}
	];

  	constructor() { }

  	getAllProducts(){
  		return this.products;
  	}

  	getAllProductsByParams(name?: string, price?: any){

  		let result:Products[]=[];

  		if(name != null) 
  			result = this.products.filter(x => {return x.name.toLowerCase().indexOf(name) !== -1});
  			
  		if(price !=null) 
  			if(result !=null) result = result.concat(this.products.filter(x => {return x.price.toString().indexOf(price) !== -1}));
  			else result = this.products.filter(x => {return x.price.toString().indexOf(price) !== -1});
		
		return [...new Set(result)];//Using the Set constructor and the spread syntax to remove duplicate elements in array
  	}

  	getProductById(id: number){
  		//let i;
  	//Cách 1: 	for ( i = 0; i < this.products.length; i++)
  	// 	{  		
			//  //return (this.products[i].id == id) ? this.products[i] : null; if - else  ternary operator này ko xài đc ở đây vì nếu this.products[i].id !== id, null sẽ đc return ngay và vòng lặp sẽ kết thúc mà ko  đi tới element cuối cùng của vòng lặp

			// if(this.products[i].id == id){
			// 	return  this.products[i];
			// 	//console.log(this.products[i])
			// }

  	// 	} 
		

   	/* cách 2*/
  		let rs:any;
  		this.products.forEach(
          element => {//console.log(element);
          	if(element.id == id){
				rs =  element;
			}
          });
  		 return  rs;

  		   	// 	 this.products.forEach(
   //        element => {//console.log(element);
   //        	if(element.id == id){
			// 	return element;
				
			// }
   //        }); //cái này ko xài đc vì forEach() sẽ ko thoát khỏi vòng lặp, mặc dù bên trong có return (ref:https://medium.com/@virtual_khan/javascript-foreach-a-return-will-not-exit-the-calling-function-cfbc6fa7b199).

   	}
}
