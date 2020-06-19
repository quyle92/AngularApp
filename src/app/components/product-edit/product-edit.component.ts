import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Products} from '../../models/products.class';
import {ProductsService} from '../../services/products.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

	public product: Products;
	public subscription: Subscription;

  constructor(public route: ActivatedRoute, public productsService: ProductsService) { }

  ngOnInit(): void {
  	this.handleParams();
  }

  handleParams(){
  	this.route.params.subscribe((params) =>{//params là cái nằm sau số : đã specified ở route array
  		let id = params.id; //.id là vì path:'product-parent/:id' specified ở route array
  		this.product = this. productsService.getProductById(id);
  		console.log(this.product);
  	});
  }

}
