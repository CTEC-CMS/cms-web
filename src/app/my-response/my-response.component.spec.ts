import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyResponseComponent } from './my-response.component';

describe('MyResponseComponent', () => {
  let component: MyResponseComponent;
  let fixture: ComponentFixture<MyResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
