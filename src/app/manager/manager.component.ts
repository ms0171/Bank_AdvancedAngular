import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  template: `
    <h3>Welcome {{showname() | uppercase}}</h3><br><br><br> 
    <button (click) = "show()" class = "btn btn-info">Show All Employees</button> 
    <button (click) = "create()" class = "btn btn-info">Create Employee</button>
    <button (click) = "search()" class = "btn btn-info">Search Employee</button>
  `,
  styles: [`
    button{
      margin-left : 80px
    }
    h3{
      color : red;
      text-align : center
    }
  `]
})
export class ManagerComponent implements OnInit {

  manager = []

  id = parseInt(this.route.snapshot.paramMap.get("managerId"));

  constructor(private router : Router,private managerService : ManagerService,private route : ActivatedRoute) { }

  create(){
    this.router.navigate(["/createemployee"]);
  }

  show(){
    this.router.navigate(["/showemployee"]);
  }

  search(){
    this.router.navigate(["/searchemployee"]);
  }

  showname() : string{
    for(let man of this.manager){
      if(this.id===man.managerId){
        return man.name;
      }
    }
  }

  ngOnInit() {
    this.managerService.getManager().subscribe(data => this.manager = data)
  }

}
