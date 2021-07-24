import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeTaskService } from './employee-task.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgbModule,
    HttpClientModule, FormsModule
  ],
  providers: [EmployeeTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
