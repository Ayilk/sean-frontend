import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { People } from '../../interfaces/people';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

const listPeople: People[] = [
  {
    name: "Tomas", 
    lastname: "Perez", 
    email: "tomas@gmail.com", 
    kindDocument: "DNI", 
    document: 12345, 
    birthdayDate: new Date() 
  },
  {
    name: "Miguel", 
    lastname: "Luna", 
    email: "Miguel@gmail.com", 
    kindDocument: "DNI", 
    document: 12245, 
    birthdayDate: new Date() 
  },
  {
    name: "Laura", 
    lastname: "Altamirano", 
    email: "Laura@gmail.com", 
    kindDocument: "DNI", 
    document: 12325, 
    birthdayDate: new Date() 
  },
  {
    name: "Ramón", 
    lastname: "Jimenez", 
    email: "Ramón@gmail.com", 
    kindDocument: "DNI", 
    document: 12342, 
    birthdayDate: new Date() 
  },
  {
    name: "Sarahi", 
    lastname: "Rodriguez", 
    email: "Sarahi@gmail.com", 
    kindDocument: "DNI", 
    document: 22345, 
    birthdayDate: new Date() 
  },
  {
    name: "Joaquín", 
    lastname: "Sandoval", 
    email: "Joaquín@gmail.com", 
    kindDocument: "DNI", 
    document: 13345, 
    birthdayDate: new Date() 
  },
  {
    name: "Antonia", 
    lastname: "García", 
    email: "Antonia@gmail.com", 
    kindDocument: "DNI", 
    document: 12335, 
    birthdayDate: new Date() 
  },
  {
    name: "Manuel", 
    lastname: "Benitez", 
    email: "Manuel@gmail.com", 
    kindDocument: "DNI", 
    document: 12343, 
    birthdayDate: new Date() 
  },
  {
    name: "Octavio", 
    lastname: "Sánchez", 
    email: "Octavio@gmail.com", 
    kindDocument: "DNI", 
    document: 42345, 
    birthdayDate: new Date() 
  },
  {
    name: "Tomas", 
    lastname: "Gutierrez", 
    email: "tomas@gmail.com", 
    kindDocument: "DNI", 
    document: 12345, 
    birthdayDate: new Date() 
  },
  {
    name: "Tomas", 
    lastname: "Perez", 
    email: "tomas@gmail.com", 
    kindDocument: "DNI", 
    document: 12345, 
    birthdayDate: new Date() 
  },
  {
    name: "Tomas", 
    lastname: "Perez", 
    email: "tomas@gmail.com", 
    kindDocument: "DNI", 
    document: 12345, 
    birthdayDate: new Date() 
  }
  

];

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrl: './list-people.component.css'
})
export class ListPeopleComponent implements AfterViewInit {
  displayedColumns: string[] = ["name", "lastname", "email", "kindDocument", "document", "birthdayDate", "accions"];
  //Esta propiedad la inicializamos en el constructor
  dataSource : MatTableDataSource<People>;

  //Lo primero que hacermos para colocar el paginador es colocar el viewchild
  //Importamos VIewChild y MatPaginator
  //Colocamos el signo de admiarción por que se queja de que no está inicializado
  //No lo estamos inicializando en el constructor
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(){
    this.dataSource = new MatTableDataSource(listPeople);
  }
  
  ngAfterViewInit(): void {
    //Para poder acceder al componente paginator el componente del viewchild ya debe estar renderizado
    //Por eso lo colocamos en el componente ngAfterViewInit
    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator._intl.itemsPerPageLabel = "Personas por página";
    this.dataSource.sort = this.sort;
  }
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
