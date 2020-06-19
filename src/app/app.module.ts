import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentToViewComponent } from './components/component-to-view/component-to-view.component';
import { ViewToComponentComponent } from './components/view-to-component/view-to-component.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { FormsModule} from '@angular/forms';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute.component';
import { ChildComponent } from './components/child/child.component';
import { UserListComponent } from './components/user-list/user-list.component';
import {EmployeeTitlePipe } from './employeeTitle.pipe';
import { FormatDataPipe } from './pipes/format-data.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortNumberPipe } from './pipes/sort-number.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { LifecycleHookComponent } from './components/lifecycle-hook/lifecycle-hook.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import {LoggingService} from './services/logging.service';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieAddEditComponent } from './components/movie-add-edit/movie-add-edit.component';

/*serive*/
import { MovieService} from './services/movie.service';
import {ProductsService} from './services/products.service';
import {AuthGuard} from './services/auth.guard';
import {AccessGuard} from './services/access.guard'
/*End serive*/

/**
 * dùng cho Route
 */
import {RouterModule, Routes} from '@angular/router';
import {appRoutes} from './app.routes';
/*End dùng cho Route*/

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


@NgModule({
  declarations: [
    AppComponent,
    ComponentToViewComponent,
    ViewToComponentComponent,
    TwoWayBindingComponent,
    StructuralDirectiveComponent,
    AttributeDirectiveComponent,
    ChildComponent,
    UserListComponent,
    EmployeeTitlePipe,
    FormatDataPipe,
    FilterPipe,
    SortNumberPipe,
    CapitalizePipe,
    SortPipe,
    LifecycleHookComponent,
    FirstComponent,
    SecondComponent,
    MovieListComponent,
    MovieAddEditComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    NotFoundComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductsParentComponent,
    ProductsListParentComponent,
    ProductsDetailsParentComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    LoginComponent,
    LogoutComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoggingService, MovieService, ProductsService, AuthGuard, AccessGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
