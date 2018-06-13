# ExampleNg6LibApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

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

## Add bootstrap

ng add @ng-bootstrap/schematics

##Add smart table

npm install --save ng2-smart-table

add this in app.module.ts->  import { Ng2SmartTableModule } from 'ng2-smart-table';

Now, one change in Angular 6 is that Angular 6 now depends on TypeScript 2.7 and RxJS 6. So, if you install third-party packages right now, then it is not compatible with Angular 6. In future, all the third-party libraries might upgrade their packages, but right now, it is not compatible with Angular 6.

So, to fill the gap between Angular 6 and third-party packages, we need to install the following library. That is it.

npm i rxjs-compat --save

##create a local backend server

npm install -g json-server

Now we need to create a folder inside src directory called data and in that folder, create one file called db.json. Let us add the following data inside a db.json file.
{"characters": [{"id": "1","name": "Peter Dinklage","age": "45"}]}

Now, start the JSON server using the following command.

json-server --watch src/data/db.json --port 4000
Our JSON server is started at port: 4000 and URL is: http://localhost:4000/characters


##calling service


Angular is full fledge Frontend Framework, so it has already HTTP module. So first let us configure inside app.module.ts file.

Now, inside home folder, create one file called Table.ts. It is an interface, which tells the Angular application that, which kind of data is on the backend that we need to display at frontend.

// Table.ts

export interface Table {
    id: Number;
    name: String;
    age: Number;
}

Also, inside home folder, create one file called table.service.ts. We are writing the network request code inside this file. Then we import this file inside home.component.ts file and then call service file’s function.

// table.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TableService {
  constructor(private http: HttpClient) { }
  url = 'http://localhost:4000';
  getCharacters() {
    return this
            .http
            .get(`${this.url}/characters`);
        }
}
Also, we need to import this service file inside app.module.ts.

// app.module.ts

import { TableService } from './table/table.service';

providers: [TableService],


