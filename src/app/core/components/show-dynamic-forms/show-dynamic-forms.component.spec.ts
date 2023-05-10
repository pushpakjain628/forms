import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDynamicFormsComponent } from './show-dynamic-forms.component';

describe('ShowDynamicFormsComponent', () => {
  let component: ShowDynamicFormsComponent;
  let fixture: ComponentFixture<ShowDynamicFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDynamicFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDynamicFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
