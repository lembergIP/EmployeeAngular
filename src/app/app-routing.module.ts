import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeeListComponent} from './components/employee/employee-list/employee-list.component';
import {EmployeeComponent} from './components/employee/employee/employee.component';
import {EmployeeEditComponent} from './components/employee/employee-edit/employee-edit.component';
import {EmployeeCreateComponent} from './components/employee/employee-create/employee-create.component';
import {EmployeeDeleteComponent} from './components/employee/employee-delete/employee-delete.component';
import {EmployeeSearchComponent} from './components/employee/employee-search/employee-search.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'employee', pathMatch: 'full'},
  {path: 'employee', component: EmployeeListComponent},
  {path: 'employee/:id', component: EmployeeComponent},
  {path: 'employee-edit/:id', component: EmployeeEditComponent},
  {path: 'employee-list', component: EmployeeListComponent},
  {path: 'employee-create', component: EmployeeCreateComponent},
  {path: 'employee-delete/:id', component: EmployeeDeleteComponent},
  {path: 'employee-search', component: EmployeeSearchComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
