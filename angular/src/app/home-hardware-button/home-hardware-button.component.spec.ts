import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHardwareButtonComponent } from './home-hardware-button.component';

describe('HomeHardwareButtonComponent', () => {
  let component: HomeHardwareButtonComponent;
  let fixture: ComponentFixture<HomeHardwareButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHardwareButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHardwareButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
