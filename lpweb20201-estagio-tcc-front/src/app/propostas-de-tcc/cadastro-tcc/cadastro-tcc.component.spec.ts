import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTccComponent } from './cadastro-tcc.component';

describe('CadastroTccComponent', () => {
  let component: CadastroTccComponent;
  let fixture: ComponentFixture<CadastroTccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroTccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
