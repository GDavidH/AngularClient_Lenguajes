
import { Component, Inject } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employeeservice.service'

@Component({
    templateUrl: './fetchemployee.component.html'
})

export class FetchEmployeeComponent {
    
    public employeeList: EmployeeData[];

    constructor(public http: HttpClient, private _router: Router, private _employeeService: EmployeeService) {
        this.getEmployees();
    }

    getEmployees() {
        this._employeeService.getEmployees().subscribe(

            data => this.employeeList=data
        )
    }

    delete(id) {
        var answer = confirm("Do you want to delete customer with id: " + id + "?");
        if (answer) {
            this._employeeService.deleteEmployee(id).subscribe((data) => {
                this.getEmployees();
            }, error => console.error(error))

        }
    
    } 
}  
interface EmployeeData {
    EmployeeeId: number,
    Name: string,
    Age: number,
    Country: string,
    State: string
}  
