import { TestBed } from '@angular/core/testing';

import { ListaDePublicacoesService } from './lista-de-publicacoes.service';

describe('ListaDePublicacoesService', () => {
  let service: ListaDePublicacoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaDePublicacoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
