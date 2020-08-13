import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPerfilComponent } from './detalhes-perfil.component';

describe('DetalhesPerfilComponent', () => {
  let component: DetalhesPerfilComponent;
  let fixture: ComponentFixture<DetalhesPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
