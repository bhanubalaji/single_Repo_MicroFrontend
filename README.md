# MyWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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
step to do
ng new mfe-workspace --create-application=false
cd mfe-workspace
ng generate application shell
ng generate application mfe1
ng generate application mfe2
ng add @angular-architects/module-federation --project shell --type host
ng add @angular-architects/module-federation --project mfe1 --type remote
ng add @angular-architects/module-federation --project mfe2 --type remote
cmd to run
ng serve shell --port 4200
ng serve mfe1 --port 4201
ng serve mfe2 --port 4202

