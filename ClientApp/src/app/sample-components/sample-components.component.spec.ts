import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleComponentsComponent } from './sample-components.component';

describe('SampleComponentsComponent', () => {
  let component: SampleComponentsComponent;
  let fixture: ComponentFixture<SampleComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleComponentsComponent]
    });
    fixture = TestBed.createComponent(SampleComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
