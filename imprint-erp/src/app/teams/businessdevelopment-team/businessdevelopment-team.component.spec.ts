import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessdevelopmentTeamComponent } from './businessdevelopment-team.component';

describe('BusinessdevelopmentTeamComponent', () => {
  let component: BusinessdevelopmentTeamComponent;
  let fixture: ComponentFixture<BusinessdevelopmentTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessdevelopmentTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessdevelopmentTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
