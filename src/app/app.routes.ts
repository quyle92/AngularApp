import { Routes} from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsParentComponent } from './components/products-parent/products-parent.component';
import { ProductsListParentComponent } from './components/products-list-parent/products-list-parent.component';
import { ProductsDetailsParentComponent } from './components/products-details-parent/products-details-parent.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import {AuthGuard} from './services/auth.guard';
import {AccessGuard} from './services/access.guard';

export const appRoutes : Routes = [
        {
          path:'',
          redirectTo:'/index',
          pathMatch: 'full'
        },
        {
          path:'index',
          component: HomeComponent,
          canDeactivate: [AccessGuard],
        },
        {
          path: 'about',
          component: AboutComponent
        },
        {
          path: 'products',
          component: ProductsComponent
        },
        {
          path: 'products/:id',
          component: ProductDetailComponent
        },
        // bài 37:{
        //   path:'products-parent',
        //  // component: ProductsParentComponent,
        //   children: [
        //     {
        //       path:'',
        //       redirectTo:'/products-parent/list',
        //       pathMatch: 'full'
        //     },          
        //     {
        //       path:'list',  
        //       component: ProductsListParentComponent
        //     },
        //     {
        //       path:':id',
        //       component: ProductsDetailsParentComponent
        //     },
        //     {
        //       path:'edit/:id',
        //       component: ProductEditComponent
        //     }
        //   ]
        // },
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
        {
          path:'contact',
          component: ContactComponent
        },
        {
          path:'login',
          component: LoginComponent
        },
        {
          path:'logout',
          component: LogoutComponent
        },        
        {
          path:'**',
          component:NotFoundComponent
        },

];