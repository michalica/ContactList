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
  isFriend: boolean;
  isFamily: boolean;
  isWork: boolean;
  modalId: number;

  isFriendFilter: boolean = false;
  isFamilyFilter: boolean = false;
  isWorkFilter: boolean = false;
  searchValue: string = "";
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
  setModalToClose() {
    this.showModalVal = false;
  }
  filterList() {
    if(this.searchValue !== "") {
      let personListFiltered: Person[] = Object.assign([], this.personServ.getPersonList());
      let helpIndex = 0;
      this.personList.map((person, index) => {
        if (person.name.includes(this.searchValue)) {
          helpIndex++;
          return;
        }
        if (person.lastName.includes(this.searchValue)) {
          helpIndex++;
          return;
        }
        personListFiltered.splice(helpIndex, 1);
      });
      return personListFiltered;
    }else {

      if (!this.isFriendFilter && !this.isFamilyFilter && !this.isWorkFilter) {
        return this.personList;
      }
      let personListFiltered: Person[] = Object.assign([], this.personServ.getPersonList());
      let helpIndex = 0;
      this.personList.map((person, index) => {
        if (person.isFriend && this.isFriendFilter) {
          helpIndex++;
          return;
        }
        if (person.isWork && this.isWorkFilter) {
          helpIndex++;
          return;
        }
        if (person.isFamily && this.isFamilyFilter) {
          helpIndex++;
          return;
        }
        personListFiltered.splice(helpIndex, 1);
      });
      return personListFiltered;
    }
  }
}
