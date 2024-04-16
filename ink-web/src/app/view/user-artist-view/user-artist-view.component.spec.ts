import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserArtistViewComponent } from './user-artist-view.component';

describe('UserArtistViewComponent', () => {
  let component: UserArtistViewComponent;
  let fixture: ComponentFixture<UserArtistViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserArtistViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserArtistViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
