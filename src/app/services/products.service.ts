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
			id: 51234,
			name: 'Sony Xperia',
			price: 1000,
			status: 1
		}
	];

  	constructor() { }

  	getAllProducts(){
  		return this.products;
  	}

  	getProductById(id: number){
  		let i;
  		for ( i = 0; i < this.products.length; i++)
  		{  		
			 //return (this.products[i].id == id) ? this.products[i] : null; if - else  ternary operator này ko xài đc ở đây vì nếu this.products[i].id !== id, null sẽ đc return ngay và vòng lặp sẽ kết thúc mà ko  đi tới element cuối cùng của vòng lặp

			if(this.products[i].id == id){
				return  this.products[i];
				//console.log(this.products[i])
			}

  		} 

  	// 	 this.products.forEach(
   //        element => {//console.log(element);
   //        	if(element.id == id){console.log(element);
			// 	return  element;
			// 	console.log(element);
			// }
   //        }); cái này ko xài đc vì forEach() sẽ ko thoát khỏi vòng lặp, mặc dù bên trong có return (ref:https://medium.com/@virtual_khan/javascript-foreach-a-return-will-not-exit-the-calling-function-cfbc6fa7b199).

   	}
}
