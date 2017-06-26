import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent }   from './home/home.component';
import { EmployeeDetailsComponent } from './employee/employee.details.component';
import { routing }       from './app.routing';
import { EmployeeService } from './employee/employee.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, routing, HttpModule ],
  declarations: [ AppComponent, HomeComponent, EmployeeDetailsComponent],
  bootstrap:    [ AppComponent ],
  providers: [EmployeeService]
})
export class AppModule { }
