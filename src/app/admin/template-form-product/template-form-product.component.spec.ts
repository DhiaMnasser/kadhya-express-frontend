import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormProductComponent } from './template-form-product.component';

describe('TemplateFormProductComponent', () => {
  let component: TemplateFormProductComponent;
  let fixture: ComponentFixture<TemplateFormProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFormProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
