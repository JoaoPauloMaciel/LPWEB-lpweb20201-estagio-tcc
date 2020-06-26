import { TestBed } from '@angular/core/testing';

import { CadastroTccService } from './cadastro-tcc.service';

describe('CadastroTccService', () => {
  let service: CadastroTccService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroTccService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
