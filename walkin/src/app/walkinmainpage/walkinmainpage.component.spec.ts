import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkinmainpageComponent } from './walkinmainpage.component';

describe('WalkinmainpageComponent', () => {
  let component: WalkinmainpageComponent;
  let fixture: ComponentFixture<WalkinmainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkinmainpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkinmainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
