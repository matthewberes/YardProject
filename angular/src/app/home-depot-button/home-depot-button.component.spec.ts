import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDepotButtonComponent } from './home-depot-button.component';

describe('HomeDepotButtonComponent', () => {
  let component: HomeDepotButtonComponent;
  let fixture: ComponentFixture<HomeDepotButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDepotButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDepotButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
