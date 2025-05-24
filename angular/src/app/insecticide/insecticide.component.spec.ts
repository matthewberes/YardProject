import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsecticideComponent } from './insecticide.component';

describe('InsecticideComponent', () => {
  let component: InsecticideComponent;
  let fixture: ComponentFixture<InsecticideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsecticideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsecticideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
