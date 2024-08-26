import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateSomeState } from 'shared-state-mylibrary';
import { State } from 'shared-state-mylibrary';
import { selectSomeState } from 'shared-state-mylibrary'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Host-app';
  inputValue:any
  // state$: Observable<string>;

  constructor(private store: Store<{ app: State }>) {
    // this.state$ = this.store.pipe(select(selectSomeState))
    
  }
  updateState() {
    if(this.inputValue){
    this.store.dispatch(updateSomeState({ newValue: this.inputValue}));
    }
  }
}
