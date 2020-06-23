import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Products} from '../../models/products.class';
import {ProductsService} from '../../services/products.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-products-details-parent',
  templateUrl: './products-details-parent.component.html',
  styleUrls: ['./products-details-parent.component.css']
})
export class ProductsDetailsParentComponent implements OnInit {

	public products: Products[]=[];
	public subscription: Subscription;
  constructor( 
  	public activatedRoute: ActivatedRoute,
  	public productsService: ProductsService,
    public router:Router

  	 ) { }

  ngOnInit() : void {
		//this.handleParamsRouteBySnapShot();
    	this.handleParams();
     // console.log( this.activatedRoute);
     // console.log( this.activatedRoute.parent);
  }

  ngOnDestroy() :void {
  		if (this.subscription)
  			this.subscription.unsubscribe();
  }

  handleParams(){
          let id;
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

  onBackToList(){
      //cách 1(bài 37): this.router.navigate(['/products-parent/list']);

      // cách 2 (bài 37_: this.router.navigate(['list'],{ relativeTo: this.activatedRoute.parent });
      // cách này nghĩa là: http://localhost:4200/products-parent + /list
      this.router.navigate(['/products-parent/list']);
  }

  onEdit(id):void{
       // bài 37: this.router.navigate(['edit',id],{ relativeTo: this.activatedRoute.parent });
        this.router.navigate(['edit'],{ relativeTo: this.activatedRoute.parent });
  }

  onDelete(id){

  }

}
	