import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesticideComponent } from './pesticide.component';

describe('PesticideComponent', () => {
  let component: PesticideComponent;
  let fixture: ComponentFixture<PesticideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesticideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesticideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
