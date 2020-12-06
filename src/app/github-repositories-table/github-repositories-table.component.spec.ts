import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepositoriesTableComponent } from './github-repositories-table.component';

describe('GithubRepositoriesTableComponent', () => {
  let component: GithubRepositoriesTableComponent;
  let fixture: ComponentFixture<GithubRepositoriesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubRepositoriesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubRepositoriesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
