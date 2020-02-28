import { Component, Inject } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentService } from '../../services/comment/commentservice.service';

@Component({
    templateUrl: './fetchcomment.component.html'
})

export class FetchCommentComponent {
    
    public commentList: CommentData[];

    constructor(public http: HttpClient, private _router: Router, private _commentService: CommentService) {
        this.getComment();
    }

    getComment() {
        this._commentService.getComment().subscribe(

            data => this.commentList=data
        )
    }

    delete(id) {
        var answer = confirm("Do you want to delete customer with id: " + id + "?");
        if (answer) {
            this._commentService.deleteComment(id).subscribe((data) => {
                this.getComment();
            }, error => console.error(error))

        }
    
    } 
}  
interface CommentData {
    Id: number,
    IdIssue: number,
    Description: string,
    ComentTimestamp: Date 
}  
