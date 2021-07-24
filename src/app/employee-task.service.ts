import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { Task } from "./task";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeTaskService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


//Employee Methods

public getEmployees(): Observable<Employee[]>{
  return this.http.get<any>(`${this.apiServerUrl}/employee/all`);
}

public addEmployees(employee: Employee ): Observable<Employee>{
  return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`,employee);
}

public updateEmployees(employee: Employee ): Observable<Employee>{
  return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`,employee);
}

public deleteEmployees(empId: number ): Observable<void>{
  return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${empId}`);
}


//Task Methods


  public getTasks(): Observable<Task[]>{
      return this.http.get<any>(`${this.apiServerUrl}/task/all`);
  }

  public addTasks(task: Task ): Observable<Task>{
      return this.http.post<Task>(`${this.apiServerUrl}/task/add`,task);
  }

  public updateTasks(task: Task ): Observable<Task>{
      return this.http.put<Task>(`${this.apiServerUrl}/task/update`,task);
  }

  public deleteTasks(taskId: number ): Observable<void>{
      return this.http.delete<void>(`${this.apiServerUrl}/task/delete/${taskId}`);
  }





}
