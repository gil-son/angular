import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFisrt2Component } from './my-fisrt2.component';

describe('MyFisrt2Component', () => {
  let component: MyFisrt2Component;
  let fixture: ComponentFixture<MyFisrt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFisrt2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFisrt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
