import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-employee',
  template: `
    <h1>Delete</h1>
    <h3>Delete Employee : {{ id }}</h3><br><br><br>
    <button (click) = "delete()" class = "btn btn-danger">Delete Employee</button>
    <p *ngIf = "doDelete">Customer Deleted</p>
  `,
  styles: [`
    h1{
      text-align : center;
      color:red
    }
    h3{
      color : SeaGreen
    }
  `]
})
export class DeleteEmployeeComponent implements OnInit {

  employee = []
  doDelete = false;
  id = parseInt(this.route.snapshot.paramMap.get('employeeId'));

  constructor(private route:ActivatedRoute,private employeeService : EmployeeService,private router : Router) { }

  ngOnInit() {
  }

  delete(){
    this.doDelete = true;
    this.employeeService.deleteEmployee(this.id).toPromise();
    this.router.navigate(["/"]);
  }

}
