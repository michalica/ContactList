import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable()
export class PersonService {

  personList:Person[]=[];
  constructor() {
    let tagsList: number[] = [0, 1];
    let human:Person = {
      name: 'Tomas',
      lastName: 'Michalica',
      number: '+421 911 149 300',
      tags: tagsList
    };
    let human2:Person = {
      name: 'Milan',
      lastName: 'Michalica',
      number: '+421 911 149 500',
      tags: tagsList
    };
    this.personList.push(human);
    this.personList.push(human2);
  }

  getPersonList() {
    return this.personList;
  }
}
