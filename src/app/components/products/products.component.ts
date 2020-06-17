import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Products} from '../../models/products.class';
import {ActivatedRoute} from '@angular/router';//để lấy param xuống
import {Subscription} from 'rxjs';
import { Router} from '@angular/router';//để truyền param lên
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

	public name: string;
	public price: number;
	products : Products[];

  constructor(
  	private _productsService: ProductsService, 
  	public activatedRoute: ActivatedRoute, 
  	public routerService : Router) { }

  ngOnInit(): void {
  	this.products = this._productsService.getAllProducts();

  	this.activatedRoute.queryParams.subscribe(params => {
  		if(params.name != null && params.name != ""|| params.price != null && params.price != "")
  		{
  			this.products = this._productsService.getAllProductsByParams(params.name, params.price);
  		} 
  		if(params.name == "" &&  params.price == "")
  			this.products = this._productsService.getAllProducts();

  	});
  }
  

  onSearch(){
  	this.routerService.navigate(['/products'], {queryParams: {name: this.name, price: this.price}});
  }

}
