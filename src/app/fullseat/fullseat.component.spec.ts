import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullseatComponent } from './fullseat.component';

describe('FullseatComponent', () => {
  let component: FullseatComponent;
  let fixture: ComponentFixture<FullseatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullseatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
