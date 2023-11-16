import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleTaskRoutingModule } from './example-task-routing.module';
import { ExampleTaskComponent } from './example-task.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ExampleTaskComponent
  ],
  imports: [
    CommonModule,
    ExampleTaskRoutingModule,

  ]
})
export class ExampleTaskModule { }
