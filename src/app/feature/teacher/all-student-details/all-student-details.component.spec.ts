import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStudentDetailsComponent } from './all-student-details.component';

describe('AllStudentDetailsComponent', () => {
  let component: AllStudentDetailsComponent;
  let fixture: ComponentFixture<AllStudentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllStudentDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllStudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
