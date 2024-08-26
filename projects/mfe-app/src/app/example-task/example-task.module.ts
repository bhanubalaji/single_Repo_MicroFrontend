import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleTaskRoutingModule } from './example-task-routing.module';
import { ExampleTaskComponent } from './example-task.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppEffects, appReducer, StateModule } from 'shared-state-mylibrary';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    ExampleTaskComponent
  ],
  imports: [
    CommonModule,
    ExampleTaskRoutingModule,
    StoreModule.forFeature('someFeature', appReducer), // Feature-specific reducer
    EffectsModule.forFeature([AppEffects])

  ]
})
export class ExampleTaskModule { }
