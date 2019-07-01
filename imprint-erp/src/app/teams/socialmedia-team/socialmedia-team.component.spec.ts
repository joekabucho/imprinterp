import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediaTeamComponent } from './socialmedia-team.component';

describe('SocialmediaTeamComponent', () => {
  let component: SocialmediaTeamComponent;
  let fixture: ComponentFixture<SocialmediaTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialmediaTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialmediaTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
