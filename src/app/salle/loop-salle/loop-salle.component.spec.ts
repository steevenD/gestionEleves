import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopSalleComponent } from './loop-salle.component';

describe('LoopSalleComponent', () => {
  let component: LoopSalleComponent;
  let fixture: ComponentFixture<LoopSalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopSalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
