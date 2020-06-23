import { RouterModule, Routes} from '@angular/router';
import { ProductsParentComponent } from './components/products-parent/products-parent.component';
import { ProductsListParentComponent } from './components/products-list-parent/products-list-parent.component';
import { ProductsDetailsParentComponent } from './components/products-details-parent/products-details-parent.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import {AuthGuard} from './services/auth.guard';


export const productRoutes : Routes = [

        {
          path:'products-parent',
          component: ProductsListParentComponent,
          canActivate: [AuthGuard],
          children: [
            {
              path:'',
              redirectTo:'/products-parent/list',
              pathMatch: 'full'
            },          
            {
              path:'list',  
              component: ProductsListParentComponent
            },
          ]
        },
        {
          path:'product-parent/:id',
         // component: ProductsParentComponent,
          children: [
            {
              path:'',
              component: ProductsDetailsParentComponent
            },
            {
              path:'edit',
              component: ProductEditComponent
            }
          ]
        },
      


];