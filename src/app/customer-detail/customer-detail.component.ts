import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  template: `
  <button (click) = "detail()" class = "btn btn-success">Click Here</button><br><br>
  <div *ngIf = "getDetail">
  <h4>Name: </h4>{{data.name}}
  <h4>AccountNumber: </h4>{{data.accountNumber}}
  <h4>Age: </h4>{{data.age}}
  <h4>Amount: </h4>{{data.amount | currency : 'INR'}}
  <h4>Bank Name: </h4>{{data.bankName}}<br><br><br>
  </div>
  `,
  styles: [`  
  h4{
    color : MediumBlue
  }
  `]
})
export class CustomerDetailComponent implements OnInit {
  
  customer = [];
  data = []
  getDetail = false;


  constructor(private customerService : CustomerService,private route : ActivatedRoute) { }

  ngOnInit() {
    this.customerService.getCustomer().subscribe(dat => this.customer = dat)
  }

  detail(){
    this.getDetail = true
    let accNum =parseInt(this.route.snapshot.paramMap.get("accountNumber"));
    for(let cust of this.customer){
      if(accNum===cust.accountNumber){
        this.data = cust;
      }
    }
  }

}
