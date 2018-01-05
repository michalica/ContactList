import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

import { Person } from '../person';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  personList:Person[] = [];
  currentPerson: Person;
  personName: String;
  personLastName: String;
  personNumber: String;
  constructor(private personServ:PersonService) {
    this.personList = personServ.getPersonList();
  }

  ngOnInit() {
  }
}
