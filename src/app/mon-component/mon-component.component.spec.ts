import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {Attaquant, MonComponentComponent} from './mon-component.component';
describe('MonComponentComponent', () => {
  let component: MonComponentComponent;
  let fixture: ComponentFixture<MonComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Tests', function () {
    it('Point a 20 au debut', () => {
      const a = new Attaquant('a', 'prenom');

      expect(a.pointDeVie).toEqual(20);
    });

    it('Attaque a 10 points', () => {
      const a = new Attaquant('a', 'prenom');
      const a2 = new Attaquant('a2', 'prenom2');

      a2.attaquer(a, 10);

      expect(a.pointDeVie).toEqual(10);
    });
  });

});
