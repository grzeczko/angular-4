import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarBulletinComponent } from './calendar-bulletin.component';

describe('CalendarBulletinComponent', () => {
  let component: CalendarBulletinComponent;
  let fixture: ComponentFixture<CalendarBulletinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarBulletinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarBulletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
