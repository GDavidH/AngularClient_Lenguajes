
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchCommentComponent } from '../../fetch/fetchcomment/fetchcomment.component';
import { CommentService } from '../../services/comment/commentservice.service';

@Component({
    templateUrl: './addcomment.component.html'
})
export class RegisterComment implements OnInit{
    
    commentForm: FormGroup;
    title: string = "Create";
    id: number;
    errorMessage: any;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _commentService: CommentService, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.id = this._avRoute.snapshot.params["id"];
        }
        this.commentForm = this._fb.group({
            Id: 0,
            IdIssue: ['', [Validators.required]],
            Description: ['', [Validators.required]],
           
        })
    }

    ngOnInit(): void {

        if (this.id > 0) {

            this.title = "Edit";
            this._commentService.getCommentById(this.id)
                .subscribe((data) => {
                    this.commentForm.controls['Id'].setValue(data.Id);
                    this.commentForm.controls['IdIssue'].setValue(data.IdIssue);
                    this.commentForm.controls['Description'].setValue(data.Description);

                }, error => this.errorMessage = error)

        }

    }


    

    save() {
        if (!this.commentForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._commentService.saveComment(this.commentForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-issue']);
                }, error => this.errorMessage = error)
        } else if (this.title == "Edit") {
            this._commentService.updateComment(this.commentForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-issue']);
                }, error => this.errorMessage = error)
        }  
    }
    cancel() {
        this._router.navigate(['/fetch-issue']);
    }
    get Id() { return this.commentForm.get('Id'); }
    get IdIssue() { return this.commentForm.get('IdIssue'); }
    get Description() { return this.commentForm.get('Description'); }

}
