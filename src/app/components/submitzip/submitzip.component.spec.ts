import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitzipComponent } from './submitzip.component';

describe('SubmitzipComponent', () => {
  let component: SubmitzipComponent;
  let fixture: ComponentFixture<SubmitzipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitzipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitzipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
