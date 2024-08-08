import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'; 
import { MatTableModule } from '@angular/material/table'; 
import { MatCardModule } from '@angular/material/card';  
import { MatSortModule } from '@angular/material/sort'; 
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [
    CommonModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatIconModule,
  ]
})
export class SharedModule { }
