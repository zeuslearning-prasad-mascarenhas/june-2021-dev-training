import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeslotandprefComponent } from './timeslotandpref.component';

describe('TimeslotandprefComponent', () => {
  let component: TimeslotandprefComponent;
  let fixture: ComponentFixture<TimeslotandprefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeslotandprefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeslotandprefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
