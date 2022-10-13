import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdvertisingComponent } from './add-advertising.component';

describe('AddAdvertisingComponent', () => {
  let component: AddAdvertisingComponent;
  let fixture: ComponentFixture<AddAdvertisingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdvertisingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdvertisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
