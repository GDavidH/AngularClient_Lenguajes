import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs/Rx'

//@Injectable
export class EmployeeService {

    myAppUrl: string = "";

    constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl){

        this.myAppUrl = baseUrl;
    }

    getEmployees() {
       
        return this._http.get('https://localhost:44335/api/Employee/').pipe(map((res: any) => {
            return res;
        }));

    }

    getEmployeeById(id: number) {
        return this._http.get('https://localhost:44335/api/Employee/' + id).pipe(map((res: any) => {
             return res;
        }));

    }

    saveEmployee(employee) {

        return this._http.post('https://localhost:44335/api/Employee/', employee).pipe(map((res: any) => {
            return res;
        }));
    }


    updateEmployee(employee) {
        return this._http.put('https://localhost:44335/api/Employee/', employee).pipe(map((res: any) => {
            return res;
        }));
    }

    deleteEmployee(id) {
        return this._http.delete('https://localhost:44335/api/Employee/' + id).pipe(map((res: any) => {
            return res;
        }));
    }


    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }

}  
