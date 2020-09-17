import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverPropertiesComponent } from './rover-properties.component';

describe('RoverPropertiesComponent', () => {
  let component: RoverPropertiesComponent;
  let fixture: ComponentFixture<RoverPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoverPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
