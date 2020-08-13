import { TestBed } from '@angular/core/testing';

import { MasterPerfilService } from './master-perfil.service';

describe('MasterPerfilService', () => {
  let service: MasterPerfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterPerfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
