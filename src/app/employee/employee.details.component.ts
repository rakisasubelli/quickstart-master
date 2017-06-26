import { Component,Input } from "@angular/core";
import { HomeComponent } from "./../home/home.component";

@Component({
	selector: 'emp-details',
	templateUrl: './employee.details.tmpl.html'
})
export class EmployeeDetailsComponent {
	@Input()
	public optionsValue:any;
}