import { RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { DepositComponent } from "./transaction/deposit/deposit.component";
import { WithdrawComponent } from "src/app/transaction/withdraw/withdraw.component";
import { TransferComponent } from "./transaction/transfer/transfer.component";
import { PageNotFoundComponent, CustomerComponent } from "./customer/customer.component";
import {CreateCustomerComponent} from "./create-customer/create-customer.component"
import { ShowCustomerComponent } from "./show-customer/show-customer.component";
import { SearchCustomerComponent } from "./search-customer/search-customer.component";
import { UpdateCustomerComponent } from "./update-customer/update-customer.component";
import { DeleteCustomerComponent } from "./delete-customer/delete-customer.component";
import { AppComponent } from "src/app/app.component";
import { MainPageComponent } from "src/app/main-page/main-page.component";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";
import { EmployeeComponent } from "src/app/employee/employee.component";
import { ManagerComponent } from "src/app/manager/manager.component";
import { SearchEmployeeComponent } from "src/app/search-employee/search-employee.component";
import { ShowEmployeeComponent } from "src/app/show-employee/show-employee.component";
import { UpdateEmployeeComponent } from "src/app/update-employee/update-employee.component";
import { DeleteEmployeeComponent } from "src/app/delete-employee/delete-employee.component";
import { CustomerDetailComponent } from "src/app/customer-detail/customer-detail.component";
import { EmployeeDetailComponent } from "src/app/employee-detail/employee-detail.component";

const routes : Routes = [
    {path : "",redirectTo : "/mainpage",pathMatch:"full"},
    {
        path : "customer/:accountNumber",
        component : CustomerComponent
    },
    {
        path : "employee/:employeeId",
        component : EmployeeComponent
    },
    {
        path : "manager/:managerId",
        component : ManagerComponent
    },
    {
        path : "createcustomer",
        component : CreateCustomerComponent
    },
    {
        path : "createemployee",
        component : CreateEmployeeComponent
    },
    {
        path : "mainpage",
        component : MainPageComponent
    },
    {
        path : "updatecustomer/:accountNumber",
        component : UpdateCustomerComponent
    },
    {
        path : "updateemployee/:employeeId",
        component : UpdateEmployeeComponent
    },
    {
        path : "deletecustomer/:accountNumber",
        component : DeleteCustomerComponent
    },
    {
        path : "deleteemployee/:employeeId",
        component : DeleteEmployeeComponent
    },
    {
        path : "searchcustomer",
        component : SearchCustomerComponent
    },
    {
        path : "searchemployee",
        component : SearchEmployeeComponent
    },
    {
        path : "showcustomer",
        component : ShowCustomerComponent
    },
    {
        path : "showemployee",
        component : ShowEmployeeComponent
    },
    {path : "deposit/:accountNumber",
     component : DepositComponent,
    },
    {path : "withdraw/:accountNumber",
     component : WithdrawComponent,
    },
    {path : "transfer/:accountNumber",
     component : TransferComponent,
    },
    {
        path : "customerdetail/:accountNumber",
        component : CustomerDetailComponent
    },
    {
        path : "employeedetail/:employeeId",
        component : EmployeeDetailComponent
    },
    {path : "**",
    component:PageNotFoundComponent
    }
]

@NgModule({
    imports :[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule{}

export const routecomponents = 
[
    CustomerComponent,
    EmployeeComponent,    
    ManagerComponent,
    CreateCustomerComponent,
    CreateEmployeeComponent,
    MainPageComponent,
    UpdateCustomerComponent,
    UpdateEmployeeComponent,
    DeleteCustomerComponent,
    DeleteEmployeeComponent,
    SearchCustomerComponent,
    SearchEmployeeComponent,
    ShowCustomerComponent,
    ShowEmployeeComponent,
    WithdrawComponent,
    TransferComponent,
    DepositComponent,    
    CustomerDetailComponent,
    EmployeeDetailComponent,
    PageNotFoundComponent
]