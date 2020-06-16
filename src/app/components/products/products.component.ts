import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Products} from '../../models/products.class';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
	products : Products[];
  constructor(private _productsService: ProductsService) { }

  ngOnInit(): void {
  	this.products = this._productsService.getAllProducts();
  }

}
