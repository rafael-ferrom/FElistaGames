import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoComponent } from './jogo.component';

describe('EditUserComponent', () => {
  let component: JogoComponent;
  let fixture: ComponentFixture<JogoComponent>;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JogoComponent]
    });
    fixture = TestBed.createComponent(JogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

