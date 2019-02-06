import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { ManagerComponent } from './manager/manager.component';

const routes: Routes = [
  { path: 'manager', component: ManagerComponent},
  { path: 'employee', component: EmployeeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
