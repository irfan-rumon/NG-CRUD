import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkItemComponent } from './framework-item.component';

describe('FrameworkItemComponent', () => {
  let component: FrameworkItemComponent;
  let fixture: ComponentFixture<FrameworkItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameworkItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
