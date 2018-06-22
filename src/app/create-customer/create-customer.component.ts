import { Component, OnInit } from '@angular/core';
import { CustomerComponent } from 'src/app/customer/customer.component';
import { CustomerService } from 'src/app/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  template: ` 
    <div class="createAccount">
      <h2>New Customer?</h2><br><br>
      <h6>Enter Account Number: </h6>
      <input type = "number" id = "accountNumber" class = "form-control;col-lg-2">
      <h6>Enter Name: </h6>
      <input type = "text" id = "name">
      <h6>Enter Password: </h6>
      <input type = "password" id = "password" class = "form-control;col-lg-2">
      <h6>Enter Age: </h6>
      <input type = "number" id = "age">
      <h6>Enter Amount: </h6>
      <input type = "number" id = "amount">
      <h6>Enter Bank Name: </h6>
      <input type = "text" id = "bankName">
      <br><br><br>
      <input type  = "button" value = "Enter Details" (click)="createCustomer()" class = "btn btn-primary"><br><br>
      <input type  = "button" value = "Back" (click)="back()" class = "btn btn-success">
      <p *ngIf = "doCreate">Account Created</p>
    </div>
  `
  ,
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
export class CreateCustomerComponent implements OnInit {

  customer = [];
  doCreate = false;

  constructor(private customerService:CustomerService,private router : Router) {}

  createCustomer(){
            let accountNumber:number=parseInt((document.getElementById("accountNumber") as HTMLInputElement).value);
            let name:string=(document.getElementById("name") as HTMLInputElement).value;
            let password:string=(document.getElementById("password") as HTMLInputElement).value;
            let age:number=parseInt((document.getElementById("age") as HTMLInputElement).value);
            let amount:string=(document.getElementById("amount") as HTMLInputElement).value;
            let bankName:string = (document.getElementById("bankName") as HTMLInputElement).value
            for(let cust of this.customer){
              if(accountNumber===cust.accountNumber){
                this.doCreate = false;
                return 0;
              }
            }
            let data = {"accountNumber":accountNumber,"name":name,"password":password,"age":age,"amount":amount,"bankName":bankName};
            this.customerService.postCustomer(data).subscribe();
            this.doCreate = true;

  }

  back(){
    this.router.navigate(["/"]);
  }


  ngOnInit() {
    this.customerService.getCustomer().subscribe(data => this.customer = data);
  }

}
