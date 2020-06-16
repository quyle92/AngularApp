import { Routes} from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


export const appRoutes : Routes = [
        {
          path:'',
          redirectTo:'/index',
          pathMatch: 'full'
        },
        {
          path:'index',
          component: HomeComponent
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
        {
          path:'contact',
          component: ContactComponent
        },
        {
          path:'**',
          component:NotFoundComponent
        }
];