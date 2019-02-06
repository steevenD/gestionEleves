import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowSalleComponent } from './row-salle.component';

describe('RowSalleComponent', () => {
  let component: RowSalleComponent;
  let fixture: ComponentFixture<RowSalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowSalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
