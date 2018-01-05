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
  currentEditedPerson: Person;
  personName: String;
  personLastName: String;
  personNumber: String;
  isFriend: boolean;
  isFamily: boolean;
  isWork: boolean;
  modalId: number;

  showModalVal: boolean = false;
  constructor(private personServ:PersonService) {
    this.personList = personServ.getPersonList();
  }

  ngOnInit() {
  }
  clearVar() {
    this.personName = "";
    this.personLastName = "";
    this.personNumber = "";
    this.isFriend = false;
    this.isFamily = false;
    this.isWork = false;
  }
  addContact() {
    this.currentPerson = {
      name: this.personName,
      lastName: this.personLastName,
      number: this.personNumber,
      isFriend: this.isFriend,
      isFamily: this.isFamily,
      isWork: this.isWork
    };
    this.personServ.addPersonToList(this.currentPerson);
    this.clearVar();
  }
  removeContact(index) {
    this.personServ.removePersonFromList(index);
  }
  showModal(index) {
    this.modalId = index;
    this.showModalVal = !this.showModalVal;
  }
}
