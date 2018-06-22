import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
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
export class UpdateCustomerComponent implements OnInit {

  customer = [];
  doUpdate = false;

  constructor(private customerService : CustomerService,private route:ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.customerService.getCustomer().subscribe(data => this.customer = data)
  }

  update(){
    let accNum  = parseInt(this.route.snapshot.paramMap.get("accountNumber"));
    let name:string=(document.getElementById("updateName") as HTMLInputElement).value;
    let age:number=parseInt((document.getElementById("updateAge") as HTMLInputElement).value);
    for(let cust of this.customer){
      if(accNum===cust.accountNumber){
        let data = {"accountNumber":accNum,"name":name,"age":age,"amount":cust.amount,"bankName":cust.bankName};
        this.customerService.putCustomer(data,accNum).subscribe()
        this.doUpdate = true;
      }
    }
  }

  back(){
    this.router.navigate(["/showCustomer"]);
  }

}
