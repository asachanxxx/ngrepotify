import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepotifyComponent } from './repotify.component';

describe('RepotifyComponent', () => {
  let component: RepotifyComponent;
  let fixture: ComponentFixture<RepotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
