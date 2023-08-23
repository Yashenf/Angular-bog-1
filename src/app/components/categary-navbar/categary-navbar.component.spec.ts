import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategaryNavbarComponent } from './categary-navbar.component';

describe('CategaryNavbarComponent', () => {
  let component: CategaryNavbarComponent;
  let fixture: ComponentFixture<CategaryNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategaryNavbarComponent]
    });
    fixture = TestBed.createComponent(CategaryNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
