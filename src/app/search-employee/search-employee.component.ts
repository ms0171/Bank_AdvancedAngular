import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-employee',
  template: `
    <h1>Search Employee</h1><br><br>
    <h6>Enter Employee Id you want to Search:</h6>
    <input type = "number" id = "employeeId"><br><br>
    <button (click) = "search()" class = "btn btn-primary">Search Employee</button><br><br>
    <button (click) = "back()" class = "btn btn-success">Back</button><br><br><br>
    <div *ngIf = "doSearch">
      <h4>Name: </h4>{{searchEmployee.name}}
      <h4>Employee Id: </h4>{{searchEmployee.employeeId}}
      <h4>Age: </h4>{{searchEmployee.age}}
      <h4>Designation: </h4>{{searchEmployee.designation}}<br><br>
      <button (click) = "update()" class = "btn btn-primary">Update</button><br><br>
      <button (click) = "delete()" class = "btn btn-danger">Delete</button><br><br>
    </div>
  `,
  styles: [`
    h1{
      color : red;
      text-align : center
    }
    h4{
      color : MediumBlue
    }
  `]
})
export class SearchEmployeeComponent implements OnInit {

  employee = [];
  doSearch = false;
  searchEmployee = [];

  constructor(private employeeService : EmployeeService,private router : Router) { }

  ngOnInit() {
    this.employeeService.getEmployee().subscribe(data => this.employee = data)
  }

  search(){
    let employeeId = parseInt((document.getElementById("employeeId") as HTMLInputElement).value);
    for(let emp of this.employee){
      if(employeeId===emp.employeeId){
        this.doSearch = true;
        this.searchEmployee = emp;
      }
    }
  }

  update(){
    let employeeId = parseInt((document.getElementById("employeeId") as HTMLInputElement).value);
    this.router.navigate(["/updateemployee",employeeId]);
  }

  delete(){
      let employeeId = parseInt((document.getElementById("employeeId") as HTMLInputElement).value);
      this.router.navigate(["/deleteemployee",employeeId]);
  }

  back(){
    this.router.navigate(["/"]);
  }

}
