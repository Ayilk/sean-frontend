import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-people',
  templateUrl: './add-edit-people.component.html',
  styleUrl: './add-edit-people.component.css'
})
export class AddEditPeopleComponent {

  tipoDocumento: string[] = ['DNI', 'INE', 'PASAPORTE']

    constructor(public dialogRef: MatDialogRef<AddEditPeopleComponent>){

    }

    cancelar(){
      this.dialogRef.close();

      this.dialogRef.afterClosed().subscribe(result => {
        console.log("Dialogo close", result);
      });
    }

    

}


