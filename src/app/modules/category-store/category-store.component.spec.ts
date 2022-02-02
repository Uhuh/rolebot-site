import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryStoreComponent } from './category-store.component';

describe('CategoryStoreComponent', () => {
  let component: CategoryStoreComponent;
  let fixture: ComponentFixture<CategoryStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
