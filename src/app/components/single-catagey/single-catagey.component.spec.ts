import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCatageyComponent } from './single-catagey.component';

describe('SingleCatageyComponent', () => {
  let component: SingleCatageyComponent;
  let fixture: ComponentFixture<SingleCatageyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleCatageyComponent]
    });
    fixture = TestBed.createComponent(SingleCatageyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
