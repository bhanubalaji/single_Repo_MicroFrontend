import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateSomeState } from 'shared-state-mylibrary';
import { State } from 'shared-state-mylibrary';
import { selectSomeState } from 'shared-state-mylibrary'


@Component({
  selector: 'app-example-task',
  templateUrl: './example-task.component.html',
  styleUrls: ['./example-task.component.css']
})
export class ExampleTaskComponent implements OnInit{
title = 'MicroFrontend-app';

someState$: Observable<string> | undefined;
recievedData:any=''

constructor( 
  private store: Store<{ someFeature: State }>
) {

}

  
  ngOnInit(): void {

    this.someState$ = this.store.pipe(select(selectSomeState));
    this.someState$?.subscribe((state)=>{
      console.log(state)
      this.recievedData = state
    })
    

  }
}
