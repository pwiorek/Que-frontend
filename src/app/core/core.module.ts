import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { AuthorisationComponent } from './components/authorisation/authorisation.component';
import { SharedModule } from '../shared/shared.module';
import { NotificationsTestComponent } from './services/notifications-test/notifications-test.component'


@NgModule({
  declarations: [AuthorisationComponent, NotificationsTestComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    AuthorisationComponent,
    NotificationsTestComponent
  ]
})
export class CoreModule { }
