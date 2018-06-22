import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-customer',
  template: `
    <h1>Search Customer</h1><br><br>
    <h6>Enter Account Number you want to Search:</h6>
    <input type = "number" id = "accNum"><br><br>
    <button (click) = "search()" class = "btn btn-primary">Search Customer</button><br><br>
    <button (click) = "back()" class = "btn btn-success">Back</button><br><br><br>
    <div *ngIf = "doSearch">
      <h4>Name: </h4>{{searchCustomer.name}}
      <h4>AccountNumber: </h4>{{searchCustomer.accountNumber}}
      <h4>Age: </h4>{{searchCustomer.age}}
      <h4>Amount: </h4>{{searchCustomer.amount | currency : 'INR'}}
      <h4>Bank Name: </h4>{{searchCustomer.bankName}}<br><br><br>
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
export class SearchCustomerComponent implements OnInit {

  customer = [];
  doSearch = false;
  searchCustomer = [];

  constructor(private customerService : CustomerService,private router : Router,private route : ActivatedRoute) { }

  ngOnInit() {
    this.customerService.getCustomer().subscribe(data => this.customer = data)
  }

  search(){
    let accountNumber = parseInt((document.getElementById("accNum") as HTMLInputElement).value);
    for(let cust of this.customer){
      if(accountNumber===cust.accountNumber){
        this.doSearch = true;
        this.searchCustomer = cust;
      }
    }
  }

  update(){
    let accountNumber = parseInt((document.getElementById("accNum") as HTMLInputElement).value);
    this.router.navigate(["/updatecustomer",accountNumber]);
  }

  delete(){
      let accountNumber = parseInt((document.getElementById("accNum") as HTMLInputElement).value);
      this.router.navigate(["/deletecustomer",accountNumber]);
  }

  back(){
    this.router.navigate(["/"]);
  }


}
