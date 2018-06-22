import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from "./employee/employee";
import { Manager } from "./manager/manager";

@Injectable()

export class ManagerService{

    url = "http://localhost:3200/managers/";


    constructor(private http:HttpClient) {}

    putManager(data,employeeId): Observable<Manager>{
        return this.http.put<Manager>(this.url+employeeId,data);
    }

    postManager(customer) : Observable<Manager[]>{
        return this.http.post<Manager[]>(this.url,customer)
    } 

    deleteManager(id:number){
        return this.http.delete(this.url+id);
    }
    
    getManager() : Observable<Manager[]>{
        return this.http.get<Manager[]>(this.url);
    }


    ngOnInit(): void {
        
    }
 


}