import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleTaskComponent } from './example-task.component';

const routes: Routes = [
  { path: '', component: ExampleTaskComponent },
  { path: 'todoTask', loadComponent: () => import('./todo-task/todo-task.component').then(m => m.TodoTaskComponent) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleTaskRoutingModule { }
