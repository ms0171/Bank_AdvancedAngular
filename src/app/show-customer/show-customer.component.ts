import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { CustomerComponent } from 'src/app/customer/customer.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-customer',
  template: `
    <html>
    <h1>Customer List</h1><br><br>
    <button (click) = "back()" class = "btn btn-success">Back</button><br><br><br>
      <table align = "center" border = "1px solid black" class="table table-striped">
        <tr>
          <th>Name</th>
          <th>Account Number</th>
          <th>Age</th>
          <th>Amount</th>
          <th>Bank Name</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
        <tr *ngFor = "let cust of customer | paginate : {itemsPerPage : 5,currentPage : p}">
          <td>{{ cust.name }}</td>
          <td>{{ cust.accountNumber }}</td>
          <td>{{ cust.age }}</td>
          <td>{{ cust.amount | currency : 'INR' }}</td>
          <td>{{ cust.bankName }}</td>
          <td><button (click) = "update(cust)" class = "btn btn-success">Update</button></td>
          <td><button (click) = "delete(cust)" class = "btn btn-danger">Delete</button></td>
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
export class ShowCustomerComponent implements OnInit {

  customer =  [];
  p:number = 1;

  constructor(private customerService : CustomerService,private router : Router) { }

  ngOnInit() {
    this.customerService.getCustomer().subscribe(data => this.customer = data);
  }

  update(customer){
    this.router.navigate(["/updatecustomer",customer.accountNumber ]);
  }

  delete(customer){
    this.router.navigate(["/deletecustomer",customer.accountNumber]);
  }

  back(){
    this.router.navigate(["/"]);
  }

}
