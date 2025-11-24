import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Masvendidos } from './masvendidos';

describe('Masvendidos', () => {
  let component: Masvendidos;
  let fixture: ComponentFixture<Masvendidos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Masvendidos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Masvendidos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
