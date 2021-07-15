import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDatailsComponent } from './courses-datails.component';

describe('CoursesDatailsComponent', () => {
  let component: CoursesDatailsComponent;
  let fixture: ComponentFixture<CoursesDatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesDatailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
