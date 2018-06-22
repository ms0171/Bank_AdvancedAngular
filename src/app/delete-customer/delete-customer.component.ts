import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-customer',
  template:`
    <h1>Delete</h1>
    <h3>Delete Account : {{ id }}</h3><br><br><br>
    <button (click) = "delete()" class = "btn btn-danger">Delete Customer</button>
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
export class DeleteCustomerComponent implements OnInit {

  customer = []
  doDelete = false;
  id = parseInt(this.route.snapshot.paramMap.get('accountNumber'));

  constructor(private route:ActivatedRoute,private customerService : CustomerService,private router : Router) { }

  ngOnInit() {
  }

  delete(){
    this.doDelete = true;
    this.customerService.deleteCustomer(this.id).toPromise();
    this.router.navigate(["/"]);
  }

}
