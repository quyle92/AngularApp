import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';//CommonModule để dùng ngif, ngFor. CommonModule là 1 phần của BrowserModule
import {RouterModule, Routes} from '@angular/router';
//import { FormsModule} from '@angular/forms';
import {SharedModule } from './../shared/shared.module';// đây là shared module

/** Components */
import { ProductsParentComponent } from './components/products-parent/products-parent.component';
import { ProductsListParentComponent } from './components/products-list-parent/products-list-parent.component';
import { ProductsDetailsParentComponent } from './components/products-details-parent/products-details-parent.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
/**End Components */

/*service*/
import {ProductsService} from './services/products.service';
import {AuthGuard} from './services/auth.guard';
/*end service*/

/** Route array */
import {productRoutes} from './product-management.routes';


@NgModule({
  declarations: [
  	ProductsParentComponent,
    ProductsListParentComponent,
    ProductsDetailsParentComponent,
    ProductEditComponent,
  ],
  imports: [
    //CommonModule,
   // FormsModule,
    SharedModule,// import 
    //NgModule, ko đc để ngModule ở đây vì đã declare @NgModule ở trên rồi
    RouterModule.forChild(productRoutes)
  ],
   providers: [ProductsService, AuthGuard, ],
})
export class ProductManagementModule { }
