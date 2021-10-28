import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module'

import { ScheduleComponent } from './components/schedule/schedule.component';
import { MaterialModule } from 'src/app/material.module';
import { DividerComponent } from './components/divider/divider.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import {CoreModule} from '../../core/core.module';

@NgModule({
  declarations: [ScheduleComponent, DividerComponent],
    imports: [
        CommonModule,
        SharedModule,
        MaterialModule,
        PipesModule,
        CoreModule
    ],
  exports: [
    ScheduleComponent
  ]
})
export class ScheduleModule { }
