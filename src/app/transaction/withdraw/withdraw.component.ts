import { Component } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { CustomerService } from "src/app/customer.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector : "app-withdraw",
    template : `
        <h1>WithDraw</h1>
        <h6>Enter Amount You Want to Withdraw:</h6>
        <input type = "number" id = "withdrawAmount"><br><br>
        <button (click) = "withdraw()" class = "btn btn-primary">Withdraw Amount</button><br><br>
        <button (click) = "back()"  class = "btn btn-success">Back</button><br><br>
        <p *ngIf = "doWithdraw;else nope">Amount Withdrawed</p>
    `,
    styles : [`
        h1{
            text-align : center;
            color:red
        }
    `]
})

export class WithdrawComponent implements OnInit{

    doWithdraw : boolean;
    customer = [];

    constructor(private customerService : CustomerService,private router : Router,private route : ActivatedRoute) {}

    ngOnInit(){
        this.customerService.getCustomer().subscribe(data => this.customer = data);
    }

    withdraw(){
        let withdrawAmount = parseInt((document.getElementById("withdrawAmount") as HTMLInputElement).value);
        let accNum = parseInt(this.route.snapshot.paramMap.get("accountNumber"));

        for(let cust of this.customer){
            if(cust.accountNumber===accNum){
                let temp = cust.amount-withdrawAmount;
                if(temp>1000){
                    cust.amount = parseInt(cust.amount)-withdrawAmount;
                    this.doWithdraw = true;
                }
                let data = {"accountNumber":cust.accountNumber,"name":cust.name,"age":cust.age,"amount" : cust.amount,"bankName" : cust.bankName};
                this.customerService.putCustomer(data,cust.accountNumber).subscribe()
            }
        }
    }

    back(){
        this.router.navigate(["/"]);
    }

}