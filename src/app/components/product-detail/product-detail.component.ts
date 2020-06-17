import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Products} from '../../models/products.class';
import {ProductsService} from '../../services/products.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

	public products: Products[]=[];
	public subscription: Subscription;
  constructor( 
  	public activatedRoute: ActivatedRoute,
  	public productsService: ProductsService

  	 ) { }

  ngOnInit() : void {
		//this.handleParamsRouteBySnapShot();
    	this.handleParams();
  }

  ngOnDestroy() :void {
  		if (this.subscription)
  			this.subscription.unsubscribe();
  }

  handleParams(){let id;
  	     	this.subscription = this.activatedRoute.params.subscribe(params => {
      		 	id = params.id;
      		 	let sp = this.productsService.getProductById(id);//phải để trong này mới chạy
  				this.products.push(sp);
  			});

  	     	
  }

  handleParamsRouteBySnapShot(){
  		let id = (+this.activatedRoute.snapshot.params.id);
  		let sp = this.productsService.getProductById(id);
    	this.products.push(sp);
  }

}
