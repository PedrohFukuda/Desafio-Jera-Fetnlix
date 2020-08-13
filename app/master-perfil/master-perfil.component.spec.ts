import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPerfilComponent } from './master-perfil.component';

describe('MasterPerfilComponent', () => {
  let component: MasterPerfilComponent;
  let fixture: ComponentFixture<MasterPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
