import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkindetailspageComponent } from './walkindetailspage.component';

describe('WalkindetailspageComponent', () => {
  let component: WalkindetailspageComponent;
  let fixture: ComponentFixture<WalkindetailspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkindetailspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkindetailspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
