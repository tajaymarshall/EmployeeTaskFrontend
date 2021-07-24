# EmpTaskFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

The application utilizes a Spring boot backend with PostgreSQL configurations that is connected to an Angular FrontEnd

Basic Requirements

Create Employee Create Employee Task Update Employee Tasks with multiple employees Create a Status (not yet started, in progress, completed, past due) to tasks Update Task Status View list of tasks displaying [employee(s), Status]

Project

Front End - Angular Framework

Backend - Spring Boot Rest API

Database- PostgreSQL (H2 in-memory database available)

Entities: Employee: id, name, department. Task: id, name, description, status, due dat. Entities have a many to many relationship which is handled by a join table

Required Tools/ Resources:

Spring Initizlr Node.js IntelliJ IDE Java 16 JDK PostgreSQL Visual Studio Code GitHub Bootstrap Angular CLI Postman - Used for testing API requests
