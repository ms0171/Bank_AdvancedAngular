import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  template: `
    <h1>Update</h1><br><br>
    <h6>Name: </h6>
    <input type = "text" name = "updateName" id = "updateName">
    <h6>Age: </h6>
    <input type = "number" name = "updateAge" id = "updateAge"><br><br>
    <button (click) = "update()" class = "btn btn-primary">Update Data</button><br><br>
    <button (click) = "back()" class = "btn btn-success">Back</button>
    <p *ngIf = "doUpdate">Data Updated</p>
    <br><br>
  `,
  styles: [`
    h1{
      text-align : center;
      color : red
    }
  `]
})
export class UpdateEmployeeComponent implements OnInit {

  employee = [];
  doUpdate = false;

  constructor(private EmployeeService : EmployeeService,private route:ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.EmployeeService.getEmployee().subscribe(data => this.employee = data)
  }

  update(){
    let employeeId  = parseInt(this.route.snapshot.paramMap.get("employeeId"));
    let name:string=(document.getElementById("updateName") as HTMLInputElement).value;
    let age:number=parseInt((document.getElementById("updateAge") as HTMLInputElement).value);
    for(let emp of this.employee){
      if(employeeId===emp.employeeId){
        let data = {"employeeId":employeeId,"name":name,"age":age,"designation":emp.designation};
        this.EmployeeService.putEmployee(data,employeeId).subscribe()
        this.doUpdate = true;
      }
    }
  }

  back(){
    this.router.navigate(["/showCustomer"]);
  }

}
