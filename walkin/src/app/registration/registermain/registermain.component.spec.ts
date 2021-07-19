import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistermainComponent } from './registermain.component';

describe('RegistermainComponent', () => {
  let component: RegistermainComponent;
  let fixture: ComponentFixture<RegistermainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistermainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistermainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
