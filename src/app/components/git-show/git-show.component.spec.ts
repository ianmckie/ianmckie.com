import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitShowComponent } from './git-show.component';

describe('GitShowComponent', () => {
  let component: GitShowComponent;
  let fixture: ComponentFixture<GitShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
