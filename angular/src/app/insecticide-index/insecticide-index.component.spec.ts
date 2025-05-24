import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsecticideIndexComponent } from './insecticide-index.component';

describe('InsecticideIndexComponent', () => {
  let component: InsecticideIndexComponent;
  let fixture: ComponentFixture<InsecticideIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsecticideIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsecticideIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
