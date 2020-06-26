import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDePublicacoesComponent } from './lista-de-publicacoes.component';

describe('ListaDePublicacoesComponent', () => {
  let component: ListaDePublicacoesComponent;
  let fixture: ComponentFixture<ListaDePublicacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDePublicacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDePublicacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
