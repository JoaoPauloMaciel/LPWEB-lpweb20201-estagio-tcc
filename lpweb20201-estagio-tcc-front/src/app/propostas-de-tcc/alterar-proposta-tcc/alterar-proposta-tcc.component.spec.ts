import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarPropostaTccComponent } from './alterar-proposta-tcc.component';

describe('AlterarPropostaTccComponent', () => {
  let component: AlterarPropostaTccComponent;
  let fixture: ComponentFixture<AlterarPropostaTccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarPropostaTccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarPropostaTccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
