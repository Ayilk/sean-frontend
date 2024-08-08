import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  maxDate: Date;

    constructor(public dialogRef: MatDialogRef<AddEditPeopleComponent>,
      private fb: FormBuilder){
        this.maxDate = new Date();
        this.form = this.fb.group({
          nombre: ['', [Validators.required, Validators.maxLength(20)]],
          apellido: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          tipoDocumento: [null, Validators.required],
          documento: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
          fechaNacimiento: [null, Validators.required],
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


