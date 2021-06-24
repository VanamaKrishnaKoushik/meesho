import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileaccessoriesComponent } from './mobileaccessories.component';

describe('MobileaccessoriesComponent', () => {
  let component: MobileaccessoriesComponent;
  let fixture: ComponentFixture<MobileaccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileaccessoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileaccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
