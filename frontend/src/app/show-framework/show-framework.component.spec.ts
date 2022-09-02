import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFrameworkComponent } from './show-framework.component';

describe('ShowFrameworkComponent', () => {
  let component: ShowFrameworkComponent;
  let fixture: ComponentFixture<ShowFrameworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFrameworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
