import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable()
export class PersonService {

  personList:Person[]=[];
  constructor() {
    let human:Person = {
      name: 'Tomas',
      lastName: 'Michalica',
      number: '+421 911 149 300',
      isFriend: true,
      isWork: true,
      isFamily: true,
    };
    let human2:Person = {
      name: 'Milan',
      lastName: 'Michalica',
      number: '+421 911 149 500',
      isFriend: true,
      isWork: true,
      isFamily: true,
    };
    this.personList.push(human);
    this.personList.push(human2);
  }

  getPersonList() {
    return this.personList;
  }
  addPersonToList(newPerson) {
    this.personList.unshift(newPerson);
  }
  removePersonFromList(index) {
    this.personList.splice(index, 1);
  }
  getPersonWithIndex(index) {
    console.log(index);
    return this.personList[index];
  }
  editPersonWithIndex(index, person) {
    this.personList[index] = person;
  }
}
