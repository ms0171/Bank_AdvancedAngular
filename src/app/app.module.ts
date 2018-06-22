import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule,routecomponents } from "./app-routing.module";
import { AppComponent } from './app.component';
import { TransactionComponent } from './transaction/transaction.component';
import { RouterModule } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { ManagerService } from 'src/app/manager.service';
import { NgxPaginationModule } from "ngx-pagination";
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component'; 


@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    routecomponents,
    CustomerDetailComponent,
    EmployeeDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRouterModule,
    NgxPaginationModule
  ],
  providers: [CustomerService,EmployeeService,ManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
