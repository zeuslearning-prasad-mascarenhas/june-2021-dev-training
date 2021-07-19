import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualifypageComponent } from './qualifypage.component';

describe('QualifypageComponent', () => {
  let component: QualifypageComponent;
  let fixture: ComponentFixture<QualifypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualifypageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualifypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
