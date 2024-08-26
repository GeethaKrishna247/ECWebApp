import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorActivityDetailsComponent } from './creator-activity-details.component';

describe('CreatorActivityDetailsComponent', () => {
  let component: CreatorActivityDetailsComponent;
  let fixture: ComponentFixture<CreatorActivityDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatorActivityDetailsComponent]
    });
    fixture = TestBed.createComponent(CreatorActivityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
