import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from "src/app/employee/employee";

@Injectable()

export class EmployeeService{

    url = "http://localhost:3100/employees/";


    constructor(private http:HttpClient) {}

    putEmployee(data,employeeId): Observable<Employee>{
        return this.http.put<Employee>(this.url+employeeId,data);
    }

    postEmployee(customer) : Observable<Employee[]>{
        return this.http.post<Employee[]>(this.url,customer)
    } 

    deleteEmployee(id:number){
        return this.http.delete(this.url+id);
    }
    
    getEmployee() : Observable<Employee[]>{
        return this.http.get<Employee[]>(this.url);
    }

    ngOnInit(): void {}

}