import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Products} from '../../models/products.class';
import {ProductsService} from '../../services/products.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

	public products: Products[]=[];
  constructor( 
  	public activatedRoute: ActivatedRoute,
  	public productsService: ProductsService
  	 ) { }

  ngOnInit() : void {
    	let id = (+this.activatedRoute.snapshot.params.id);
    	let sp = this.productsService.getProductById(id);
    	console.log(sp);
    	this.products.push(sp);
  }

}
