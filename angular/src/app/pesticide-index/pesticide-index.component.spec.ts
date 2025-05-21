import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesticideIndexComponent } from './pesticide-index.component';

describe('PesticideIndexComponent', () => {
  let component: PesticideIndexComponent;
  let fixture: ComponentFixture<PesticideIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesticideIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesticideIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
