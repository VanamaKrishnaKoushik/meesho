import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherelectronicsComponent } from './otherelectronics.component';

describe('OtherelectronicsComponent', () => {
  let component: OtherelectronicsComponent;
  let fixture: ComponentFixture<OtherelectronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherelectronicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherelectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
