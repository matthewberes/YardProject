import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsectIndexComponent } from './insect-index.component';

describe('InsectIndexComponent', () => {
  let component: InsectIndexComponent;
  let fixture: ComponentFixture<InsectIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsectIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsectIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
