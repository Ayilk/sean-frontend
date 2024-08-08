import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { People } from '../../interfaces/people';

@Component({
  selector: 'app-add-edit-people',
  templateUrl: './add-edit-people.component.html',
  styleUrl: './add-edit-people.component.css'
})
export class AddEditPeopleComponent {

  tipoDocumento: string[] = ['DNI', 'INE', 'PASAPORTE'];
  form: FormGroup;

    constructor(public dialogRef: MatDialogRef<AddEditPeopleComponent>,
      private fb: FormBuilder){
        this.form = this.fb.group({
          nombre: [''],
          apellido: [''],
          email: [''],
          tipoDocumento: [null],
          documento: [null],
          fechaNacimiento: [null],
        })
    }

    cancelar(){
      this.dialogRef.close();

      this.dialogRef.afterClosed().subscribe(result => {
        console.log("Dialogo close", result);
      });
    }

    addEditPeople(){
      const persona: People = {
        name: this.form.value.nombre,
        lastname: this.form.value.apellido,
        email: this.form.value.email,
        kindDocument: this.form.value.tipoDocumento,
        document: this.form.value.documento,
        birthdayDate: this.form.value.fechaNacimiento
      }

      console.log(persona)
    }

    

}


