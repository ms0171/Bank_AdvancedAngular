import { Component } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { CustomerService } from "src/app/customer.service";
import { Router } from "@angular/router";
import { parse } from "querystring";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector : "app-transfer",
    template : `
        <h1>Transfer To Other Account</h1>
        <h6>Enter Account Number to which you want to Transfer:</h6>
        <input type = "number" id = "accNum2" class="form-control;col-lg-2">
        <h6>Enter Amount You Want to Transfer:</h6>
        <input type = "number" id = "transferAmount" class="form-control;col-lg-2"><br><br>
        <button (click) = "transfer()" class="btn btn-primary">Transfer Amount</button><br><br>
        <p *ngIf = "doTransfer">Amount Transferred</p>
        <button (click) = "back()" class="btn btn-success">Back</button>
    `,
    styles : [`
        h1{
            text-align : center;
            color : red
        }
        h6{
            color : black
        }
    `]
})

export class TransferComponent implements OnInit{

    customer = []
    doTransfer = false;

    constructor(private customerService : CustomerService,private router : Router,private route : ActivatedRoute){}

    ngOnInit(){
        this.customerService.getCustomer().subscribe(data => this.customer = data)
    }

    transfer(){
        let acc1 = parseInt(this.route.snapshot.paramMap.get("accountNumber"));
        let acc2 = parseInt((document.getElementById("accNum2") as HTMLInputElement).value);
        let transferAmount = parseInt((document.getElementById("transferAmount") as HTMLInputElement).value);
        for(let cust1 of this.customer){
            if(acc1===cust1.accountNumber){
             for(let cust2 of this.customer){
                 if(acc2===cust2.accountNumber){
                    cust2.amount = parseInt(cust2.amount)+transferAmount;
                     cust1.amount = parseInt(cust1.amount)-transferAmount;
                     console.log(cust2.amount);
                     let data1 = {"accountNumber":cust1.accountNumber,"name":cust1.name,"age":cust1.age,"amount" : cust1.amount,"bankName" : cust1.bankName};
                     let data2 = {"accountNumber":cust2.accountNumber,"name":cust2.name,"age":cust2.age,"amount" : cust2.amount,"bankName" : cust2.bankName};
                     this.customerService.putCustomer(data1,cust1.accountNumber).subscribe();
                     this.customerService.putCustomer(data2,cust2.accountNumber).subscribe()
                     this.doTransfer = true;
                 }
             }
            }
        }
     }

     back(){
         this.router.navigate(["/"]);
     }
}