import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { EmployeeService } from 'src/app/employee.service';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-main-page',
  template: `
    <html>
    <body>
      <h1>Welcome To The Bank</h1><br><br><br><br><br><br>
      <div class = "main" style = "display: block;width: 100%;padding: 0;margin: 0;">
      <div class = "customer" style="text-align: left;width:33%;float:left">
        <h4>Customer Login</h4><br><br>
          <h6>Enter Account Number: </h6>
          <input type = "number" id = "accountNumber" class = "form-control,col-lg-2"> 
          <h6>Enter Password: </h6>
          <input type = "password" id = "customerPassword" class = "form-control,col-lg-2"><br><br>
          <button (click) = "customer()" class = "btn btn-primary">Log In</button>
      </div>
      <div class = "employee" style="text-align: left;width:33%;float:right">
          <h4>Employee Login</h4><br><br>
            <h6>Enter Employee Id: </h6>
            <input type = "number" id = "employeeId" class = "form-control,col-lg-2"> 
            <h6>Enter Password: </h6>
          <input type = "password" id = "employeePassword" class = "form-control,col-lg-2"><br><br>
            <button (click) = "employee()" class = "btn btn-primary">Log In</button>
        </div>
        <div class = "manager" style="text-align: left;width:33%;float:right">
            <h4>Manager Login</h4><br><br>
              <h6>Enter Manager Id: </h6>
              <input type = "text" id = "managerId" class = "form-control,col-lg-2"> 
              <h6>Enter Password: </h6>
          <input type = "password" id = "managerPassword" class = "form-control,col-lg-2"><br><br>
              <button (click) = "manager()" class = "btn btn-primary">Log In</button>
          </div>
      </div>
      <router-outlet></router-outlet>
    </body>
  </html>
  `,
  styles: [`
    h1{
      color: black;
      text-align: center
  }

  h4{
      color: darkturquoise
  }

  h6{
      color:crimson
  }

  body{
      background-color: brown
  }

  `]
})
export class MainPageComponent implements OnInit {


  customers = [];
  employees = []
  managers = []
  constructor(private managerService : ManagerService,private router:Router,private customerService : CustomerService,private employeeService : EmployeeService){}

  customer(){
    let accountNumber = parseInt((document.getElementById("accountNumber") as HTMLInputElement).value);
    let customerPassword = (document.getElementById("customerPassword") as HTMLInputElement).value
    for(let cust of this.customers){
      if(accountNumber===cust.accountNumber&&customerPassword===cust.password){
        this.router.navigate(["/customer",accountNumber]);
      }
    }
  }

  employee(){
    let employeeId = parseInt((document.getElementById("employeeId") as HTMLInputElement).value);
    let employeePassword = (document.getElementById("employeePassword") as HTMLInputElement).value
    for(let employee of this.employees){
      if(employeeId===employee.employeeId&&employeePassword===employee.password){
        this.router.navigate(["/employee",employeeId]);
      }
    }
  }

  manager(){
    let managerId = parseInt((document.getElementById("managerId") as HTMLInputElement).value);
    let managerePassword = (document.getElementById("managerPassword") as HTMLInputElement).value
    for(let manager of this.managers){
      if(managerId===manager.managerId&&managerePassword===manager.password){
        this.router.navigate(["/manager",managerId]);
      }
    }
  }

  ngOnInit() {
    this.customerService.getCustomer().subscribe(data => this.customers = data)
    this.employeeService.getEmployee().subscribe(data => this.employees = data)
    this.managerService.getManager().subscribe(data => this.managers = data);
  }

}
