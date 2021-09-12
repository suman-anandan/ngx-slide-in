import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSlideInComponent } from './ngx-slide-in.component';

describe('NgxSlideInComponent', () => {
  let component: NgxSlideInComponent;
  let fixture: ComponentFixture<NgxSlideInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSlideInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSlideInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
