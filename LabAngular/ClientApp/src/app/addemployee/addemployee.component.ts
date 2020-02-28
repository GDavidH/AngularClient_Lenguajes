
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchEmployeeComponent } from '../fetchemployee/fetchemployee.component';
import { EmployeeService } from '../services/employeeservice.service';

@Component({
    templateUrl: './addemployee.component.html'
})
export class RegisterEmployee implements OnInit{
    
    employeeForm: FormGroup;
    title: string = "Create";
    id: number;
    errorMessage: any;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _employeeService: EmployeeService, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.id = this._avRoute.snapshot.params["id"];
        }
        this.employeeForm = this._fb.group({
            employeeId: 0,
            name: ['', [Validators.required]],
            age: ['', [Validators.required]],
            country: ['', [Validators.required]],
            state: ['', [Validators.required]]
        })
    }

    ngOnInit(): void {

        if (this.id > 0) {

            this.title = "Edit";
            this._employeeService.getEmployeeById(this.id)
                .subscribe((data) => {
                    this.employeeForm.controls['employeeId'].setValue(data.EmployeeId);
                    this.employeeForm.controls['name'].setValue(data.Name);
                    this.employeeForm.controls['age'].setValue(data.Age);
                    this.employeeForm.controls['country'].setValue(data.Country);
                    this.employeeForm.controls['state'].setValue(data.State);

                }, error => this.errorMessage = error)

        }

    }


    

    save() {
        if (!this.employeeForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._employeeService.saveEmployee(this.employeeForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-employee']);
                }, error => this.errorMessage = error)
        } else if (this.title == "Edit") {
            this._employeeService.updateEmployee(this.employeeForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-employee']);
                }, error => this.errorMessage = error)
        }  
    }
    cancel() {
        this._router.navigate(['/fetch-employee']);
    }
    get employeeId() { return this.employeeForm.get('employeeId'); }
    get name() { return this.employeeForm.get('name'); }
    get age() { return this.employeeForm.get('age'); }
    get country() { return this.employeeForm.get('country'); }
    get state() { return this.employeeForm.get('state'); }
}
