import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryReactRoleComponent } from './category-react-role.component';

describe('CategoryReactRoleComponent', () => {
  let component: CategoryReactRoleComponent;
  let fixture: ComponentFixture<CategoryReactRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryReactRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryReactRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
