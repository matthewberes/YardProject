import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonButtonComponent } from './amazon-button.component';

describe('AmazonButtonComponent', () => {
  let component: AmazonButtonComponent;
  let fixture: ComponentFixture<AmazonButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmazonButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmazonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
