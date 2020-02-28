import { Component, Inject } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { IssueService } from '../../services/issue/issueservice.service';

@Component({
    templateUrl: './fetchissue.component.html'
})

export class FetchIssueComponent {
    
    public issueList: IssueData[];

    constructor(public http: HttpClient, private _router: Router, private _issueService: IssueService) {
        this.getIssues();
    }

    getIssues() {
        this._issueService.getIssues().subscribe(

            data => this.issueList=data
        )
    }

    delete(id) {
        var answer = confirm("Do you want to delete customer with id: " + id + "?");
        if (answer) {
            this._issueService.deleteIssue(id).subscribe((data) => {
                this.getIssues();
            }, error => console.error(error))

        }
    
    } 
}  
interface IssueData {
    Id: number,
    Description: string,
    FirstName: string,
    RegisterTimestam: Date,
    Address: string,
    ContactPhone: string,
    ContactEmail: string,
    Status: string,
    SupportUserItem: number,
    IdClient: number,
    Service: string
}  
