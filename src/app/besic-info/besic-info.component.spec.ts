import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BesicInfoComponent } from './besic-info.component';

describe('BesicInfoComponent', () => {
  let component: BesicInfoComponent;
  let fixture: ComponentFixture<BesicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BesicInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BesicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
