import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleSalleComponent } from './handle-salle.component';

describe('HandleSalleComponent', () => {
  let component: HandleSalleComponent;
  let fixture: ComponentFixture<HandleSalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleSalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
