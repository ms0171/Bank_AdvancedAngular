import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Router } from '@angular/router';
//import { NgxPaginationModule } from "ngx-pagination";

@Component({
  selector: 'app-show-employee',
  template: `
  <html>
  <h1>Employee List</h1><br><br>
  <button (click) = "back()" class = "btn btn-success">Back</button><br><br><br>
    <table align = "center" border = "1px solid black" class="table table-striped">
      <tr>
        <th>Name</th>
        <th>Employee Id</th>
        <th>Age</th>
        <th>Designation</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
      <tr *ngFor = "let emp of employee | paginate : {itemsPerPage : 5,currentPage : p}">
        <td>{{ emp.name }}</td>
        <td>{{ emp.employeeId }}</td>
        <td>{{ emp.age }}</td>
        <td>{{ emp.designation }}</td>
        <td><button (click) = "update(emp)" class = "btn btn-success">Update</button></td>
        <td><button (click) = "delete(emp)" class = "btn btn-danger">Delete</button></td>
      </tr>
    </table>
    <pagination-controls (pageChange)="p = $event"></pagination-controls>
  </html>
  `,
  styles: [`
    h1{
      text-align:center;
      color : red
    }
    table{
      text-align : center
    }
    th{
      color : black 
    }
  `]
})
export class ShowEmployeeComponent implements OnInit {

  employee =  [];
  p: number = 1;

  constructor(private employeeService : EmployeeService,private router : Router) { }

  ngOnInit() {
    this.employeeService.getEmployee().subscribe(data => this.employee = data);
  }

  update(employee){
    this.router.navigate(["/updateemployee",employee.employeeId]);
  }

  delete(employee){
    this.router.navigate(["/deleteemployee",employee.employeeId]);
  }

  back(){
    this.router.navigate(["/"]);
  }

}
