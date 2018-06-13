import { Component, OnInit } from '@angular/core';

import { TableService } from './table.service';
import { Table } from './Table';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  characters: Table[];

  constructor(private tservice: TableService) { }

  ngOnInit() {
    this.tservice.getCharacters().subscribe((data: Table[]) => {
      this.characters = data;
  });
  }
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Name'
      },
      age: {
        title: 'Age'
      }
    }
  };
}
