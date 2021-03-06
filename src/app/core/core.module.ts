import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { AuthorisationComponent } from './components/authorisation/authorisation.component';
import { SharedModule } from '../shared/shared.module'


@NgModule({
  declarations: [AuthorisationComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    AuthorisationComponent
  ]
})
export class CoreModule { }
