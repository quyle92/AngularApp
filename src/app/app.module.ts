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
import { MovieService} from './services/movie.service';



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
    MovieAddEditComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoggingService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
