import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeritMapperComponent } from './merit-mapper.component';

describe('MeritMapperComponent', () => {
  let component: MeritMapperComponent;
  let fixture: ComponentFixture<MeritMapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeritMapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeritMapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
