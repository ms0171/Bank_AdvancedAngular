import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  template: `
    <div class="createEmployee">
      <h2>New Employee?</h2><br><br>
      <h6>Enter Employee Id: </h6>
      <input type = "number" id = "employeeId" class = "form-control;col-lg-2">
      <h6>Enter Name: </h6>
      <input type = "text" id = "name">
      <h6>Enter Password: </h6>
      <input type = "password" id = "password" class = "form-control;col-lg-2">
      <h6>Enter Age: </h6>
      <input type = "number" id = "age">
      <h6>Enter Designation: </h6>
      <input type = "text" id = "designation">
      <br><br><br>
      <input type  = "button" value = "Enter Details" (click)="createEmployee()" class = "btn btn-primary"><br><br>
      <input type  = "button" value = "Back" (click)="back()" class = "btn btn-success">
      <p *ngIf = "doCreate">Employee Created</p>
    </div>
  `,
  styles: [`
  h2{
    text-align : center;
    color:red
  }
  h6{
    color : black
  }
  p{
    color : dark-grey 
  }
  `]
})
export class CreateEmployeeComponent implements OnInit {

  doCreate = false;
  employee = []

  constructor(private employeeService : EmployeeService,private router : Router) { }

  createEmployee(){
    let employeeId:number=parseInt((document.getElementById("employeeId") as HTMLInputElement).value);
    let name:string=(document.getElementById("name") as HTMLInputElement).value;
    let password:string=(document.getElementById("password") as HTMLInputElement).value;
    let age:number=parseInt((document.getElementById("age") as HTMLInputElement).value);
    let designation:string=(document.getElementById("designation") as HTMLInputElement).value;
    for(let emp of this.employee){
      if(employeeId===emp.employeeId){
        this.doCreate = false;
        return 0;
      }
    }
    let data = {"employeeId":employeeId,"name":name,"password":password,"age":age,"designation":designation};
    this.employeeService.postEmployee(data).subscribe();
    this.doCreate = true;

  }

  back(){
    this.router.navigate(["/"]);
  }


  ngOnInit() {
    this.employeeService.getEmployee().subscribe(data => this.employee = data);
  }

}
