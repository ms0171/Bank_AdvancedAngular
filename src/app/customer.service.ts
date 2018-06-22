import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Customer } from "src/app/customer/customer";


@Injectable()

export class CustomerService{

    url = "http://localhost:3000/customers/";


    constructor(private http:HttpClient) {}

    putCustomer(data,accountNumber): Observable<Customer>{
        return this.http.put<Customer>(this.url+accountNumber,data);
    }

    postCustomer(customer) : Observable<Customer[]>{
        return this.http.post<Customer[]>(this.url,customer)
    } 

    deleteCustomer(id:number){
        return this.http.delete(this.url+id);
    }
    
    getCustomer() : Observable<Customer[]>{
        return this.http.get<Customer[]>(this.url);
    }


    ngOnInit(): void {
        
    }
 

}