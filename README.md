Please open both Apps in sperate projects
Client (Angular 8) = Visual Studio Code
Server (.NET Core 3.1) = Visual Studio

How it works:

Client End:
Update your Server URL in Client environment typescript file
baseURL:"https://{your server machine name or localhost}:{port number}/"
Run Client in Visual Studio Code Project.

Server End:
Don't include "Client' project in Server side [.NET Core]. Keep it excluded.


Tech Stack:

Server Side Tech:
.NET Core 3.1 WEB API

Client Side Tech:
Angular CLI: 8.3.21
Node: 13.5.0
OS: win32 x64
Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.803.21
@angular-devkit/core         8.3.21
@angular-devkit/schematics   8.3.21
@schematics/angular          8.3.21
@schematics/update           0.803.21
rxjs



# ClientDemo002

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
