import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowesButtonComponent } from './lowes-button.component';

describe('LowesButtonComponent', () => {
  let component: LowesButtonComponent;
  let fixture: ComponentFixture<LowesButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowesButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
