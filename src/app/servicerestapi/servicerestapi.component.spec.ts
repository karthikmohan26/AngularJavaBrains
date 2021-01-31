import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicerestapiComponent } from './servicerestapi.component';

describe('ServicerestapiComponent', () => {
  let component: ServicerestapiComponent;
  let fixture: ComponentFixture<ServicerestapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicerestapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicerestapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
