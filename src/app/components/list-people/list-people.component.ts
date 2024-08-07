import { Component } from '@angular/core';
import { People } from '../../interfaces/people';

const listPeople: People[] = [
  {
    name: "Tomas", 
    lastname: "Perez", 
    email: "tomas@gmail.com", 
    kindDocument: "DNI", 
    document: 12345, 
    birthdayDate: new Date() }
];
@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrl: './list-people.component.css'
})
export class ListPeopleComponent {
  displayedColumns: string[] = ["name", "lastname", "email", "kindDocument", "document", "birthdayDate"];
  dataSource = listPeople;
}
