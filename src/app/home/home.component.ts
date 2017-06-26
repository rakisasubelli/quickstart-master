import {Component, OnInit,Injectable} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './../employee/employee.service'
@Component({
    selector: 'my-login',
    templateUrl: './home.component.html',
    providers: [ EmployeeService ]
})

export class HomeComponent implements OnInit{
    employee = '';

    constructor(private _employeeService:EmployeeService ){

    }
    ngOnInit(){

    }

    getEmployees(employeeList){    
        this.employeeList = JSON.parse(employeeList);
        console.log(this.employeeList);
    }  

    getEmployeesData() {
        this._employeeService.employeesList().subscribe(
        response => this.getEmployees(response._body), 
        error => console.log(error)
        );
    }

}
