import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalpageComponent } from './personalpage.component';

describe('PersonalpageComponent', () => {
  let component: PersonalpageComponent;
  let fixture: ComponentFixture<PersonalpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
