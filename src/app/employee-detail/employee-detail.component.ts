import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  template: `
  <button (click) = "detail()" class = "btn btn-success">Click Here</button><br><br>
  <div *ngIf = "getDetail">
  <h4>Name: </h4>{{data.name}}
  <h4>Employee Id: </h4>{{data.employeeId}}
  <h4>Age: </h4>{{data.age}}
  <h4>Designation: </h4>{{data.designation}}
  </div>
  `,
  styles: [`
  h4{
    color : MediumBlue
  }
  `]
})
export class EmployeeDetailComponent implements OnInit {

  employee = [];
  data = []
  getDetail = false;

  constructor(private employeeService : EmployeeService,private route : ActivatedRoute) { }

  ngOnInit() {
    this.employeeService.getEmployee().subscribe(dat => this.employee = dat)
  }

  detail(){
    this.getDetail = true
    let id =parseInt(this.route.snapshot.paramMap.get("employeeId"));
    for(let emp of this.employee){
      if(id===emp.employeeId){
        this.data = emp;
      }
    }
  }

}
