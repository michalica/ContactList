import { Component, OnInit, Input } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() indexModal; number;
  currentPerson: Person;
  personName: String = "Jozef";
  personLastName: String;
  personNumber: String;
  isFriend: boolean;
  isFamily: boolean;
  isWork: boolean;
  constructor(private personServ:PersonService) {
    currentEditedPerson = personServ.getPersonWithIndex();

  }
  ngOnInit() {
  }

}
