import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStudioViewComponent } from './user-studio-view.component';

describe('UserStudioViewComponent', () => {
  let component: UserStudioViewComponent;
  let fixture: ComponentFixture<UserStudioViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserStudioViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserStudioViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
