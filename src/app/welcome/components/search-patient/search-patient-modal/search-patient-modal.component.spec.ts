import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPatientModalComponent } from './search-patient-modal.component';

describe('SearchPatientModalComponent', () => {
  let component: SearchPatientModalComponent;
  let fixture: ComponentFixture<SearchPatientModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPatientModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPatientModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
