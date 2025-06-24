import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalmartButtonComponent } from './walmart-button.component';

describe('WalmartButtonComponent', () => {
  let component: WalmartButtonComponent;
  let fixture: ComponentFixture<WalmartButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalmartButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalmartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
