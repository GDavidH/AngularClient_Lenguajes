import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs/Rx'

//@Injectable
export class IssueService {

    myAppUrl: string = "";

    constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl){

        this.myAppUrl = baseUrl;
    }

    getIssues() {
       
        return this._http.get('http://localhost:59267/api/Issue/').pipe(map((res: any) => {
            return res;
        }));

    }

    getIssueById(id: number) {
        return this._http.get('http://localhost:59267/api/Issue/' + id).pipe(map((res: any) => {
             return res;
        }));

    }

    saveIssue(issue) {

        return this._http.post('http://localhost:59267/api/Issue/', issue).pipe(map((res: any) => {
            return res;
        }));
    }


    updateIssue(issue) {
        return this._http.put('http://localhost:59267/api/Issue/', issue).pipe(map((res: any) => {
            return res;
        }));
    }

    deleteIssue(id) {
        return this._http.delete('http://localhost:59267/api/Issue/' + id).pipe(map((res: any) => {
            return res;
        }));
    }


    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }

}  
