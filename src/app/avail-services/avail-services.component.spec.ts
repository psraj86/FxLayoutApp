import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailServicesComponent } from './avail-services.component';

describe('AvailServicesComponent', () => {
  let component: AvailServicesComponent;
  let fixture: ComponentFixture<AvailServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
