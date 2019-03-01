import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConvertComponent } from './form-convert.component';

describe('FormConvertComponent', () => {
  let component: FormConvertComponent;
  let fixture: ComponentFixture<FormConvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormConvertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
