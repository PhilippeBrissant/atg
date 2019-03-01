import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCotacoesComponent } from './lista-cotacoes.component';

describe('ListaCotacoesComponent', () => {
  let component: ListaCotacoesComponent;
  let fixture: ComponentFixture<ListaCotacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCotacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCotacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
