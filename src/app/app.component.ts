import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from './employee';
import { EmployeeTaskService } from './employee-task.service';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
    //Holds all the employees from the backend
    public employees: Employee[];
    public tasks: Task[];
    public editEmployee!: Employee ;
    public deleteEmployee!: Employee ;
    public editTask!: Task ;
    public deleteTask!: Task;
    
  
  
  
    constructor(private employeeTaskService: EmployeeTaskService){
      this.tasks =[];
      this.employees =[];
      
    }
  
    
  
  
    ngOnInit(){
      this.getEmployees();
      this.getTasks();
    }
    

    //Employees Functions
  
    public getEmployees(): void{
      this.employeeTaskService.getEmployees().subscribe(
        (response: Employee[])=>{
          this.employees = response;
        },
        (error: HttpErrorResponse)=>{
          alert(error.message);
        }
        );
      
    }
  
      
    
    public onAddEmloyee(addForm: NgForm): void{
      document.getElementById('add-employee-form')?.click();
      this.employeeTaskService.addEmployees(addForm.value).subscribe(
    
        (response: Employee) => {
          console.log(response);
          this.getEmployees();
          addForm.reset();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        }
      );
    }
  
    public onUpdateEmloyee(employee: Employee): void{
      
      this.employeeTaskService.updateEmployees(employee).subscribe(
    
        (response: Employee) => {
          console.log(response);
          this.getEmployees();
          
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
          
        }
      );
    }
  
    
  
    public onDeleteEmloyee(empId: number): void {
      this.employeeTaskService.deleteEmployees(empId).subscribe(
        (response: void) => {
          console.log(response);
          this.getEmployees();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  
   
  /** Bootstrap 4 */
  
  public onOpenModal(employee:Employee, mode: String): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display= 'none';
    button.setAttribute('data-toggle','modal');
    if(mode === 'add'){
      button.setAttribute('data-target','#addEmployeeModal');
    }
    if(mode === 'edit'){
      this.editEmployee = employee;
      button.setAttribute('data-target','#updateEmployeeModal');
    }
    if(mode === 'delete'){
      this.deleteEmployee = employee;
      button.setAttribute('data-target','#deleteEmployeeModal');
    }
    container?.appendChild(button);
    button.click;
  }

//Task


/**Holds all the Tasks from the backend **/
    
  
  
public getTasks(): void{
  this.employeeTaskService.getTasks().subscribe(
    (response: Task[]) =>{
      this.tasks = response;
    },
    (error: HttpErrorResponse)=>{
      alert(error.message);
    }
  );
}

  public onAddTask(addForm: NgForm): void{
    document.getElementById('add-task-form')?.click();
    this.employeeTaskService.addTasks(addForm.value).subscribe(
  
      (response: Task) => {
        console.log(response);
        this.getTasks();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateTask(task: Task): void{
    
    this.employeeTaskService.updateTasks(task).subscribe(
  
      (response: Task) => {
        console.log(response);
        this.getTasks();
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        
      }
    );
  }

  

  public onDeleteTask(taskId: number): void {
    this.employeeTaskService.deleteTasks(taskId).subscribe(
      (response: void) => {
        console.log(response);
        this.getTasks();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

 
/** Bootstrap 4 */

public onOpenModalTask(task:Task, mode: String): void{
  const container = document.getElementById('main-container-task');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display= 'none';
  button.setAttribute('data-toggle','modal');
  if(mode === 'add'){
    button.setAttribute('data-target','#addTaskModal');
  }
  if(mode === 'edit'){
   this.editTask =task;
    button.setAttribute('data-target','#updateTaskModal');
  }
  if(mode === 'delete'){
    this.deleteTask = task;
    button.setAttribute('data-target','#deleteTaskModal');
  }
  container?.appendChild(button);
  button.click;
}





  
}
