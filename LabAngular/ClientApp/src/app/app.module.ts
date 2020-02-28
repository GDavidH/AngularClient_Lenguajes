import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from './auth.interceptor';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { FetchEmployeeComponent } from './fetchemployee/fetchemployee.component';

import { RegisterEmployee } from './addemployee/addEmployee.component'  
import { EmployeeService } from './services/employeeservice.service';
import { LoginComponent } from './login/login.component';

import { BasicAuthInterceptor } from './helpers/basic-auth.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';

import { FetchIssueComponent } from './fetch/fetchissue/fetchissue.component';
import { IssueService } from './services/issue/issueservice.service';
import { RegisterIssue } from './add/addIssue/addissue.component';

import { FetchCommentComponent } from './fetch/fetchcomment/fetchcomment.component';
import { CommentService } from './services/comment/commentservice.service';
import { RegisterComment } from './add/addComment/addcomment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    FetchEmployeeComponent,
    RegisterEmployee,
    LoginComponent,
    FetchIssueComponent,
    RegisterIssue,
    FetchCommentComponent,
    RegisterComment
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'fetch-employee', component: FetchEmployeeComponent },
      { path: 'fetch-issue', component: FetchIssueComponent },
      { path: 'fetch-comment', component: FetchCommentComponent },
      { path: 'register-employee', component: RegisterEmployee },
      { path: 'login-page', component: LoginComponent },
      { path: 'employee/:id', component: RegisterEmployee },
      { path: 'register-issue', component: RegisterIssue },
      { path: 'issue/:id', component: RegisterIssue },
      { path: 'register-comment', component: RegisterComment },
      { path: 'comment/:id', component: RegisterComment },
    ])
    ],

    providers: [EmployeeService, IssueService, CommentService,{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})


export class AppModule { }
