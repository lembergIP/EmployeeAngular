import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { EmployeeComponent } from './components/employee/employee/employee.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {EmployeeService} from './service/employee/employee.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EmployeeEditComponent } from './components/employee/employee-edit/employee-edit.component';
import { EmployeeCreateComponent } from './components/employee/employee-create/employee-create.component';
import { EmployeeSearchComponent } from './components/employee/employee-search/employee-search.component';
import {EmployeeDeleteComponent} from './components/employee/employee-delete/employee-delete.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    PaginationComponent,
    EmployeeComponent,
    EmployeeEditComponent,
    EmployeeCreateComponent,
    EmployeeSearchComponent,
    EmployeeDeleteComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
