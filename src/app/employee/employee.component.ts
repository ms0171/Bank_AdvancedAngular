import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee',
  template: `
    <h3>Welcome {{ showname() | uppercase}}</h3>
    <button (click) = "show()" class = "btn btn-info">Show All Customers</button> 
    <button (click) = "create()" class = "btn btn-info">Create Customer</button>
    <button (click) = "search()" class = "btn btn-info">Search Customer</button>
    <button (click) = "showDetail()" class = "btn btn-info">Details</button>
  `,
  styles: [`
  h3{
    color : red;
    text-align : center
  }
  button{
    margin-left : 80px
  }
  `]
})
export class EmployeeComponent implements OnInit {

  employeeId = parseInt(this.route.snapshot.paramMap.get("employeeId"));
  employee = []

  constructor(private router : Router,private route : ActivatedRoute,private employeeService : EmployeeService) { }

  show(){
    this.router.navigate(["/showcustomer"]);
  }

  create(){
    this.router.navigate(["/createcustomer"]);
  }

  search(){
    this.router.navigate(["/searchcustomer"]);
  }

  showDetail(){
    this.router.navigate(["/employeedetail",this.employeeId]);
  }

  ngOnInit() {
    this.employeeService.getEmployee().subscribe(data => this.employee = data)
  }

  showname() : string{
    for(let emp of this.employee){
      if(this.employeeId===emp.employeeId){
        return emp.name
      }
    }
  }

}
