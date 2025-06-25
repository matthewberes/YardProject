import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RonaButtonComponent } from './rona-button.component';

describe('RonaButtonComponent', () => {
  let component: RonaButtonComponent;
  let fixture: ComponentFixture<RonaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RonaButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RonaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
