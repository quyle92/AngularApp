import { Component, OnInit , OnDestroy} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Products} from '../../models/products.class';
import {ActivatedRoute} from '@angular/router';//để lấy param xuống
import {Subscription} from 'rxjs';
import { Router} from '@angular/router';//để truyền param lên
@Component({
  selector: 'app-products-parent',
  templateUrl: './products-parent.component.html',
  styleUrls: ['./products-parent.component.css']
})

export class ProductsParentComponent implements OnInit {

	public name: string;
	public price: number;
	public products : Products[];
	public subscription: Subscription;

  constructor(
  	private _productsService: ProductsService, 
  	public activatedRoute: ActivatedRoute, 
  	public routerService : Router) { }

  ngOnDestroy(){
  	if(this.subscription)
  		this.subscription.unsubscribe();
  }

  ngOnInit(): void {
  	this.products = this._productsService.getAllProducts();

  	this.subscription = this.activatedRoute.queryParams.subscribe(params => {
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
