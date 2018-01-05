import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() indexModal: number;
  @Output() closeModal = new EventEmitter();
  currentEditedPerson: Person;
  personName: String = "Jozef";
  personLastName: String;
  personNumber: String;
  isFriend: boolean;
  isFamily: boolean;
  isWork: boolean;
  constructor(private personServ:PersonService) {
  }
  ngOnInit() {
    this.currentEditedPerson = this.personServ.getPersonWithIndex(this.indexModal);
    this.personName = this.currentEditedPerson.name;
    this.personLastName = this.currentEditedPerson.lastName;
    this.personNumber = this.currentEditedPerson.number;
    this.isFriend = this.currentEditedPerson.isFriend;
    this.isFamily = this.currentEditedPerson.isFamily;
    this.isWork = this.currentEditedPerson.isWork;
  }
  clearModal() {
    this.closeModal.emit();
  }
  editContact() {
    let person: Person;
    person = {
      name: this.personName,
      lastName: this.personLastName,
      number: this.personNumber,
      isFriend: this.isFriend,
      isFamily: this.isFamily,
      isWork: this.isWork
    };
    this.personServ.editPersonWithIndex(this.indexModal, person);
    this.clearModal();
  }
}
