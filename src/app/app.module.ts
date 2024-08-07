import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPeopleComponent } from './components/list-people/list-people.component';
import { AddEditPeopleComponent } from './components/add-edit-people/add-edit-people.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

//Angular Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    ListPeopleComponent,
    AddEditPeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
