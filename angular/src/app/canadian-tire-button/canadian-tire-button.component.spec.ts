import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanadianTireButtonComponent } from './canadian-tire-button.component';

describe('CanadianTireButtonComponent', () => {
  let component: CanadianTireButtonComponent;
  let fixture: ComponentFixture<CanadianTireButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanadianTireButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanadianTireButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
