
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchIssueComponent } from '../../fetch/fetchissue/fetchissue.component';
import { IssueService } from '../../services/issue/issueservice.service';

@Component({
    templateUrl: './addissue.component.html'
})
export class RegisterIssue implements OnInit{
    
    issueForm: FormGroup;
    title: string = "Create";
    id: number;
    errorMessage: any;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _issueService: IssueService, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.id = this._avRoute.snapshot.params["id"];
        }
        this.issueForm = this._fb.group({
            Id: 0,
            Description: ['', [Validators.required]],
            Address: ['', [Validators.required]],
            ContactPhone: ['', [Validators.required]],
            ContactEmail: ['', [Validators.required]],
            Status: ['', [Validators.required]],
            IdClient: ['', [Validators.required]],
            Service: ['', [Validators.required]]
        })
    }

    ngOnInit(): void {

        if (this.id > 0) {

            this.title = "Edit";
            this._issueService.getIssueById(this.id)
                .subscribe((data) => {
                    this.issueForm.controls['Id'].setValue(data.Id);
                    this.issueForm.controls['Description'].setValue(data.Description);
                    this.issueForm.controls['Address'].setValue(data.Address);
                    this.issueForm.controls['ContactPhone'].setValue(data.ContactPhone);
                    this.issueForm.controls['ContactEmail'].setValue(data.ContactEmail);
                    this.issueForm.controls['Status'].setValue(data.Status);
                    this.issueForm.controls['IdClient'].setValue(data.IdClient);
                    this.issueForm.controls['Service'].setValue(data.Service);

                }, error => this.errorMessage = error)

        }

    }


    

    save() {
        if (!this.issueForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._issueService.saveIssue(this.issueForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-issue']);
                }, error => this.errorMessage = error)
        } else if (this.title == "Edit") {
            this._issueService.updateIssue(this.issueForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-issue']);
                }, error => this.errorMessage = error)
        }  
    }
    cancel() {
        this._router.navigate(['/fetch-issue']);
    }
    get Id() { return this.issueForm.get('Id'); }
    get Description() { return this.issueForm.get('Description'); }
    get Address() { return this.issueForm.get('Address'); }
    get ContactPhone() { return this.issueForm.get('ContactPhone'); }
    get ContactEmail() { return this.issueForm.get('ContactEmail'); }
    get Status() { return this.issueForm.get('Status'); }
    get IdClient() { return this.issueForm.get('IdClient'); }
    get Service() { return this.issueForm.get('Service'); }
}
