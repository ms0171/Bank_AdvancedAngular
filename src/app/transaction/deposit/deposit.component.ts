import { Component } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { CustomerService } from "src/app/customer.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector : "app-deposit",
    template : `
        <h1>Deposit</h1><br><br>
        <h6>Enter Amount You Want to Deposit:</h6>
        <input type = "number" id = "depAmount"><br><br>
        <button (click) = deposit() class = "btn btn-primary">Deposit Amount</button><br><br>
        <button (click) = back() class = "btn btn-success">Back</button>
        <p *ngIf = "doDeposit">Amount Deposited</p>
    `,
    styles : [`
        h1{
            text-align : center;
            color : red
        }
    `]
})

export class DepositComponent implements OnInit{

    doDeposit = false;
    customer = []
    
    constructor(private route : ActivatedRoute,private customerService : CustomerService,private router : Router) {}


    ngOnInit(){
        this.customerService.getCustomer().subscribe(data => this.customer = data)
    }

    deposit(){
        let depAmount = parseInt((document.getElementById("depAmount") as HTMLInputElement).value);
        let accNum = parseInt(this.route.snapshot.paramMap.get("accountNumber"));
        for(let cust of this.customer){
            if(cust.accountNumber===accNum){
                cust.amount = parseInt(cust.amount)+depAmount;
                let data = {"accountNumber":cust.accountNumber,"name":cust.name,"age":cust.age,"amount" : cust.amount,"bankName" : cust.bankName};
                this.doDeposit = true;
                this.customerService.putCustomer(data,cust.accountNumber).subscribe()
            }
        }
    }

    back(){
        this.router.navigate(["/"]);
    }

}