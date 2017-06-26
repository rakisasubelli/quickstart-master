import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
	constructor(private _http:Http){}
	url = './../app/data/employee.json';

	// employeesList(): Observable<any> {
	// 	return this._http.get(this.url)
	// 	.map(this.employeesData)
	// 	.catch(handleErrorObservable);
	// }

    employeesList(): Observable<any>{
        return this._http.get(this.url);
    }	

	private employeesData(res: Response){
		let body = res.json();
		return body;
	}

	private handleErrorObservable (error: Response | any) {
	    console.error(error.message || error);
	    return Observable.throw(error.message || error);
	} 

}