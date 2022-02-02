import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryReactionComponent } from './category-reaction.component';

describe('CategoryReactionComponent', () => {
  let component: CategoryReactionComponent;
  let fixture: ComponentFixture<CategoryReactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryReactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryReactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
