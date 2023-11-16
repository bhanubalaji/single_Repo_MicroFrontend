import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTaskComponent } from './example-task.component';

describe('ExampleTaskComponent', () => {
  let component: ExampleTaskComponent;
  let fixture: ComponentFixture<ExampleTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleTaskComponent]
    });
    fixture = TestBed.createComponent(ExampleTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
