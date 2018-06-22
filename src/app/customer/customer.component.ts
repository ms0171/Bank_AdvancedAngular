import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ShowCustomerComponent } from 'src/app/show-customer/show-customer.component';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CustomerDetailComponent } from 'src/app/customer-detail/customer-detail.component';

@Component({
  selector: 'app-customer',
  template: `
    <h3>Welcome {{showname() | uppercase}}</h3><br><br><br><br>
    <button (click) = "deposit()" class = "btn btn-info">Deposit</button>
    <button (click) = "withdraw()" class = "btn btn-info">Withdraw</button>
    <button (click) = "transfer()" class = "btn btn-info">Transfer</button>
    <button (click) = "show()" class = "btn btn-info">Show Details</button>
    
  `,
  styles: [`
    h2{
      text-align : center;
      color : red
    }
    button{
      margin-left : 80px
    }
    h3{
      color : red;
      text-align : center
    }
  `]
})
export class CustomerComponent implements OnInit {

  customer = []
  data = []

  constructor(private route : ActivatedRoute,private router:Router,private customerService : CustomerService) { }

  id = parseInt(this.route.snapshot.paramMap.get("accountNumber"));

  ngOnInit() {
    this.customerService.getCustomer().subscribe(data => this.customer = data)
  }

  deposit(){
    this.router.navigate(["/deposit",this.id]);
  }

  withdraw(){
    this.router.navigate(["/withdraw",this.id]);
  }

  transfer(){
    this.router.navigate(["/transfer",this.id]);
  }

  show(){
    this.router.navigate(["/customerdetail",this.id]);
  }

  showname() : string{
    for(let cust of this.customer){
      if(this.id===cust.accountNumber){
        return cust.name;
      }
    }
  }


}

@Component({
  selector: 'page-not-found',
  template: `
    <h2>
      Page Not Found!!
    </h2>
  `,
  styles: []
})

export class PageNotFoundComponent{}
