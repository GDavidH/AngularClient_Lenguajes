import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs/Rx'

//@Injectable
export class CommentService {

    myAppUrl: string = "";

    constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl){

        this.myAppUrl = baseUrl;
    }

    getComment() {
       
        return this._http.get('http://localhost:59267/api/Comment/').pipe(map((res: any) => {
            return res;
        }));

    }

    getCommentById(id: number) {
        return this._http.get('http://localhost:59267/api/Comment/' + id).pipe(map((res: any) => {
             return res;
        }));

    }

    saveComment(issue) {

        return this._http.post('http://localhost:59267/api/Comment/', issue).pipe(map((res: any) => {
            return res;
        }));
    }


    updateComment(issue) {
        return this._http.put('http://localhost:59267/api/Comment/', issue).pipe(map((res: any) => {
            return res;
        }));
    }

    deleteComment(id) {
        return this._http.delete('http://localhost:59267/api/Comment/' + id).pipe(map((res: any) => {
            return res;
        }));
    }


    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }

}  
