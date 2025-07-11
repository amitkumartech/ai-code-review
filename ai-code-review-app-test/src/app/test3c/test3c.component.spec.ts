import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test3cComponent } from './test3c.component';

describe('Test3cComponent', () => {
  let component: Test3cComponent;
  let fixture: ComponentFixture<Test3cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test3cComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Test3cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
